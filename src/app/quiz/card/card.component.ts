import { Component, Input, Output, EventEmitter } from '@angular/core';
import { QuestionModel } from '../../core/models/quiz.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Output() trueAnswerEvent = new EventEmitter<boolean>();

  @Input() question: QuestionModel;

  yesAnswer(): void {
    this.trueAnswerEvent.emit(this.question.year === this.question.possibleWrongYear);
  }

  noAnswer(): void {
    this.trueAnswerEvent.emit(this.question.year !== this.question.possibleWrongYear);
  }
}
