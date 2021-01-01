import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss']
})
export class WelcomeScreenComponent implements OnInit {

  @Output() startQuizEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  startQuiz(): void {
    this.startQuizEvent.emit();
  }

}
