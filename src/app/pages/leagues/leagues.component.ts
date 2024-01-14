import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss']
})
export class LeaguesComponent{
  userMenuOpen: boolean = false;
  navMenuOpen: boolean = false;
  userImage?: string;
  userName?: string;
  userEmail?: string;
  activeTab = 'general';

  showTab(tab: string) {
    this.activeTab = tab;
  }
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // Récupérer les informations de l'utilisateur depuis le service
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