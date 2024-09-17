const express = require('express');
const path = require('path');
const cors = require('cors');
const { usersRouter } = require('./routes/usersRouter.js');
const PORT = 5400;
const app = express();

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});

app.use(cors());

app.use(express.json());

app.use('/register', express.static(path.join(__dirname, 'public')));

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

app.use('/login', express.static(path.join(__dirname, 'public')));
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.use('/', usersRouter);