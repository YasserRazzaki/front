// registration.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(private authService : AuthService, private http: HttpClient) {}

  register(user: User) {
    // Utilisez le bon endpoint pour l'inscription, et envoyez les données utilisateur
   // return this.authService.requestApi('/api/register', 'POST', user);
   return this.http.post(`${environment.apiUrl}/api/register`, user); 
  }
}
