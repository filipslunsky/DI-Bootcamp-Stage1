// Exercise 1 : print Full Name
const printFullName = ({first, last}) => {
    console.log(`Your full name is ${first} ${last}`);
};
printFullName({first: 'Elie', last:'Schoppik'});

// Exercise 2 : keys and values
// Create a function that takes an object and returns the keys and values as separate arrays.
// Return the keys sorted alphabetically, and their corresponding values in the same order.
const keysAndValues = obj => {
    let keys = Object.keys(obj).sort();
    let values = keys.map(key => {
        return obj[key];
    });
    return [keys, values];
};
console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));

// Exercise 3 : Counter class
    //Analyze the code below, what will be the output?
class Counter {
    constructor() {
        this.count = 0;
    }
    
    increment() {
        this.count++;
    }
}
    
const counterOne = new Counter(); // new instance of Counter
counterOne.increment(); // adding 1 to this.count (counterOne.count = 1)
counterOne.increment(); // adding 1 to this.count (counterOne.count = 2)

const counterTwo = counterOne;  // counterTwo references counterOne (same object)
counterTwo.increment(); // adding 1 to this.count (counterOne.count = 3, (counterTwo.count = 2))

console.log(counterOne.count); // expected output: 3

