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
    address: {
        city: "TLV",
    },
    hello: function() {
        console.log("Hello " + this.name);
        const hello2 = () => {
            console.log(this);
        } // this works similar to Python self
        hello2() // inside a regular function this refers to the specific object
    },
    x: () => { // !!!! inside of arrow function it refers to the general object
        console.log(this)
    }
};

console.log(student)
student.hello();
console.log(this); // returns the whole window object of the browser

// !!! OBJECT AND ARRAY are copied by reference so modifying the other variable modifies the original object/array
let student2 = student;
console.log("student=>", student);
console.log("student2=>", student2);
student2.name = "Anne";
console.log("student=>", student);
console.log("student2=>", student2);

// !!! if we want to make another object, we CLONE it like this:
let student3 = {...student};
student3.address = {...student.address}; // cloning the inner object
// !!! or like this
let student4 = Object.assign({}, student);

console.log("student=>", student);
console.log("student2=>", student2);
console.log("student3=>", student3);
student.name = "Marry";
console.log("student=>", student);
console.log("student2=>", student2);
console.log("student3=>", student3);

// !!! if the object has another object in itself, the inner object doesn't get cloned by cascade automatically, just references the other one

// if we want to clone object with the inner objects and we want to cascade clone all of them, we can "deep clone" it using JSON
let jsonStudent = JSON.stringify(student);
console.log(jsonStudent)
console.log(student)
let newStudentFromJson = JSON.parse(jsonStudent);
console.log(newStudentFromJson);
// !!! this doesn't work for functions JSON.stringify() removes all the methods from the object and only serves to clone data

let student5 = {...student, name: 'Jane', address: {city: 'TLV', zip:{code:'2345677'}}, gender: 'F'};
console.log(student5)

// DESTRUCTURING AN OBJECT
const {age, name} = student;
console.log(age, name);

const example = ({name, age}) => { // can be destructured in a parameter of a function
    console.log(name, age);
};
example(student);

