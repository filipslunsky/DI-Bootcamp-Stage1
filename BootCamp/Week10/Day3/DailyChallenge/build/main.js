"use strict";
const isUser = (item) => item.type === 'user';
const isProduct = (item) => item.type === 'product';
const isOrder = (item) => item.type === 'order';
const handleData = (inputArr) => {
    let dataSummary = '';
    for (let item of inputArr) {
        if (isUser(item)) {
            dataSummary += `${item.name} is ${item.age} years old\n`;
        }
        else if (isProduct(item)) {
            dataSummary += `product id ${item.id} costs ${item.price} dollars\n`;
        }
        else if (isOrder(item)) {
            dataSummary += `order id ${item.orderId} was made for ${item.amount} dollars\n`;
        }
        else {
            dataSummary += 'unknown\n';
        }
    }
    return dataSummary;
};
const user1 = {
    type: 'user',
    name: 'Ann',
    age: 34
};
const product1 = {
    type: 'product',
    id: 345,
    price: 65.3
};
const order1 = {
    type: 'order',
    orderId: 'xcsid7878979',
    amount: 345.89
};
const user2 = {
    type: 'user',
    name: 'Tim',
    age: 23
};
const product2 = {
    type: 'product',
    id: 1234,
    price: 89.23
};
const order2 = {
    type: 'order',
    orderId: 'ajlksdja78678',
    amount: 121.72
};
const arr1 = [user1, product1, order1];
const arr2 = [user1, user2, product1, product2, order1, order2];
const arr3 = [user1, user2];
const arr4 = [user1, user2, product1];
console.log(handleData(arr1));
console.log(handleData(arr2));
console.log(handleData(arr3));
console.log(handleData(arr4));
