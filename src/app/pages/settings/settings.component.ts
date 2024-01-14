import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
    userMenuOpen: boolean = false;
    navMenuOpen: boolean = false;
    userImage?: string;
    userName?: string;
    userEmail?: string;
    userBio?: Text;
    userTeam?: string;
    userFirstName?: string;
    userLastName?: string;
    userForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { 
    this.userForm = this.formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      bio: ['', [Validators.required]],
      team: ['', [Validators.required]]
    })
  }
ngOnInit(): void {
  // Récupérer les informations de l'utilisateur depuis le service
  this.authService.getUserInfo().then((user) => {
    this.userEmail = user.email;
    this.userName = user.username;
    this.userImage = user.user_image;
    this.userBio = user.bio;
    this.userTeam = user.team;
    this.userFirstName = user.first_name;
    this.userLastName = user.last_name;
  })
}



submitForm() {
    // Appel à l'API uniquement si des modifications ont été apportées
    const data = this.userForm.value;
    this.authService.requestApi('/api/user', 'PUT', data).then(rep => {
      console.log(rep);
      // Affichez la notification en cas de succès
      this.showSuccessNotification();
    });
  }

showSuccessNotification() {
  Swal.fire({
    icon: 'success',
    title: 'Profile Updated Successfully!',
    showConfirmButton: false,
    timer: 1500
  });
}

logout() {
  this.authService.logout();
}
}

/*
ngOnInit(): void {


  // Récupérer les informations de l'utilisateur depuis le service
  this.authService.getUserInfo().then((user) => {
    this.userEmail = user.email;
    this.userName = user.username;
    this.userImage = user.user_image;
    this.userBio = user.bio;
    this.userTeam = user.team;
    this.userFirstName = user.first_name;
    this.userLastName = user.last_name;
  })
  
}
logout() {
  this.authService.logout();
}

submitForm(){
  const data = this.userForm.value;
  this.authService.requestApi('/api/user', 'PUT', data).then(rep => {
    console.log(rep);
  })
}

}
*/
