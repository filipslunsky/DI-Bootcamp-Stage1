"use strict";
// let username = 'Dan';
// console.log(username);
// username = 1;
// console.log(username);
// type number
let num = 1;
num = 9;
// num = '5'; - error in compiling
// num = true; - error in compiling
// type string
let str;
str = 'abc';
// str = 9;  - error in compiling
// type boolean
let bool = true;
bool = false;
// bool = 0  - error in compiling
// type any - try not to use as much as possible
let anytype;
anytype = 1;
anytype = 'abc';
anytype = {};
anytype = true;
// union type
let strnum;
strnum = 2;
strnum = 'abc';
// strnum = false;  - error in compiling
// type RegExp
let reg = /\w+/g;
// type array
let strArr = [];
strArr[0] = 'a';
// strArr[1] = 1  - error in compiling
// strArr.push(true);  - error in compiling
let numArr = [];
numArr[0] = 1;
// numArr[1] = 'a';  - error in compiling
let numStrArr = [];
numStrArr[0] = 'a';
numStrArr[1] = 1;
// numStrArr[2] = true; - error in compiling
// type Tuple
let myTuple = ['abc', 123];
// type object
let myObj = {};
// myObj = []; // - since array is type of object, this is ok
const user = {
    name: 'John',
    age: 25
};
user.name = 'Dan';
const userJohn = {
    name: 'John',
    age: 25,
    address: 'tlv'
};
const userAnne = {
    name: 'Anne',
    age: 30,
    address: 'ny',
    gender: 'f'
};
// type Enum
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
console.log(Grade);
let statusCodeStr = 'failed';
