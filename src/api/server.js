const express = require('express');

const config = require('config');
const utilsFunctions = require('./utils');
const apiMovies = require('./controllers/api-movies');

const app = express();

let quizMovieQuestions = [];

utilsFunctions.forXtimes (config.get('maxPages')) (async (i) => {
  try {
    let data = await apiMovies.getMovies(++i);
    quizMovieQuestions = quizMovieQuestions.concat(data);
  }
  catch(e) {
    console.error(e);
  }
});


app.listen(3000, () => {
  console.log('JSON Server is running');
});

