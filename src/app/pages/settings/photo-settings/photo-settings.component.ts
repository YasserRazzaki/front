import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-photo-settings',
  templateUrl: './photo-settings.component.html',
  styleUrls: ['./photo-settings.component.scss']
})
export class PhotoSettingsComponent {
    userMenuOpen: boolean = false;
    navMenuOpen: boolean = false;
    userImage?: string;
    userIg?: string;
    userFb?: string;
    userTw?: string;
    activeTab = 'uploadImages';
    userSocialForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { 
    this.userSocialForm = this.formBuilder.group({
      facebook_link: ['', [Validators.required]],
      twitter_link: ['', [Validators.required]],
      instagram_link: ['', [Validators.required]],
    })
  }
  showTab(tab: string) {
    this.activeTab = tab;
  }
ngOnInit(): void {
  // Récupérer les informations de l'utilisateur depuis le service
  this.authService.getUserInfo().then((user) => {
    this.userImage = user.user_image;
    this.userFb = user.facebook_link;
    this.userTw =  user.twitter_link; 
    this.userIg = user.instagram_link;
  })
}

submitSocialsForm() {
  // Appel à l'API uniquement si des modifications ont été apportées
  const data = this.userSocialForm.value;
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


