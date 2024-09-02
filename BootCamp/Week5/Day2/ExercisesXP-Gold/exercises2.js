// Exercise 1: Sum elements
// Write a JavaScript program to find the sum of all elements in an array.
let testArray = [1, 3, 45, 21, 15];
const sumElements = elements => {
    let result = elements.reduce((total, item) => {
        return total + item;
    });
    return result;
};

console.log(sumElements(testArray));

// Exercise 2 : Remove Duplicates
let testArray2 = [1, 2, 3, 1, 3, 1, 2, 4, 5];
const removeDuplicates = elements => {
    let noDuplicates = [];
    for (let element of elements) {
        if (noDuplicates.includes(element)) {

        } else {
            noDuplicates.push(element)
        }
    }
    return noDuplicates;
};

console.log(removeDuplicates(testArray2));

// more concise solution
const removeDuplicatesConcise = elements => [...new Set(elements)];
console.log(removeDuplicatesConcise(testArray2));

// Exercise 3 : Remove certain values
let testArray3 = [NaN, 0, 15, false, -22, '',undefined, 47, null];
const getNumbers = elements => {
    let filteredArray = elements.filter(element => {
        return typeof element === 'number' && element !== 0 && !isNaN(element);
    });
    return filteredArray;
};

console.log(getNumbers(testArray3));

// Exercise 4 : Repeat please !
const repeat = (word, times) => {
    let result = '';
    for (let i = 0; i < times; i++) {
        result += word;
    };
    return result;
};
console.log(repeat('Ha!', 3));


// Exercise 5 : Turtle & Rabbit
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

turtle = turtle.padStart(9, ' ');
rabbit = rabbit.padStart(9, ' ');

console.log(startLine);
console.log(turtle);
console.log(rabbit);

// What happens when you run turtle = turtle.trim().padEnd(9, '='); 
turtle = turtle.trim().padEnd(9, '=');
console.log(startLine);
console.log(turtle);
console.log(rabbit);