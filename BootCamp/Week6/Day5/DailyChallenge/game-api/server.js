import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { emojis, scores } from './data.js';
import { getQuestion } from './questionsGame.js';

const app = express();

app.use(cors());

const PORT = 5100;

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const upload = multer();
app.use(upload.none());

// get all emojis
app.get('/api/emojis', (req, res) => {
    res.json(emojis);
});

// get one emoji by id
app.get('/api/emojis/:id', (req, res) => {
    const { id } = req.params;
    const indx = emojis.findIndex(item => item.id == id);
    if (indx === -1) {
        return res.status(404).json({message: "emoji not found"});
    }
    res.send(emojis[indx]);
});

// getting all scores
app.get('/api/scores', (req, res) => {
    res.json(scores);
});

// adding new score
app.post('/api/scores', (req, res) => {
    let maxId = 0;
    for (let score of scores) 
        maxId = score.id > maxId ? score.id : maxId;
    let newId = maxId + 1;
    const { name, score } = req.body;
    const newScore = {id: newId, name: name, score: score};
    scores.push(newScore);
    res.status(201).json(scores);
});


let lastEmoji = null;
// getting a question
app.get('/api/question', (req, res) => {
    let [ emoji, allAnswers, html ] = getQuestion();
    lastEmoji = emoji;
    res.json(html);
});

app.post('/api/question', (req, res) => {
    let userAnswer = req.body.emoji;
    if (!lastEmoji) {
        return res.status(500).send('Error: lastEmoji is undefined.');
    }
    if (userAnswer === lastEmoji.name) {
        res.send('correct');
    } else {
        res.send('wrong');
    }
});



