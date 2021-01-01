const express = require('express');

const quizController = require('../controllers/quiz');

const router = express.Router();

router.get('/quiz', quizController.getQuiz);

module.exports = router;
