import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  countdown = 60;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      if (this.countdown) {
        this.countdown--;
      }
    }, 1000);
  }

}
