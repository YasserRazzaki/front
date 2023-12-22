import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, private route: ActivatedRoute, private router: Router) {
  }
  user?: any;
  emailCre?:any;
  passwordCre?:any;
  ngOnInit() {
    if (this.authService.isTokenStored()) {
      console.log('Le token est stocké dans le local storage.');
    } else {
      console.log('Aucun token dans le local storage.');
    }
    // Abonnez-vous aux modifications des paramètres d'URL
    this.user = this.authService.getUserInfo();
     // Vérifier si l'utilisateur est déjà authentifié
     if (this.authService.isAuthenticated()) {
      // L'utilisateur est déjà connecté, rediriger vers la page d'accueil
      console.log('Utilisateur déjà connecté.');
      // Rediriger où vous devez
    } else {console.log('Utilisateur pas connecté.');}
  }

loginCredentials(emailCre: string, passwordCre: string) {
  this.authService.loginCredentials(emailCre, passwordCre).subscribe(
    (response: any) => {
      console.log(response);

      // Vérifiez si le serveur a renvoyé un token
      if (response.token) {
        // Stockez le token dans le localStorage ou dans un service d'authentification
        localStorage.setItem('accessTokenCre', response.token);
        this.router.navigate(['/accueil']);
      } else {
        console.error('Token non reçu dans la réponse du serveur');
      }
    },
    (error) => {
      console.error(error);
    }
  );
}
}