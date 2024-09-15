const express = require('express');
const { startQuiz, nextQuestion, getScore } = require('../controllers/controllers.js');

const router = express.Router();

router.use(express.json());

router.get('/', startQuiz);

router.post('/', nextQuestion);

router.get('/score', getScore);

module.exports = {
    router
}