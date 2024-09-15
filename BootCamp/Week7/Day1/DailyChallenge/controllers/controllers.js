const { triviaQuestions, userScores } = require('../config/data.js');

const startQuiz = (req, res) => {
    res.send(triviaQuestions[0].question);
};

const nextQuestion = (req, res) => {
    const { id, index, answer } = req.body;
    let userIndex = userScores.findIndex(user => user.id === id);
    if (userIndex === -1) {
        let newUser = {id: id, index: 0, score: 0};
        userScores.push(newUser);
        userIndex = userScores.length - 1;
    }

    let message = '';
    if (answer === triviaQuestions[index].answer) {
        message = 'right';
        userScores[userIndex].score++;
        userScores[userIndex].index++; 
    } else {
        message = 'wrong';
        userScores[userIndex].index++;
    }
    let nextStep = '';
    if (index < triviaQuestions.length - 1) {
        nextStep = triviaQuestions[index + 1].question;
    } else {
        nextStep = `check your score for id ${id} on /quiz/score`;
    }
     res.json({message, nextStep});
};

const getScore = (req, res) => {
    const { id } = req.body;
    let userIndex = userScores.findIndex(user => user.id === id);
    if (userIndex === -1) {
        res.status(404).json({message: `user with ID ${id} not found`});
    } else {
        let score = userScores[userIndex].score;
        res.json({message: score})
    };
};



module.exports = {
    startQuiz,
    nextQuestion,
    getScore
}

