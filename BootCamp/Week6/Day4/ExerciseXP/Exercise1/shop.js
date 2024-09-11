const { products } = require('./products.js');


const displayProduct = productName => {
    let foundProduct = products.filter(item => item.name === productName);
    if (foundProduct.length !== 0) {
        return `We have ${foundProduct[0].name} on the stock, it is one of our ${foundProduct[0].category} and it costs ${foundProduct[0].price} dollars.`
    } else {
        return `Sorry, we don't sell any ${productName}.`
    }
}

console.log(displayProduct('iPhone'));
console.log(displayProduct('Google Pixel'));
console.log(displayProduct('Macbook Air'));
console.log(displayProduct('orange'));