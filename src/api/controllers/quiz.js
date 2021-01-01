
const apiMoviesController = require('./api-movies');
const utilsFunctions = require('../utils');
const config = require('config');
let quizMovieQuestions = [];

exports.createQuizQuestions = () => {
  utilsFunctions.forXtimes (config.get('maxPages')) (async (i) => {
    try {
      let data = await apiMoviesController.getMoviesByPageNumber(++i);
      quizMovieQuestions = quizMovieQuestions.concat(data);
    }
    catch(e) {
      console.error(e);
    }
  })
};

exports.getQuiz = (req, res, next) => {
  res.status(200).json(quizMovieQuestions);
}
