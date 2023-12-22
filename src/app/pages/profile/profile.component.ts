import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userImage?: string;
  userName?: string;
  userEmail?: string;
  userBio?: Text;
  userTeam?: string;
  userFirstName?: string;
  userLastName?: string;

  constructor(private authService: AuthService) { }

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
}
