import { Component, Input } from '@angular/core';
import { QuestionModel } from '../../core/models/quiz.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() question: QuestionModel;

}
