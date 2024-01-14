import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/shared/services/match.service';
import { AuthService } from '../../shared/services/auth.service';
import { WsService } from '../../shared/services/ws-service.service';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  userImage?: string;
  userName?: string;
  userEmail?: string;
  userMenuOpen: boolean = false;
  navMenuOpen: boolean = false;

  matches: any[] = [];
  constructor(
    private matchService: MatchService,
    private authService:AuthService,
    private wsService: WsService
  ) { }

  sendMessage(): void {
    this.wsService.sendMessage('Ceci est un message via WebSocket !');
  }

  ngOnInit(): void {
    this.matchService.getMatches()
      .then(data => {
        this.matches = data;
      })
      .catch(error => {
        console.error(error);
      });
    this.authService.getUserInfo().then((user) => {
      this.userEmail = user.email;
      this.userName = user.username;
      this.userImage = user.user_image;
    });
  }

  logout() {
    this.authService.logout();
  }
}
