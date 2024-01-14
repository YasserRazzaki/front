// register.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/shared/services/registration.service';
import Swal from 'sweetalert2';
Router

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder, private registrationService: RegistrationService, private router:Router) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const user = this.registrationForm.value;
   //   this.registrationService.register(user).then(
    this.registrationService.register(user).subscribe(
        (response) => {
          Swal.fire('Inscription réussie !', '', 'success');
          console.log('Inscription réussie !', response);
          console.log(user);
          this.router.navigate(['/login']).then(() => {
            // Rafraîchissez la page de connexion
            window.location.reload();
          });
          },
        (error) => {
          console.error('Erreur lors de l\'inscription', error);
          // Gérer les erreurs d'inscription ici
        }
      );
    }
  }
}
