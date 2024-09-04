let user = [
    {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    sum: (age, grade) => { // this will be removed in JSON
        return (age * grade) / 2;
        },
    password: "123456"
    }
];

const filterMyJson = (key, value) => {
    if (key === "password") {
        return "*********"
    } else {
        return value;
    }
}

let userJson = JSON.stringify(user, filterMyJson, 4);

console.log(userJson);

let str = '[{"id":1,"name":"Leanne Graham","username":"Bret","email":"Sincere@april.biz"}]';
let userFromJson = JSON.parse(str);

console.log(userFromJson);

// JSON.stringify(parameters)
//object, filter, indetation
// filter is a function

// before JSON there used to be XML
// it is less practical because it takes more coding to convert data into it, structure is with html elements

// EXCEPTIONS
console.log('before');

try {
    a;
    a = 5;
    console.log(a);
} catch (error) {
console.log(error)
//.. logic to send error to a log file
}

console.log('after');

function x() {
    try{
        b;
    }
    catch(e) {
        console.log(e.name, e.message);
        throw new Error('customized error message')
    }
};

console.log('before 2');
x(6);
console.log('after 2');

console.log('before 3');
function y() {
    try {
        x()
    } catch (e) {
        console.log(e)
    }
}
y()
console.log('after 3');

// similarly to Python, "finally {}" can be used