import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { QuizComponent } from './quiz/quiz.component';
import { CountdownComponent } from './quiz/countdown/countdown.component';
import { ScoresComponent } from './quiz/scores/scores.component';
import { CardComponent } from './quiz/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeScreenComponent,
    QuizComponent,
    CountdownComponent,
    ScoresComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
