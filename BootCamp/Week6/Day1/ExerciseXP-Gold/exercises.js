// // Exercise 1 : Promise.all()
// // Use the Promise.all that will accept the 3 promises below.
// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, 'foo');
// });

// Promise.all([promise1, promise2, promise3])
// .then(results => console.log(results))
// .catch(error => console.log(error));

// // Promise.all() takes as an argument and array of promises, waits for all of them to be resolved/rejected (not pending) and in .then() functions returns the array of results


// Exercise 2 : Analyse Promise.all()
    // Analyse the code below - what will be the output?
function timesTwoAsync(x) {
    return new Promise(resolve => resolve(x * 2));
}
  
const arr = [1, 2, 3];
const promiseArr = arr.map(timesTwoAsync);

Promise.all(promiseArr)
.then(result => {
    console.log(result);
});

// expected output [2, 4, 6]