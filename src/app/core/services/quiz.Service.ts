import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuizService {

  public quizQuestions = [];

  constructor(
    private https: HttpClient,
  ) {}

  getQuizQuestions(): any {
    return this.https.get('api/quiz');
  }
}
