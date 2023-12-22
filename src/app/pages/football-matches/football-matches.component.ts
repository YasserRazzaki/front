import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/shared/services/match.service';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-football-matches',
  templateUrl: './football-matches.component.html',
  styleUrls: ['./football-matches.component.scss']
})
export class FootballMatchesComponent {
  userImage?: string;
  userName?: string;
  userEmail?: string;
  userMenuOpen: boolean = false;
  navMenuOpen: boolean = false;

  matches: any[] = [];
  constructor(private matchService: MatchService, private authService:AuthService) { }

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
      })
  }
  logout() {
    this.authService.logout();
}
}