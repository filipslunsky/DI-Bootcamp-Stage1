"use strict";
class UserS {
    static getCount() {
        return UserS.count;
    }
    constructor(name) {
        this.name = name;
        this.id = ++UserS.count;
    }
}
UserS.count = 0;
;
const user1 = new UserS('John');
const user2 = new UserS('Mary');
const user3 = new UserS('Anne');
console.log(user1.name, user1.id, UserS);
console.log(user2.name, user2.id, UserS);
console.log(user3.name, user3.id, UserS);
console.log(UserS.getCount());
;
let employeeJohn = {
    name: 'John',
    age: 30,
    role: 'developer',
};
console.log(employeeJohn.name);
console.log(employeeJohn['age']);
employeeJohn.email = 'jjj@gmail.com';
employeeJohn.active = true;
for (let key in employeeJohn) {
    console.log(key, employeeJohn[key]);
    console.log(key, employeeJohn[key]);
    console.log(key, employeeJohn[key]);
}
;
;
let student1 = {
    name: 'Jim',
    grade: 'C',
    courses: ['math', 'history'],
};
for (let key in student1) {
    console.log(student1[key]);
}
;
;
let student2 = {
    name: 'Jack',
    grade: 2.2,
    courses: ['english literature', 'coding'],
};
for (let key in student2) {
    console.log(student2[key]);
}
;
Object.keys(student1).forEach(key => {
    console.log(key, student1[key]);
    console.log(key, student1[key]);
});
Object.keys(student2).forEach(key => {
    console.log(key, student2[key]);
});
;
let employee1 = {
    name: 'Anne',
    age: 27,
    role: 'User',
};
let employee2 = {
    name: 'Amy',
    age: 32,
    role: 'User',
};
const strEcho = (value) => value;
const numEcho = (value) => value;
const boolEcho = (value) => value;
const echo = (value) => value;
const getFirstElementArray = (arr) => {
    return arr[0];
};
console.log(getFirstElementArray([1, 2, 3, 4, 5, 6]));
console.log(getFirstElementArray(['a', 'b', 'c']));
console.log(getFirstElementArray([{ id: 1 }, { id: 2 }]));
;
const personOne = {
    id: 1,
    name: 'Marie',
    age: 31,
    info: ['female', 173, 'brown', true],
};
console.log(personOne);
const personTwo = {
    id: 2,
    name: 'Ann',
    age: 25,
    info: {
        city: 'tlv',
        street: 'avivim',
        num: 5,
    },
};
const nums = [1, 2, 3];
const strs = ['a', 'b', 'c'];
const mergeArrays = (arr1, arr2) => {
    return [...arr1, ...arr2];
};
console.log(mergeArrays(nums, strs));
;
const isObj = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (typeof arg === 'object' && !Array.isArray(arg) && arg !== null) {
        return { arg, is: true };
    }
    return { arg, is: false };
};
console.log(isObj({ name: 'Dan', id: 2 }));
console.log(isObj('asda'));
console.log(isObj(123));
console.log(isObj([1, 2, 3]));
console.log(isObj(null));
console.log(isObj([]));
const post1 = {
    id: 1,
    title: 'my title',
    body: 'bla bla bla',
};
const post2 = {
    title: 'title 2',
    body: 'whatever',
};
const updatePost = (post, update) => { };
