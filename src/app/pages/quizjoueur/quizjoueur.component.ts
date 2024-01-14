import { Component} from '@angular/core';
import { QuizService } from '../../shared/services/quiz.service';
import { AuthService } from '../../shared/services/auth.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-quizjoueur',
  templateUrl: './quizjoueur.component.html',
  styleUrls: ['./quizjoueur.component.scss']
})
export class QuizjoueurComponent {

  quizDataJoueur: any[] = []; // Contient les données du quiz
  currentQuestionIndex = 0; // Indice de la question actuelle
  userAnswer = ''; // La réponse de l'utilisateur
  quizStarted: boolean = false;
  timeRemaining: string = '01:00';
  answerValid: boolean = false;
  answerInvalid: boolean = false;
  answerSubmitted: boolean = false;
  showQuiz = false;
  score: number = 0;
  isQuizFinished: boolean = false;
  timer : any;
  
  constructor(private quizService: QuizService, private authService: AuthService) {}

finishQuiz() {
  clearInterval(this.timer); // Arrêter le minuteur
  this.isQuizFinished = true;
  this.showQuiz = false;
  swal.fire('Quiz terminé !', `Votre score est de ${this.score} / ${this.quizDataJoueur.length}.`, 'info');

}

  startQuiz() {
    this.quizService.getQuizJoueurData().then(data => {
      this.quizDataJoueur = data;
      this.quizStarted = true;
      this.showQuiz = true; // Affiche le quiz après le chargement des données
      this.startTimer();
    });
    
  }
  submitAnswer() {
    const correctAnswer = this.quizDataJoueur[this.currentQuestionIndex].nom_joueur.toLowerCase();
    if (this.userAnswer.toLowerCase() === correctAnswer) {
      swal.fire('Bonne réponse !', '', 'success');
      this.score++;
    } else {
      swal.fire('Mauvaise réponse !', '', 'error');
    }
    this.moveToNextQuestion();
    this.userAnswer = ''; // Effacer la réponse de l'utilisateur
  }

  moveToNextQuestion() {
    if (this.currentQuestionIndex < this.quizDataJoueur.length - 1) {
      this.currentQuestionIndex++;
    } else {
   this.finishQuiz();
    }
  }

  startTimer() {
    let timeInSeconds = 60; // 2 minutes
    this.timer = setInterval(() => {
      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = timeInSeconds % 60;
      this.timeRemaining = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      timeInSeconds--;

      if (timeInSeconds < 0) {
        clearInterval(this.timer);
        swal.fire('Temps écoulé !', '', 'info');
        this.quizStarted = false;
        this.showQuiz = false;
        this.finishQuiz();
      }
    }, 1000);
  }

  restartQuiz() {
    this.isQuizFinished = false;
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.userAnswer = '';
    this.showQuiz = false;
    clearInterval(this.timer);
    this.timeRemaining = '01:00';
    this.quizStarted = false;
  }
  
}


/*
  ngOnInit(): void {
    this.loadquizDataJoueur();
  }

  loadquizDataJoueur() {
    this.quizService.getquizDataJoueur().then((data) => {
      this.quizDataJoueur = data;
      console.log(this.quizDataJoueur); // Affichage des données récupérées dans la console
    }).catch((error) => {
      console.error('Erreur lors du chargement des données du quiz :', error);
    });
  }
*/
  