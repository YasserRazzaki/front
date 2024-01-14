// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public accessToken: string | null = null;
  public user?: User;

  constructor(private http: HttpClient, private router: Router) {
    this.getAccessToken();
    this.handleOAuthResponse();
    this.isTokenStored();
    this.getUserInfo();
  }

  // Méthode pour initier le processus d'authentification
  initiateOAuth(provider: string) {
    return `${environment.apiUrl}/login/${provider}`;
  }

  // Méthode pour gérer la réponse d'authentification OAuth
  handleOAuthResponse() {
    const code = this.extractCodeFromURL();
    
    if (code) {
        const provider = this.detectProviderFromURL(); // Implement this function to detect the provider based on the URL
        if (provider === 'google') {
            this.exchangeCodeForToken(code, 'google');
        } else if (provider === 'github') {
            this.exchangeCodeForToken(code, 'github');
        } else {
            console.error('Unknown provider:', provider);
        }
    }
}

detectProviderFromURL(): string | null {
  const url = window.location.href;

  if (url.includes('google')) {
      return 'google';
  } else if (url.includes('github')) {
      return 'github';
  } else {
      return null;
  }
}


  // Méthode pour échanger le code d'authentification contre un token d'accès
  private exchangeCodeForToken(code: string, provider: string) {
    const body = { code: code };
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    this.http.get(`${environment.apiUrl}/api/login/${provider}/callback?code=${code}`, { headers }).subscribe(
        (response: any) => {
            console.log(response);
            if (response.token) {
                this.accessToken = response.token.plainTextToken;
                console.log(this.accessToken);
                localStorage.setItem('accessToken', this.accessToken || '');
                this.router.navigate(['/accueil']);
                window.location.reload();
            } else {
                // Handle authentication failure
                this.router.navigate(['/login']);
            }
        },
        (error) => {
            console.error('Authentication error:', error);
            // Handle errors
        }
    );
}

  getAccessToken(): string | null {
    // Vérifier d'abord si le token est déjà en mémoire
    if (this.accessToken !== null) {
      return this.accessToken;
    }
    // Sinon, vérifier le local storage
    const storedToken = localStorage.getItem('accessToken');
    
    if (storedToken !== null) {
      console.log("token", storedToken);
      this.accessToken = storedToken;
      return this.accessToken;
    }
    return null;
    
  }
  isTokenStored(): boolean {
    return localStorage.getItem('accessToken') !== null;
  }

  public async requestApi(action: string, method: string = 'GET', datas: any = {}, httpOptions: any = {}): Promise<any> {
    const methodWanted = method.toLowerCase();
    let route = environment.apiUrl + action;

    let req = null;

    if (httpOptions.headers === undefined) {
      httpOptions.headers = new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      });
    }

    if (this.accessToken) {
      httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.accessToken);
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



  async getUserInfo(): Promise<User> {
    // Vous pouvez implémenter la logique pour récupérer les informations de l'utilisateur ici
    if(!this.user){
      return await this.requestApi('/api/user').then((data: User) => {
        this.user = data;
        return this.user;
      })
    }
    return this.user;
  }

  // Méthode pour extraire le code d'authentification de l'URL
  private extractCodeFromURL(): string | null {
    const url = window.location.href;
    const match = url.match(/code=([^&]*)/);

    if (match && match[1]) {
      return match[1];
    }
    return null;
  }
  // Méthode pour vérifier si l'utilisateur est authentifié
  isAuthenticated(): boolean {
    return !!this.accessToken;
  }
   // Méthode pour se déconnecter
   logout() {
    this.accessToken = null;
    localStorage.removeItem('accessToken');
    this.router.navigate(['/login']);
    this.reloadPage(); // Rafraîchir la page après la déconnexion
  }
  reloadPage(){
    window.location.reload();
  }
}
