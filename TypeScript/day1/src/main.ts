// let username = 'Dan';
// console.log(username);

// username = 1;
// console.log(username);


// type number
let num: number = 1;

num = 9;

// num = '5'; - error in compiling
// num = true; - error in compiling

// type string
let str: string;
str = 'abc';
// str = 9;  - error in compiling

// type boolean

let bool: boolean = true;
bool = false;
// bool = 0  - error in compiling

// type any - try not to use as much as possible
let anytype: any;
anytype = 1;
anytype = 'abc';
anytype = {};
anytype = true;

// union type
let strnum: number | string;
strnum = 2;
strnum = 'abc';
// strnum = false;  - error in compiling

// type RegExp
let reg: RegExp = /\w+/g;

// type array
let strArr: string[] = [];
strArr[0] = 'a';
// strArr[1] = 1  - error in compiling
// strArr.push(true);  - error in compiling

let numArr: number[] = [];
numArr[0] = 1;
// numArr[1] = 'a';  - error in compiling

let numStrArr: (number | string)[] = [];
numStrArr[0] = 'a';
numStrArr[1] = 1;
// numStrArr[2] = true; - error in compiling

// type Tuple
let myTuple: [string, number] = ['abc', 123];

// type object
let myObj: object = {};
// myObj = []; // - since array is type of object, this is ok
const user = {
    name: 'John',
    age: 25
};

user.name = 'Dan';
// user.age = 'a' - error in compiling
// user.address = 'tlv'; - error in compiling because the object props have been defined as only 2

// type or interface
type User = {
    name: string,
    age: number,
    address: string,
    gender?: string // - optional property is declared woth question mark
};

const userJohn: User = {
    name: 'John',
    age: 25,
    address: 'tlv'
};

const userAnne: User = {
    name: 'Anne',
    age: 30,
    address: 'ny',
    gender: 'f'
};

// type Enum
enum Grade {
    U,
    D,
    C,
    B,
    A
}

console.log(Grade.U);
console.log(Grade);


// type literal
type StatusCode = "loading" | "success" | "failed";
let statusCodeStr: StatusCode = 'failed';


// type Aliases
type StringOrNumber = string | number

type StringOrNumberOrBool = StringOrNumber | boolean;

type Student = {
    name: string,
    age: number,
    grade: StringOrNumber
};
