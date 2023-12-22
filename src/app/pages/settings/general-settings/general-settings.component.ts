import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['./general-settings.component.scss']
})
export class GeneralSettingsComponent {
    userMenuOpen: boolean = false;
    navMenuOpen: boolean = false;
    userImage?: string;
    userName?: string;
    userEmail?: string;
    userBio?: Text;
    userTeam?: string;
    userFirstName?: string;
    userLastName?: string;
    activeTab = 'general';

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
  showTab(tab: string) {
    this.activeTab = tab;
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
