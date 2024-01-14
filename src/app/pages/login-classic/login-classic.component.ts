import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/shared/services/registration.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-classic',
  templateUrl: './login-classic.component.html',
  styleUrls: ['./login-classic.component.scss']
})
export class LoginClassicComponent{
 /* loginForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private regser: RegistrationService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  loginCre() {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      this.regser.loginCla(credentials).subscribe(
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
