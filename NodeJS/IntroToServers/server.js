const express = require('express');
const { getUsers } = require('./info.js');

const app = express();

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`run on ${PORT}`);
})

/**
 * app.get()
 * app.post()
 * 
 */

app.get('/home', (request, response) => {
    response.send('my first server');
})

const products = [
    {id: 1, name: 'iPhone', price: 900},
    {id: 2, name: 'iWatch', price: 800},
    {id: 3, name: 'iPad', price: 1900}
];

app.get('/products', (req, res) => {
    // console.log(req)
    res.send(products)
});

app.get('/users', (req, res) => {
    getUsers('https://jsonplaceholder.typicode.com/users')
    .then((data) => {
        res.json(data);
    })
    .catch((e) => console.log(e));
});

console.log(__dirname);

// app.get('/', (req, res) => {
//     res.send('from root');
// });

app.use('/', express.static(__dirname + '/public'));

app.get('/aboutme', (req, res) => {
    res.sendFile(__dirname + '/public/about.html');
});


