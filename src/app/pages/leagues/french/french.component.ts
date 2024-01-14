import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MatchService } from 'src/app/shared/services/match.service';

@Component({
  selector: 'app-french',
  templateUrl: './french.component.html',
  styleUrls: ['./french.component.scss']
})
export class FrenchComponent {
  userImage?: string;
  userName?: string;
  userEmail?: string;
  userMenuOpen: boolean = false;
  navMenuOpen: boolean = false;
  standings: any[] = [];
  constructor(private matchService: MatchService, private authService:AuthService) { }

  ngOnInit(): void {
 this.matchService.getFrenchLeague().then(data => {
   this.standings = data;
   }).catch(error => {
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
