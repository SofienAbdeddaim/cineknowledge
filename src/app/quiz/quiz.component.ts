import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { CountdownComponent } from './countdown/countdown.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit{

  @ViewChild(CountdownComponent, { static: false }) countdownComponentRef: CountdownComponent;
  @Input() quizQuestions;

  bestScore;
  question;
  resetTime;
  timeOut = false;
  currentScore = 0;
  questionIndex = 0;

  ngOnInit(): void {
    if (sessionStorage.getItem('CK:best-score')) {
      this.bestScore = +sessionStorage.getItem('CK:best-score');
    } else {
      this.bestScore = 0;
    }
    this.question = this.quizQuestions[this.questionIndex];
  }

  trueAnswer(val): void {
    this.currentScore = val ? ++this.currentScore : this.currentScore;
    this.bestScore = this.currentScore > this.bestScore ? this.currentScore : this.bestScore;
    if (this.questionIndex >= this.quizQuestions.length - 1) {
      this.questionIndex = 0;
    }
    this.question = this.quizQuestions[++this.questionIndex];
  }

  gameOver(): void {
    this.timeOut = true;
    if (this.currentScore >= this.bestScore) {
      this.bestScore = this.currentScore;
      sessionStorage.setItem('CK:best-score', this.bestScore.toString());
    }
  }

  retry(): void {
    this.timeOut = false;
    this.currentScore = 0;
    this.countdownComponentRef.countdown = 60;
  }
}
