// static method - addition from day2
class UserS {
    static count: number = 0;
    static getCount(): number {
        return UserS.count;
    }

    public name: string;
    public id: number;
    constructor(name: string) {
        this.name = name;
        this.id = ++UserS.count;
    }
};

const user1 = new UserS('John');
const user2 = new UserS('Mary');
const user3 = new UserS('Anne');

console.log(user1.name, user1.id, UserS);
console.log(user2.name, user2.id, UserS);
console.log(user3.name, user3.id, UserS);
console.log(UserS.getCount());

// ------------------- day3 ---------------------------
// index signature / index key
interface EmployeeI {
    [key: string]: string | number | boolean // thanks to this, no need to write as in the loop
    name: string;
    age: number;
    role: string;
};

let employeeJohn: EmployeeI = {
    name: 'John',
    age: 30,
    role: 'developer',
};

console.log(employeeJohn.name);
console.log(employeeJohn['age']);
employeeJohn.email = 'jjj@gmail.com'; // - throws error on compile
employeeJohn.active = true; // - throws error on compile
// last two can only work if the dynmaic key is set in the interface

for(let key in employeeJohn) {
    console.log(key, employeeJohn[key as keyof EmployeeI]);  // tells TS what kind of key it is, without it - error on compile  
    console.log(key, employeeJohn[key as keyof typeof employeeJohn]);  // tells TS what kind of key it is, without it - error on compile  
    console.log(key, employeeJohn[key]);  
};

interface Student {
    name: string;
    grade: string | number;
    courses?: string[];
};

let student1: Student = {
    name: 'Jim',
    grade: 'C',
    courses: ['math', 'history'],
};

for (let key in student1) {
    console.log(student1[key as keyof Student]);
};

interface StudentDynamic {
    [key: string]: string| number | string[] | undefined
    name: string;
    grade: string | number;
    courses?: string[];
};

let student2: StudentDynamic = {
    name: 'Jack',
    grade: 2.2,
    courses: ['english literature', 'coding'],
};

for (let key in student2) {
    console.log(student2[key]);
};

Object.keys(student1).forEach(key => {
    console.log(key, student1[key as keyof typeof student1]);
    console.log(key, student1[key as keyof Student]);
});

Object.keys(student2).forEach(key => {
    console.log(key, student2[key]);
});

// record type
interface Employee {
    [key: string]: string | number | boolean // thanks to this, no need to write as in the loop
    name: string;
    age: number;
    role: string;
};

let employee1: Employee = {
    name: 'Anne',
    age: 27,
    role: 'User',
};

type keys = 'name' | 'age' | 'role';
type EmployeeT = Record<keys, string | number>;

let employee2: EmployeeT = {
    name: 'Amy',
    age: 32,
    role: 'User',
};

// Generics
const strEcho = (value: string): string => value;
const numEcho = (value: number): number => value;
const boolEcho = (value: boolean): boolean => value;

const echo = <T>(value: T): T => value;

const getFirstElementArray = <T>(arr: T[]): T => {
    return arr[0];
};

console.log(getFirstElementArray([1, 2, 3, 4, 5, 6]));
console.log(getFirstElementArray(['a', 'b', 'c']));
console.log(getFirstElementArray([{id: 1}, {id: 2}]));

interface Person<T> {
    id: number;
    name: string;
    age: number;
    info: T;
};

const personOne: Person<(number | string | boolean)[]> = {
    id: 1,
    name: 'Marie',
    age: 31,
    info: ['female', 173, 'brown', true],
};

console.log(personOne);

type Info = {
    city: string;
    street: string;
    num: number;
};

const personTwo: Person<Info> = {
    id: 2,
    name: 'Ann',
    age: 25,
    info: {
        city: 'tlv',
        street: 'avivim',
        num: 5,
    },
};

// more than 1 generic
const nums: number[] = [1, 2, 3];
const strs: string[] = ['a', 'b', 'c'];

const mergeArrays = <T, K>(arr1: T[], arr2: K[]): (T | K)[] => {
    return [...arr1, ...arr2];
};

console.log(mergeArrays(nums, strs));

// const isObj = <T>(item: T): boolean => {
//     return typeof item === 'object' && item !== null && !Array.isArray(item);
// };

// console.log(isObj({name: 'Dan', id: 2}));
// console.log(isObj('asda'));
// console.log(isObj(123));
// console.log(isObj([1, 2, 3]));
// console.log(isObj(null));

interface BoolCheck<T> {
    arg: T;
    is: boolean;
};

const isObj = <T>(arg: T): BoolCheck<T> => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false }
    }
    if (typeof arg === 'object' && !Array.isArray(arg) && arg !== null) {
        return { arg, is: true }
    }
    return { arg, is: false }
};

console.log(isObj({name: 'Dan', id: 2}));
console.log(isObj('asda'));
console.log(isObj(123));
console.log(isObj([1, 2, 3]));
console.log(isObj(null));
console.log(isObj([]));

// utility type
type PostT = {
    id: number;
    title: string;
    body: string;
};

type PartialPost = Partial<PostT>;

const post1: PostT = {
    id: 1,
    title: 'my title',
    body: 'bla bla bla',
};

const post2: PartialPost = {
    title: 'title 2',
    body: 'whatever',
};

const updatePost = (post: PostT, update: PartialPost) => {
    return {...post, ...update};
};

console.log(updatePost(post1, {body: 'gfhdafjhasfgjkhsgfjh'}));


// pick or omit
type MiniPost = Pick<PostT, "id" | "title">
type OtherPost = Omit<PostT, "title">

// Exclude or Extract
type Grades = "A" | "B" | "C" | "D" | "F"
type PassGrade = Exclude<Grades, "D" | "F">

type FailedGade = Extract<Grades, "D" | "F">

// NonNullable
type NullableString = string | null | undefined
type NoNullableString = NonNullable<NullableString>

// ReturnType
const createUser = (name: string, age: number, active: boolean) => {
    return {name, age, active};
};

type UserObjectType = ReturnType<typeof createUser>

// Parameters
type UserParams = Parameters<typeof createUser>

const anneParam: UserParams = ["Anne", 15, true];

const newUser: UserObjectType = createUser(...anneParam);
console.log(newUser);
