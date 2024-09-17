const express = require('express');
const { tasksRouter } = require('./routes/tasksRouter.js');

const app = express();

const PORT = 3300;

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});

app.use(express.json());

app.use('/tasks', tasksRouter);


