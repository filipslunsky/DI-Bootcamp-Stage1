// Create a function that returns true if all parameters are truthy, and false otherwise.
const allTruthy = (...args) => {
    console.log(args);
    let result = true;
    for (let arg of args) {
        if (arg != true) {
            result = false;
        }
    }
    return result;
};

console.log(allTruthy(true, true, true));
console.log(allTruthy(true, false, true));
console.log(allTruthy(5, 4, 3, 2, 1, 0));
