// OBJECTS & CLASSES
// JS data type, similar to Python everything in JS is an object

let user = {
    name: "John",
    email: "jjj@gmail.com",
    age: 25
};

user.gender = "M";
console.log(user);


// accesing with brackets or dot-notation
console.log(user['name']);
console.log(user.name);

// !!! the only loop possible to use for objects
for (const key in user) {
    console.log(key, user[key]); // !!! dot-notation is not possible in the loop
};

// accessing keys and values of an object
let keys = Object.keys(user);
console.log(keys);

keys.forEach(item => {
    console.log(item, user[item]);
});

let values = Object.values(user);
console.log(values);

let userAdd = values.map(item => {
    return item + ' :) '
});

console.log(userAdd);

// OBJECT ENTRIES ----> returns array of arrays (key, value)
let ents = Object.entries(user);
console.log(ents);

Object.entries(user).forEach(([key, value]) => { // destructuring can be used in the argument of the fuction like so
    console.log("item=>", key, value);
});

let arr = [
    ["name", "Mark"],
    ["age", 35]
];

let user1 = Object.fromEntries(arr); // making an object from array of arrays works only on first level
console.log(user1);

// OBJECT METHOD (function connected to a particular object)
let student = {
    name: "Marry",
    age: 23,
    hello: function() {
        console.log("Hello " + this.name) // works similar to Python self
    },
};

console.log(student)
student.hello();
console.log(this); // returns the whole window object of the browser