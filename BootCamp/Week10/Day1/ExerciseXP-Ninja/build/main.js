"use strict";
const mapType = (inputValue) => {
    if (typeof inputValue === 'number') {
        return (inputValue ** 2);
    }
    else if (typeof inputValue === 'string') {
        return inputValue.length;
    }
    else {
        throw new Error('invalid input type');
    }
};
console.log(mapType('string for testing'));
console.log(mapType(6));
// Exercise 2
const getProperty = (obj, key) => {
    return obj[key];
};
const user = {
    name: 'Jim',
    age: 42,
    gender: 'm',
    loggedIn: false
};
const userName = getProperty(user, 'name');
const userAge = getProperty(user, 'age');
const userGender = getProperty(user, 'gender');
const userIsLoggedIn = getProperty(user, 'loggedIn');
console.log(userName);
console.log(userAge);
console.log(userGender);
console.log(userIsLoggedIn);
const multiplyProperty = (obj, key, factor) => {
    return obj[key] * factor;
};
const numericPropertyObj = {
    length: 12,
    width: 13,
    height: 45
};
console.log(multiplyProperty(numericPropertyObj, 'height', 3));
console.log(multiplyProperty(numericPropertyObj, 'length', 2));
console.log(multiplyProperty(numericPropertyObj, 'width', 5));
