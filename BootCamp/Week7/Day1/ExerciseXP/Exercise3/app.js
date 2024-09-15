const express = require('express');
const { router } = require('./routes/books.js');

const app = express();
const PORT = 5200;

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});

app.use('/books', router);