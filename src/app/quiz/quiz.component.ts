import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit{

  @Input() quizQuestions;

  ngOnInit(): void {
    console.log(this.quizQuestions);
  }
}
