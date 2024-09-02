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


