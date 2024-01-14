import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, public authService: AuthService, private route: ActivatedRoute, private router: Router) {
  }
  user?: any;
  loginForm!: FormGroup;
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
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
/*loginCre() {
  if (this.loginForm.valid) {
    const credentials = this.loginForm.value;
    this.authService.loginCla(credentials).subscribe(
      (response) => {
        console.log('Connexion réussie !', response);
        // Ajoutez des actions après une connexion réussie, par exemple :
        Swal.fire('Success', 'Connexion réussie !', 'success');
        this.router.navigate(['/accueil']); // Redirigez l'utilisateur vers la page d'accueil
      },
      (error) => {
        console.error('Erreur lors de la connexion', error);
        // Gérez les erreurs de connexion ici
        Swal.fire('Erreur', 'Identifiants incorrects', 'error');
      }
    );
  }
}*/
}