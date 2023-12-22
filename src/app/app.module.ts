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
    MenuComponent
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
