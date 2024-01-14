import { Component } from '@angular/core';
import swal from 'sweetalert2';
import { QuizService } from '../../shared/services/quiz.service';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {
  quizData: any[] = [];
  currentQuestionIndex = 0;
  userAnswer = '';
  quizStarted = false;
  timeRemaining = '01:00';
  answerValid = false;
  answerInvalid = false;
  answerSubmitted = false;
  showQuiz = false;
  score = 0;
  isQuizFinished = false;
  timer: any;

  constructor(private quizService: QuizService, private authService: AuthService) {}

  finishQuiz() {
    clearInterval(this.timer);
    this.isQuizFinished = true;
    this.showQuiz = false;
    swal.fire('Quiz terminé !', `Votre score est de ${this.score} / ${this.quizData.length}.`, 'info');
  }

  startQuiz() {
    this.quizService.getQuizData().then(data => {
      this.quizData = data.map((quiz: any) => {
        return {
          ...quiz,
          propositions: JSON.parse(quiz.propositions)
        };
      });

      console.log(this.quizData);
      this.quizStarted = true;
      this.showQuiz = true;
      this.startTimer();
    });
  }

  submitAnswer(selectedProposition: string) {
    const correctAnswer = this.quizData[this.currentQuestionIndex].nom.toLowerCase();
    
    if (selectedProposition.toLowerCase() === correctAnswer) {
      swal.fire('Bonne réponse !', '', 'success');
      this.score++;
    } else {
      swal.fire('Mauvaise réponse !', '', 'error');
    }
  
    this.moveToNextQuestion();
  }

  moveToNextQuestion() {
    if (this.currentQuestionIndex < this.quizData.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.finishQuiz();
    }
  }

  startTimer() {
    let timeInSeconds = 60;
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
