// Exercise 1
type Person = {
    name: string;
    age: number;
};

type Address = {
    street: string;
    houseNumber: number;
    city: string;
};

type PersonWithAddress = Person & Address;

const personWithAddress: PersonWithAddress = {
    name: 'Jimmy Doe',
    age: 35,
    street: 'Menachem Begin',
    houseNumber: 123,
    city: 'Tel Aviv',
};

console.log(personWithAddress);

// Exercise 2
const describeValue = (value: string | number): string => {
    if (typeof value === 'string') {
        return 'This is a string.'
    }
    else if (typeof value === 'number') {
        return 'This is a number.'
    } else {
        return 'invalid input';
    }
};

console.log(describeValue(123));
console.log(describeValue("hello there"));

// Exercise 3
let someValue: any = true;

let stringValueCast: string = someValue as string;
console.log(stringValueCast);
console.log(stringValueCast.length); // undefined

let stringValueConverted: string = someValue.toString();
console.log(stringValueConverted);
console.log(stringValueConverted.length); // returns 4 (turned into a string)

// Exercise 4
const getFirstElement = (arr: (string | number)[]): string => {
    return arr[0] as string;
};

console.log(getFirstElement([1,2,3,4,5,6]));
console.log(getFirstElement(["aab", "baa", "abc"]));
console.log(getFirstElement(["hello", 42]));
console.log(getFirstElement([42, "hello"]));

// Exercise 5
const logLength = <T extends { length: number }>(value: T): number => {
    return value.length;
};

console.log(logLength(["aab", "baa", "abc"]));
console.log(logLength("aabbaaabc"));
console.log(logLength([1,2,3,4,5,6]));

// Exercise 6
// type Person (using the type from Exercise 1)
type Job = {
    position: string;
    department: string;
};

type Employee = Person & Job;

const describeEmployee = (employee: Employee): string => {
    if (employee.position === "Manager") {
        return `${employee.name} is a Manager in the ${employee.department} department.`;
    }
    else if (employee.position === "Developer") {
        return `${employee.name} is a Developer in the ${employee.department} department.`;
    } else {
        return `${employee.name} works in the position of ${employee.position} in the ${employee.department} department.`;
    }
};

const employee1: Employee = {
    name: 'Alex',
    age: 42,
    position: 'Manager',
    department: 'IT',
};

const employee2: Employee = {
    name: 'Jason',
    age: 39,
    position: 'Developer',
    department: 'IT',
};

const employee3: Employee = {
    name: 'Dar',
    age: 44,
    position: 'Team-leader',
    department: 'financial',
};

console.log(describeEmployee(employee1));
console.log(describeEmployee(employee2));
console.log(describeEmployee(employee3));

// Exercise 7
const formatInput = <T extends { toString(): string }>(input: T): string => {
    return input.toString();
};

console.log(formatInput(987574));
console.log(formatInput(true));
