// Currying
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)

// expected output -> 31
console.log(curriedSum(30)(1))
