// Exercise 1
console.log('Hello, World!');

// Exercise 2
let userAge: number = 57;
let userName: string = 'John Doe';

console.log(userAge);
console.log(userName);

// Exercise 3
let id: string | number;

// Exercise 4
const evaluateNumber = (number: number): string => {
    if (number === 0) {
        return 'number is exactly zero';
    } else if (number > 0) {
        return 'number is positive';
    } else {
        return 'number is negative';
    }
};

console.log(evaluateNumber(5));
console.log(evaluateNumber(-5));
console.log(evaluateNumber(0));

// Exercise 5
const getDetails = (name: string, age: number): [string, number, string] => {
    const greeting: string = `Hello, ${name}! You are ${age} years old.`;
    return [name, age, greeting];
};

console.log(getDetails('Alice', 25));

// Exercise 6
type Person = {
    name: string,
    age: number
};

const createPerson = (name: string, age: number): Person => {
    return { name, age };
};

console.log(createPerson('John', 34));

// Exercise 7
const setElementValue = (elementId: string, elementValue: string): void => {
    const element = document.getElementById(elementId) as HTMLInputElement;
    if (element) {
        element.value = elementValue;
        console.log(`element id: ${elementId} changed to value: ${elementValue}`);
    } else {
        console.log(`element id: ${elementId} not found`);
    }
};

setElementValue('testInput', 'Typescript is cool!!!');

// Exercise 8
const getAction = (role: string): string => {
    switch (role) {
        case 'admin':
            return 'Manage users and settings';
        case 'editor':
            return 'Edit content';
        case 'viewer':
            return 'View content';
        case 'guest':
            return 'Limited access';
        default:
            return 'Invalid role';
    }
};

console.log(getAction('admin'));
console.log(getAction('editor'));
console.log(getAction('viewer'));
console.log(getAction('guest'));
console.log(getAction('unknown'));

// Exercise 9
function greet(): string;
function greet(name: string): string;

function greet(name?: string): string {
    if (name) {
        return `Welcome, ${name}`;
    } else {
        return 'Welcome, user!';
    }
};

console.log(greet());
console.log(greet('John'));
