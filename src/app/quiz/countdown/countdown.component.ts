import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  countdown = 60;

  @Output() gameOverEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      } else {
        this.gameOverEvent.emit();
      }
    }, 1000);
  }

}
