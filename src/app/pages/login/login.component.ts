import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
//import { AuthgithubService } from 'src/app/shared/services/authgithub.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, private route: ActivatedRoute, private router: Router) {
  }
  user?: any;
  ngOnInit() {
    if (this.authService.isTokenStored()) {
      console.log('Le token est stocké dans le local storage.');
    } else {
      console.log('Aucun token dans le local storage.');
    }
    this.user = this.authService.getUserInfo();
     if (this.authService.isAuthenticated()) {
      this.router.navigate(['/accueil']);
      console.log('Utilisateur déjà connecté.');
      // Rediriger où vous devez
    } else {console.log('Utilisateur pas connecté.');}
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
}
}

/*   if (this.authGithubService.isTokenStored()) {
      console.log('Le token github est stocké dans le local storage.');
    } else {
      console.log('Aucun token githb dans le local storage.');
    }
    // Abonnez-vous aux modifications des paramètres d'URL
    this.user = this.authGithubService.getUserInfo();
     // Vérifier si l'utilisateur est déjà authentifié
     if (this.authGithubService.isAuthenticated()) {
      // L'utilisateur est déjà connecté, rediriger vers la page d'accueil
      console.log('Utilisateur gthb déjà connecté.');
      // Rediriger où vous devez
    } else {console.log('Utilisateur gthb pas connecté.');}
  } */