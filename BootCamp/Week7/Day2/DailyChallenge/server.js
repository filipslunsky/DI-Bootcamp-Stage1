const express = require('express');

const { usersRouter } = require('./routes/usersRouter.js');

const app = express();

const PORT = 3200;

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});

app.use(express.json());

app.use('/', usersRouter);

