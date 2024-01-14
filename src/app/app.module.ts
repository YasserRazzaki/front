import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AuthService } from './shared/services/auth.service';
import { QuizComponent } from './pages/quiz/quiz.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { GeneralSettingsComponent } from './pages/settings/general-settings/general-settings.component';
import { PhotoSettingsComponent } from './pages/settings/photo-settings/photo-settings.component';
import { FootballMatchesComponent } from './pages/football-matches/football-matches.component';
import { LeaguesComponent } from './pages/leagues/leagues.component';
import { MenuComponent } from './pages/menu/menu.component';
import { QuizjoueurComponent } from './pages/quizjoueur/quizjoueur.component';
import { LoginClassicComponent } from './pages/login-classic/login-classic.component';
import { RegisterComponent } from './pages/register/register.component';
import { EnglishComponent } from './pages/leagues/english/english.component';
import { SpanishComponent } from './pages/leagues/spanish/spanish.component';
import { ItalianComponent } from './pages/leagues/italian/italian.component';
import { FrenchComponent } from './pages/leagues/french/french.component';
import { GermanComponent } from './pages/leagues/german/german.component';
import { ChampionsLeagueComponent } from './pages/leagues/champions-league/champions-league.component';
import { EuropaLeagueComponent } from './pages/leagues/europa-league/europa-league.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccueilComponent,
    QuizComponent,
    ProfileComponent,
    SettingsComponent,
    GeneralSettingsComponent,
    PhotoSettingsComponent,
    FootballMatchesComponent,
    LeaguesComponent,
    MenuComponent,
    QuizjoueurComponent,
    LoginClassicComponent,
    RegisterComponent,
    EnglishComponent,
    SpanishComponent,
    FrenchComponent,
    GermanComponent,
    ItalianComponent,
    ChampionsLeagueComponent,
    EuropaLeagueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
