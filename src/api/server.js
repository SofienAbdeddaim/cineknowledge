const express = require('express');

const app = express();

const quizRoutes = require('./routes/quiz');
const quizController = require('./controllers/quiz');

quizController.createQuizQuestions();

app.use(quizRoutes);

app.listen(3000, () => {
  console.log('JSON Server is running');
});

