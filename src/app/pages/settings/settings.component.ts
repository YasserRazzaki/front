import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
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
