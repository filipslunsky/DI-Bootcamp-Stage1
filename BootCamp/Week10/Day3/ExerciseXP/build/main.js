"use strict";
const personWithAddress = {
    name: 'Jimmy Doe',
    age: 35,
    street: 'Menachem Begin',
    houseNumber: 123,
    city: 'Tel Aviv',
};
console.log(personWithAddress);
const describeValue = (value) => {
    if (typeof value === 'string') {
        return 'This is a string.';
    }
    else if (typeof value === 'number') {
        return 'This is a number.';
    }
    else {
        return 'invalid input';
    }
};
console.log(describeValue(123));
console.log(describeValue("hello there"));
let someValue = true;
let stringValueCast = someValue;
console.log(stringValueCast);
console.log(stringValueCast.length);
let stringValueConverted = someValue.toString();
console.log(stringValueConverted);
console.log(stringValueConverted.length);
const getFirstElement = (arr) => {
    return arr[0];
};
console.log(getFirstElement([1, 2, 3, 4, 5, 6]));
console.log(getFirstElement(["aab", "baa", "abc"]));
console.log(getFirstElement(["hello", 42]));
console.log(getFirstElement([42, "hello"]));
const logLength = (value) => {
    return value.length;
};
console.log(logLength(["aab", "baa", "abc"]));
console.log(logLength("aabbaaabc"));
console.log(logLength([1, 2, 3, 4, 5, 6]));
const describeEmployee = (employee) => {
    if (employee.position === "Manager") {
        return `${employee.name} is a Manager in the ${employee.department} department.`;
    }
    else if (employee.position === "Developer") {
        return `${employee.name} is a Developer in the ${employee.department} department.`;
    }
    else {
        return `${employee.name} works in the position of ${employee.position} in the ${employee.department} department.`;
    }
};
const employee1 = {
    name: 'Alex',
    age: 42,
    position: 'Manager',
    department: 'IT',
};
const employee2 = {
    name: 'Jason',
    age: 39,
    position: 'Developer',
    department: 'IT',
};
const employee3 = {
    name: 'Dar',
    age: 44,
    position: 'Team-leader',
    department: 'financial',
};
console.log(describeEmployee(employee1));
console.log(describeEmployee(employee2));
console.log(describeEmployee(employee3));
const formatInput = (input) => {
    return input.toString();
};
console.log(formatInput(987574));
console.log(formatInput(true));
