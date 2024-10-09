"use strict";
// Exercise 1
const processValue = (inputItem) => {
    if (typeof inputItem === 'string') {
        let reverseString = '';
        for (let i = inputItem.length - 1; i >= 0; i--) {
            reverseString += inputItem[i];
        }
        return reverseString;
    }
    else {
        const roundedString = String(inputItem.toFixed(2));
        return `$${roundedString}`;
    }
};
console.log(processValue('abcdefghijklm'));
console.log(processValue(6.513));
// Exercise 2
const sumNumbersInArray = (inputArr) => {
    let sumNum = 0;
    for (let i = 0; i < inputArr.length; i++) {
        if (typeof inputArr[i] === 'number') {
            sumNum += inputArr[i];
        }
    }
    return sumNum;
};
console.log(sumNumbersInArray([2, 4, 'this', 7, 'gets', 1, 'ignored']));
console.log(sumNumbersInArray(['this', 'gets', 'ignored']));
console.log(sumNumbersInArray([2, 4, 'this', 7, 'gets', 1, 'ignored', '3', 8]));
const introduceAdvancedUser = (user) => {
    let introMessage = `This is ${user.name} who is ${user.age} years old.`;
    if (user.address)
        introMessage += ` ${user.name} lives in ${user.address}.`;
    return introMessage;
};
const userJohn = { name: 'John', age: 23, address: 'Jerusalem' };
const userJane = { name: 'Jane', age: 31 };
console.log(introduceAdvancedUser(userJohn));
console.log(introduceAdvancedUser(userJane));
// Exercise 4
const welcomeUser = (name, greeting) => {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    else {
        return `Hello, ${name}!`;
    }
};
console.log(welcomeUser('Jack'));
console.log(welcomeUser('Jack', 'Shalom'));
