/*import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AuthGuardService } from './shared/guards/auth-guard.service';
import { GeneralSettingsComponent } from './pages/settings/general-settings/general-settings.component';
import { PhotoSettingsComponent } from './pages/settings/photo-settings/photo-settings.component';
import { FootballMatchesComponent } from './pages/football-matches/football-matches.component';
import { LeaguesComponent } from './pages/leagues/leagues.component';

const routes: Routes = [
//  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'quiz-logo', component: QuizComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent,
    children: [
      {
        path: '', component: GeneralSettingsComponent,
      },
      {
        path: 'photo', component: PhotoSettingsComponent
      }
    ]
  },
  {
    path: 'accueil',
    component: AccueilComponent,
    canActivate: [AuthGuardService], 
  },
  {
    path: 'calendar', 
    component: FootballMatchesComponent
  },
  {
    path: 'leagues', 
    component: LeaguesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }