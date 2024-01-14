import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front';
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
