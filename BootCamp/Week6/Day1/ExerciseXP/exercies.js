// // Exercise 1 : Comparison
// // 1. Create a function called compareToTen(num) that takes a number as an argument.
// // 2. The function should return a Promise:
//     // the promise resolves if the argument is less than or equal to 10
//     // the promise rejects if argument is greater than 10.

// const compareToTen = num => {
//     return new Promise((res, rej) => {
//         if (num <= 10) {
//             res('the number is lower than or equal to 10');
//         } else {
//             rej('an error occured, the number is too high');
//         }
//     })
// };

// compareToTen(15)
//   .then(result => console.log(result))
//   .catch(error => console.log(error));

// compareToTen(8)
//   .then(result => console.log(result))
//   .catch(error => console.log(error));


// // Exercise 2 : Promises
// // Create a promise that resolves itself in 4 seconds and returns a “success” string.

// let myPromise = new Promise((res) => {
//     setTimeout(() => {
//         res('yes, this is a success string');
//     }, 4 * 1000);
// });

// myPromise.then(result => console.log(result));


// Exercise 3 : Resolve & Reject
    // 1. Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
    // 2. Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

let resolvedPromise = Promise.resolve(3);
let rejectedPromise = Promise.reject('Boo!');

resolvedPromise.then(result => console.log(result));
rejectedPromise.catch(error => console.log(error));
