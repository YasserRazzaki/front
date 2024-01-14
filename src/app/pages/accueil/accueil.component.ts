import { Component } from '@angular/core';
import { MatchService } from 'src/app/shared/services/match.service';
import {webSocket} from 'rxjs/webSocket'
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {
  message ='hello';
  subject = webSocket('ws://localhost:6001/')
  sendToServer() {
this.subject.subscribe();
this.subject.next(this.message);
this.subject.complete();
  }
  leagues = [
    { id: 39, name: 'English Premier League' },
    { id: 61, name: 'Ligue 1' },
    // Ajoutez d'autres ligues selon vos besoins
  ];

  selectedLeagueId: number | undefined;
  selectedLeagueName: string | undefined;
  standings: any[] = []; // Assurez-vous de définir le type correct pour vos données

  constructor(private matchService: MatchService) {}

  getStandings(): void {
    if (this.selectedLeagueId !== undefined) {
      this.matchService.getRankingById(this.selectedLeagueId, 2023)
        .then(data => {
          this.standings = data;
          // Obtenez le nom de la ligue sélectionnée
          this.selectedLeagueName = this.leagues.find(league => league.id === this.selectedLeagueId)?.name;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
}
