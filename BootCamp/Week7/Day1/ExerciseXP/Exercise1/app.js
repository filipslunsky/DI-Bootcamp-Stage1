const express = require('express');
const { router } = require('./routes/index.js');

const app = express();

const PORT = 5200;

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});

app.use('/', express.static(__dirname + '/public'));
app.use('/about', express.static(__dirname + '/public/about.html'));

app.use('/api', router);