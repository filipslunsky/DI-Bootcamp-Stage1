// Exercise 1 : Menu
const menu = [
    {
      type : "starter",
      name : "Houmous with Pita"
    },
    {
      type : "starter",
      name : "Vegetable Soup with Houmous peas"
    },
    {
      type : "dessert",
      name : "Chocolate Cake"
    }
  ];

// 1. Using an array method and ternary operator, check if at least one element in the menu array is a dessert.
const desertDetected = menu.some(item => item.type === 'dessert');
console.log(desertDetected);

// 2. Using an array method, check if all the elements in the array are starters.
const allStarters = menu.every(item => item.type === 'starter');
console.log(allStarters);

// 3. Using an array method, check if there is at least one element in the array that is a main course. If not, add a main course of your choice to the array.
const mainCourseDetected = menu.some(item => item.type === 'main course');
console.log(mainCourseDetected);
if (!mainCourseDetected) {
    let newMainCourse = {type: 'main course', name: 'hamburger and chips'};
    menu.push(newMainCourse);
};

const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes" ];
// Using an array method, add a key “vegetarian” (a boolean) to the menu array. The value of the key should be true if the name of the course contains at least one element from the vegetarian array.

for (let meal of menu) {
    let isVegetarian = false;
    for (let item of vegetarian) {
        if (meal.name.toLocaleLowerCase().includes(item)) {
            isVegetarian = true;
            break;
        }
    }
    if (isVegetarian) {
        meal['vegetarian'] = true;
    } else {
        meal['vegetarian'] = false;
    }
}
console.log(menu);

// Exercise 2 : Chop into chunks
// 1. Write a JavaScript function that takes 2 parameters: a string and a number.
// 2. The function should chop the string into chunks of your chosen length (the second parameter), and the outcome should be represented in an array.
const chopIntoChunks = (string, number) => {
    let resultArray = [];
    for (let i = 0; i < string.length; i+=number) {
        let newChunk = string.slice(i, i + number);
        resultArray.push(newChunk);
    }
    return resultArray;
}

console.log(chopIntoChunks('developers', 2));
console.log(chopIntoChunks('developers', 5));
console.log(chopIntoChunks('developers', 13));

// Exercise 3 : You said string ?
//Write a JavaScript function to find a word within a string.

const searchWord = (sentence, word) => {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    const matches = sentence.match(regex);
    let total = 0;
    matches ? total = matches.length : total = 0;
    return `Total occurence of the word "${word}": ${total}`
}

console.log(searchWord('The quick brown fox', 'fox'));
console.log(searchWord('The fox quick fox brfoxown fox', 'fox'));

// Exercise 4 : Reverse Array
// Write a function called reverseArray which accepts an array and returns the array with all values reversed. See if you can do this without creating a new array
const reverseArray = orginalArray => {
    let reversedArray = [];
    for (let i = orginalArray.length - 1; i >= 0; i--) {
        reversedArray.push(orginalArray[i]);
    }
    return reversedArray;
};

console.log(reverseArray([1,2,3,4,5]));
console.log(reverseArray([1,2]));
console.log(reverseArray([]));
console.log(reverseArray([1,2,3,4,5,6,7,8,9,10]));