import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit{

  @Input() quizQuestions;

  bestScore;
  question;
  timeOut = false;
  currentScore = 0;
  questionIndex = 0;

  ngOnInit(): void {
    console.log(this.quizQuestions);
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
    this.question = this.quizQuestions[++this.questionIndex];
  }

  gameOver(): void {
    this.timeOut = true;
    if (this.currentScore >= this.bestScore) {
      this.bestScore = this.currentScore;
      sessionStorage.setItem('CK:best-score', this.bestScore.toString());
    }
  }
}
