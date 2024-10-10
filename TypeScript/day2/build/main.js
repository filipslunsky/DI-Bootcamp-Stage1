"use strict";
// type Aliases
let student1 = {
    name: "Mary",
    id: 1,
    active: true
};
// functions
const sum = (a, b) => {
    return a + b;
};
console.log(sum(4, 2));
/** create function - takes 2 params - number and alias of str-num
 * retrun string or a number
 */
const sumOrConcat = (a, b) => {
    // type guard
    //     if (typeof b === 'number') {
    //         return a + b;
    //     } else {
    //         return a + b + "";
    //     }
    return typeof b === 'number' ? a + b : a + b + "";
};
console.log(sumOrConcat(2, 3));
console.log(sumOrConcat(2, "word"));
const add = (num1, num2) => {
    return num1 + num2;
};
console.log(add(2, 1));
const multi = (x, y) => {
    return x * y;
};
// default params
const addDefault = (a, b = 5) => {
    return a + b;
};
console.log(addDefault(3));
console.log(addDefault(3, 4));
// optional params
const addOptional = (a, b) => {
    return a + (b || 0); // works as type guard
};
// never type, void type
const errorMessage = (message) => {
    throw new Error(message);
};
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'this is a string';
    if (typeof value === 'number')
        return 'this is a number';
    return errorMessage('this should be only a string or a number');
};
const log = (message) => {
    console.log(message);
};
function addOverload(a, b) {
    if (typeof a === 'string' && typeof b === 'string')
        return a + b + '';
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;
    return -1;
}
;
console.log(addOverload(3, 4));
console.log(addOverload("3", "4"));
let a = 'Hi';
let b = a;
b = '9';
let c = a;
console.log('c =>', c);
c = 'hello';
console.log('c =>', c);
// angle brackets - not tsx
let d = "abc";
let e = 1;
// DOM elements (the ! tells TS that the element exists because it has no way of detecting it before compiling)
const myImg = document.querySelector('img');
myImg.src = 'http://..........jpg';
const img = document.querySelector('img');
if (img) { // can be done with type guard
    img.src = '';
}
;
const nextImg = document.querySelector('img');
nextImg.src = '';
const input = document.querySelector('input');
input.type;
input.value;
const year = document.getElementById('year');
const thisYear = new Date().getFullYear().toString();
year ? year.textContent = thisYear : '';
// classes
// access modifier
//      public - access from anywhere
//      protected - within the class and subclass
//      private - within the class itself (no   subclasses)
class User {
    // public name: string;
    // private age: number;
    // protected active: boolean;
    constructor(name, age, active) {
        this.name = name;
        this.age = age;
        this.active = active;
        // this.name = name;
        // this.age = age;
        // this.active = active;
        // ---> if the access is defined in the constructor, the this.... doesn't need to be there
    }
    getAge() {
        return `My age is ${this.age}`;
    }
    getActive() {
        return `Am I active? ${this.active}`;
    }
    setAge(age) {
        this.age = age;
    }
}
;
let user1 = new User('John', 25, true);
user1.setAge(35);
console.log(user1.getAge());
console.log(user1.getActive());
console.log(user1.name);
console.log(user1);
class Student extends User {
    constructor(name, age, active, gender) {
        super(name, age, active);
        this.gender = gender;
    }
    getStudentAge() {
        return `Age of the student is ${this.getAge()}`;
    }
    getStudentActive() {
        return `Is student active? ${this.active}`;
    }
}
;
let stud1 = new Student('Jim', 19, false, 'm');
console.log(stud1.gender);
console.log(stud1.getStudentActive());
console.log(stud1.getStudentAge());
class Users {
    constructor(name, age, active) {
        this.name = name;
        this.age = age;
        this.active = active;
    }
    getAge() {
        return this.age;
    }
}
