let myRoot = document.getElementById("root");
console.log(myRoot)


let a = 5;

console.log(sayHello()) // declaration function can be hoisted like so

function sayHello() { 
    return 'Hello';
}


let sayHi = function() { // expression function cannot be hoisted
    return 'Hi';
}

console.log(sayHi())

const sayGoodbye = () => 'Goodbye'; // arrow function is a sub-type of expression functions and thus cannot be hoisted

console.log(sayGoodbye())

let users = ["John", "Marry", "Dan", "Anne"];
// VARIOUS TYPES OF LOOPS

for (let i = 0; i < users.length; i++) {
    console.log(users[i])
}

let indx = 0;
while (indx < users.length) {
    console.log(users[indx]);
    indx++
}

let ind = 0;
do {
    console.log(users[ind]);
    ind++;
} while (ind < users.length);

// !!!this loop works for objects as well!!!
for (const x in users) {
    console.log(x, users[x]);
}
// !!! like so !!!
let myObj = {
    name: "John",
    age: 25
}

for (const a in myObj) {
    console.log(a, myObj[a]);
}

for (const x of users) {
    console.log(x);
}

// create emails of users

let emails = [];
for (let user of users) {
    let email = `${user.toLowerCase()}@gmail.com`;
    console.log(email);
    emails.push(email);
}
console.log(emails);

// another more concise method is forEach() !!!this one is only for arrays!!!
let emails2 = [];
users.forEach((user, indx) => { // second parameter is optional, we can add third parameter as well which refers to the original array which we can use to modify it
    console.log(user, indx);
    let email = `${user.toLowerCase()}@gmail.com`;
    emails2.push(email);
});
console.log(emails2);


// some method returns true (if at least one element matches)/false
let result = users.some((item) => {
    return item === "Dan";
});

console.log(result);

// every method works similarly true (if all elements match the criteria)/false
let result2 = users.every(item => {
    return item === "Dan";
});
console.log(result2);

let result3 = users.every(item => {
    return item !== "Fluffy";
});
console.log(result3);

// exercise create function that takes array of numbers and returns doubles:
const getDoubles = numberArray => {
    let doubles = [];
    numberArray.forEach((element) => {
        if (typeof element === "number") {
            doubles.push(element * 2)
        };
    });
    return doubles;
};

console.log(getDoubles([1, 2, "bla", 3, 4, 5, "bla"]))

// map works similar to Python map and automatically clones the array

let arr = [1,2,3,4];
let result4 = arr.map((item, index) => {
    if (index > 2) {
        return item * 2;
    }
});

console.log(result4)

// use DOM to get these names to "root"
let users2 = [
    { id: 1, name: "John", email: "jjj@gmail.com" },
    { id: 2, name: "Marry", email: "mmm@gmail.com" },
    { id: 3, name: "Anne", email: "aaa@gmail.com" },
    { id: 3, name: "Or", email: "aaa@gmail.com" },
  ];


// solution using forEach()
users2.forEach((user) => {
    let userInfo = document.createElement("p");
    let userName = user.name + " " + user.email;
    userInfo.textContent = userName;
    myRoot.appendChild(userInfo);
});

// solution using map()
users2.map((user) => {
    let userInfo = document.createElement("p");
    let userName = user.name + " " + user.email;
    userInfo.textContent = userName;
    myRoot.appendChild(userInfo);
});

// another more modern and elegant solution using map()
// this method is more efficient if we don't need to add event listeners to the elements
// but we can add classes, attributes etc. with this method
let html = users2.map(item => {
    return `<div>${item.id} <h2>${item.name}</h2><p>${item.email}</p></div>`;
});

console.log(html)

myRoot.innerHTML = html.join("");

/** Exercise
 * Create an function that get an array of Numbers as input
 * and return a new array with all numbers greater than 3
 * For example:
 * Give this array [0,1,1,2,3,5,8]
 * result [5,8]
 */

const getHigherThan3 = numberArray => {
    let results = [];
    numberArray.forEach(number => {
        if (number > 3) {
            results.push(number);
        };
    });
    return results;
};

console.log(getHigherThan3([0,1,1,2,3,5,8]));

// for the last exercise we can also use filter() method
let arr2 = [0,1,1,2,3,5,8];
let fileterdArr = arr2.filter(item => {
    return item > 3;
});

console.log(fileterdArr);

// exercise filter users2 with "a" in name (case insensitive)

let aUsers = users2.filter(user => {
    return user.name.toLowerCase().includes('a') && user.email.toLocaleLowerCase().includes('a');
});

console.log(aUsers)

// exercise: add all the numbers in an array with a function
const addNumbers = numberArray => {
    let sum = 0;
    numberArray.forEach(item => {
        sum += item;
    });
    return sum;
};

console.log(addNumbers([2, 5, 10, 100]))

// this exercise can also be done with .reduce()
let nums = [2, 5, 10, 100];
let sum = nums.reduce((total, item) => {
    return total + item
}, 100); // the second paranmeter is the optional starting point parameter for the total

console.log(sum)

// find() returns the item findIndex() returns the index of item
const userId3 = users2.find(item => {
    return item.id === 3;
});

console.log(userId3)

let arr3 = [1, 2, 3, 4, 5, 6];
let aArr = arr3[0];
let bArr = arr3[1];
let cArr = arr3[2];

console.log(aArr, bArr, cArr)

// an array can be destructed like so
let [aAr, bAr, cAr, dAr] = arr3;
console.log(aAr, bAr, cAr, dAr)

    // rest parameter can also be used like so
let [aArray, bArray, cArray, dArray, ... rest] = arr3;
console.log(aArray, bArray, cArray, dArray, rest)

// spread operator
 let num1 = 1;
 let num2 = [2, 6];
 let num3 = [3, 4, 5];
 let num4 = [a, ...num2, ...num3];
 console.log(num4)
