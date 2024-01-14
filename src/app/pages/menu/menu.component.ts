import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  userMenuOpen: boolean = false; 
  navMenuOpen: boolean = false;
  userImage?: string;
  userName?: string;
  userEmail?: string;

  constructor(private authService: AuthService, private router: Router) { }

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
    this.router.navigate(['/login']);
}
}
