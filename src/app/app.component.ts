import { Component, OnInit } from '@angular/core';
import { QuestionModel } from './core/models/quiz.model';
import { QuizService } from './core/services/quiz.Service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Up to you to find a great one';
  quizDisplayed = false;
  quizQuestions: QuestionModel[] = [];

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizService.getQuizQuestions()
    .subscribe((questions: QuestionModel[]) => {
      questions.forEach((question: QuestionModel) => {
        this.quizQuestions.push({
          ...question,
          possibleWrongYear: question.year - Math.round(Math.random()),
        });
      });
    });
  }

  showQuiz(): void {
    this.quizDisplayed = true;
  }
}
