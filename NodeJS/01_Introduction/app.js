console.log('Welcome to NodeJS');

let arr = ['a', 'b', 'c'];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log(this);

const hello = name => {
    return `Hello, ${name}, welcome to day 1 of NodeJS`;
};

console.log(hello('John'));
console.log(hello('Dan'));

const getName = name => {
    return `My name is ${name}`;
};

module.exports = {
    hello, // shorthand for object, i.e. it could be hello: hello
    getName // best practice is to always export objects, even if it is just one
}