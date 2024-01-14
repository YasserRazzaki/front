import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class MatchService {
 constructor(public http: HttpClient) {}
  getMatches(): Promise<any> {
    return this.requestApi('/fixtures?live=all', 'GET')
      .then(response => {
        console.log('Données reçues:', response.response);
        return response.response;
      })
      .catch(error => {
        console.error('API Error:', error);
        throw new Error(error);
      });}

      getEnglishLeague(): Promise<any> {
        return this.requestApi('/standings?league=39&season=2023', 'GET')
          .then(response => {
            console.log('Données de leagues reçues:', response.response);
            return response.response;
          })
          .catch(error => {
            console.error('API Error:', error);
            throw new Error(error);
          });}

          getFrenchLeague(): Promise<any> {
            return this.requestApi('/standings?league=61&season=2023', 'GET')
              .then(response => {
                console.log('Données de leagues reçues:', response.response);
                return response.response;
              })
              .catch(error => {
                console.error('API Error:', error);
                throw new Error(error);
              });}

              getGermanLeague(): Promise<any> {
                return this.requestApi('/standings?league=78&season=2023', 'GET')
                  .then(response => {
                    console.log('Données de leagues reçues:', response.response);
                    return response.response;
                  })
                  .catch(error => {
                    console.error('API Error:', error);
                    throw new Error(error);
                  });}

                  getItalianLeague(): Promise<any> {
                    return this.requestApi('/standings?league=135&season=2023', 'GET')
                      .then(response => {
                        console.log('Données de leagues reçues:', response.response);
                        return response.response;
                      })
                      .catch(error => {
                        console.error('API Error:', error);
                        throw new Error(error);
                      });}

                      getSpanishLeague(): Promise<any> {
                        return this.requestApi('/standings?league=140&season=2023', 'GET')
                          .then(response => {
                            console.log('Données de leagues reçues:', response.response);
                            return response.response;
                          })
                          .catch(error => {
                            console.error('API Error:', error);
                            throw new Error(error);
                          });}
                          getUCL(): Promise<any> {
                            return this.requestApi('/standings?league=2&season=2023', 'GET')
                              .then(response => {
                                console.log('Données de leagues reçues:', response.response);
                                return response.response;
                              })
                              .catch(error => {
                                console.error('API Error:', error);
                                throw new Error(error);
                              });}

                              getUEL(): Promise<any> {
                                return this.requestApi('/standings?league=3&season=2023', 'GET')
                                  .then(response => {
                                    console.log('Données de leagues reçues:', response.response);
                                    return response.response;
                                  })
                                  .catch(error => {
                                    console.error('API Error:', error);
                                    throw new Error(error);
                                  });}
  
          getRankingById(leagueId: number, season: number): Promise<any> {
            const endpoint = `/standings?league=${leagueId}&season=${season}`;
            return this.requestApi(endpoint, 'GET')
              .then(response => {
                console.log(`Données de standings pour la ligue et la saison actuelle reçues:`, response);
                return response; // Assurez-vous que la structure des données correspond à ce que vous attendez
              })
              .catch(error => {
                console.error('API Error:', error);
                throw new Error(error);
              });
          }

  public async requestApi(action: string, method: string = 'GET', datas: any = {}, httpOptions: any = {}): Promise<any> {
    const methodWanted = method.toLowerCase();
    let route = environment.footApiUrl + action;

    let req = null;

    if (httpOptions.headers === undefined) {
      httpOptions.headers = new HttpHeaders({
       // 'x-apisports-key': '4545d2ea053ef4b802b23ece1f027700', première clé
       'x-apisports-key': '19ff506253ed1af04c6325700946bc26',
        'Accept': 'application/json',
      });
    }

    switch (methodWanted) {
      case 'post':
        req = this.http.post(route, datas, httpOptions);
        break;
      case 'patch':
        req = this.http.post(route, datas, httpOptions);
        break;
      case 'put':
        req = this.http.put(route, datas, httpOptions);
        break;
      case 'delete':
        route += '?' + Object.keys(datas).map((key) => {
          return key + '=' + datas[key];
        }).join('&');

        req = this.http.delete(route, httpOptions);
        break;
      default:
        route + Object.keys(datas).map((key) => {
          return key + '=' + datas[key];
        }).join('&');

        req = this.http.get(route, httpOptions);
        break;
    }

    return req.toPromise();
  }
}