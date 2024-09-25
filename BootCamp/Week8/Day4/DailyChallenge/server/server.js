const express = require('express');
const cors = require('cors');
const { router } = require('./routes/router.js');

const app = express();

const PORT = 3200;

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
    
});

app.use(express.json());

app.use(cors());

app.use('/api', router);