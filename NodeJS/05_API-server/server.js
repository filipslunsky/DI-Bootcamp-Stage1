const express = require('express');
const { products } = require('./config/data.js');
console.log(products);


const app = express();

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`run on ${PORT}`);
})

app.use(express.json()); // instead of body-parser (included in Express v4 and later)

/**
 * CREATE - POST
 * READ - GET
 * UPDATE - PUT
 * DELETE - DELETE
 */

// READ
app.get('/products', (req, res) => {
    res.json(products);
});

app.get('/products/:id', (req, res) => {
    // console.log(req.params.id);
    const { id } = req.params;
    const myProduct = products.find((item) => item.id == id);
    console.log(`Found product: ${myProduct}`);
    if (!myProduct) return res.sendStatus(404);
    res.json(myProduct);
});

app.get('/search', (req, res) => {
    const { name } = req.query;
    const filteredProducts = products.filter((item) => {
        return item.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    })
    res.send(filteredProducts);
});

// Create new product - POST
app.post('/products', (req, res) => {
    console.log(req.body);
    let newProduct = req.body;
    let newId = products.length + 1;
    newProduct.id = newId;
    products.push(newProduct);
    res.send('ok from post, product added');
});

// update product

app.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    // console.log(id, name, price);
    const index = products.findIndex(item => item.id == id);
    products[index] = {...products[index], name, price};
    
    if (index === -1) {
        return res.status(404).json({message: "product to update not found"});
    }

    res.send(products);
});

// delete
app.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;

    const index = products.findIndex(item => item.id == id);

    if (index === -1) {
        return res.status(404).json({message: "product to delete not found"});
    }
    
    products.splice(index, 1);

    res.json(products);
})