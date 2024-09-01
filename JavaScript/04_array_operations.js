let myString = 'hello world';
console.log(myString.includes('wor'));


let myArray = [1, 2, 3, 4, 5];
console.log(myArray.includes(3));

console.log(myString.replace(/[oe]/g, 'u')); //works a bit like RegEx

let shortString = 'love';
console.log(shortString)

let paddedStringStart = shortString.padStart(10, "x");
console.log(paddedStringStart)

let paddedStringEnd = shortString.padEnd(10, "x");
console.log(paddedStringEnd)
// padStart and padEnd both work also with arrays

const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat(); // concatinates the subarrays to a depth

console.log(myArr)
console.log(newArr)
