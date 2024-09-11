const { add, multiply } = require('./math.js');
const _ = require('lodash');

let numbers = [1,1,2,2,2,2,3,3,4,5];
let uniqueNumbers = _.uniq(numbers);
console.log(uniqueNumbers);

let sum = _.sum(numbers);
console.log(sum);

let mySuperAddition = add(321, 123);
console.log(mySuperAddition);

let mySuperMultiplication = multiply(321, 123);
console.log(mySuperMultiplication);