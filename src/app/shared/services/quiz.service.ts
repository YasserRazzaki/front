import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor(private AuthService : AuthService, private http: HttpClient) {}
    getQuizData() {
    return this.AuthService.requestApi('/api/quiz/logo');
  }

  

}