const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use('/', express.static(__dirname + '/pubic'));

app.get('/home', (req, res) => {
    let user = {
        firstName: 'John',
        lastName: 'Doe'
    };
    res.render('index', {
        user
    });
});

app.get('/shop', (req, res) => {
    res.render('shop')
});

app.listen(process.env.PORT || 3001, () => {
    console.log(`run on ${process.env.PORT || 3001}`);
    
})