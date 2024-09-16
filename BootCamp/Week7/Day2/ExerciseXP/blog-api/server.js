const express = require('express');
const { postsRouter } = require('./routes/postsRouter.js');

const app = express();

const PORT = 3002;

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});

app.use(express.json());

app.use('/posts', postsRouter);
