import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  quizDisplayed = false;
  title = 'Up to you to find a great one';

  showQuiz(): void {
    this.quizDisplayed = true;
  }
}
