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
import { LeaguesComponent } from './pages/leagues/leagues.component';
import { QuizjoueurComponent } from './pages/quizjoueur/quizjoueur.component';
import { RegisterComponent } from './pages/register/register.component';
import { EnglishComponent } from './pages/leagues/english/english.component';
import { SpanishComponent } from './pages/leagues/spanish/spanish.component';
import { ItalianComponent } from './pages/leagues/italian/italian.component';
import { GermanComponent } from './pages/leagues/german/german.component';
import { FrenchComponent } from './pages/leagues/french/french.component';
import { EuropaLeagueComponent } from './pages/leagues/europa-league/europa-league.component';
import { ChampionsLeagueComponent } from './pages/leagues/champions-league/champions-league.component';

const routes: Routes = [
 { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'quiz-logo', component: QuizComponent, canActivate: [AuthGuardService] },
  { path: 'quiz-joueur', component: QuizjoueurComponent, canActivate: [AuthGuardService] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuardService]  },
  {
    path: 'accueil',
    component: AccueilComponent,
    canActivate: [AuthGuardService], 
  },
  {
    path: 'leagues', 
    component: LeaguesComponent, canActivate: [AuthGuardService], children: [
      {
        path: 'english', component: EnglishComponent,
      },
      {
        path: 'spanish', component: SpanishComponent
      },
      {
        path: 'italian', component: ItalianComponent
      },
      {
        path: 'german', component: GermanComponent
      },
      {
        path: 'french', component: FrenchComponent
      },
      {
        path: 'uel', component: EuropaLeagueComponent
      },
      {
        path: 'ucl', component: ChampionsLeagueComponent
      }
    ]
  }, {
    path: 'register', component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }