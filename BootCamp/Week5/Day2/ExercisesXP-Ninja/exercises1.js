// Exercise 1 : Dog age to Human years
const data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog'
    },
     {
      name: 'Cuty',
      age: 5,
      type: 'rabbit'
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog'
    },
    {
      name: 'Red',
      age: 1,
      type: 'cat'
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog'
    },
    {
      name: 'Rex',
      age: 10,
      type: 'dog'
    },
  ];

// 1. Use a loop to find the sum of the dogs’ ages in human years.
// Hint: 1 dog year equals 7 human years

let totalDogLoop = 0;
for (let x in data) {
    totalDogLoop += data[x]['age'];
};
let totalHumanLoop = totalDogLoop * 7;
console.log(totalHumanLoop);

// 2. Using the reduce() method, find the sum of the dogs’ ages in human years.
let totalReduce = data.reduce((total, item) => {
    let result = total + (item.age * 7);
    return result;
}, 0);
console.log(totalReduce);

// Exercise 2 : Email
// Clean up this email to have no whitespaces. Do it in a single line (return a new string).
const userEmail3 = ' cannotfillemailformcorrectly@gmail.com ';
let cleanedEmail3 = userEmail3.trim();
console.log(cleanedEmail3);

// Exercise 3 : Employees #3
// Change the structure of the users array. The user’s full name should be the key and the user’s role should be the value.
// Example: { 'Bradley Bouley': 'Full Stack Resident' }
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

let restructuredUsers = [];
for (let user of users) {
    let newObject = {};
    let newKey = user.firstName + ' ' + user.lastName;
    let newValue = user.role;
    newObject[newKey] = newValue;
    restructuredUsers.push(newObject);
};
console.log(restructuredUsers);

// Exercise 4 : Array to Object
const letters = ['x', 'y', 'z', 'z'];

// 1. Use a for loop to get this output { x: 1, y: 1, z: 2 };
let countedLettersLoop = {};
for (let letter of letters) {
    if (letter in countedLettersLoop) {
        countedLettersLoop[letter] += 1;
    } else {
        countedLettersLoop[letter] = 1;
    }
};
console.log(countedLettersLoop);

// 2. Use the reduce() method to get this output { x: 1, y: 1, z: 2 };
let countedLettersReduced = letters.reduce((total, item) => {
    if (total[item]) {
        total[item] += 1;
    } else {
        total[item] = 1;
    }
    return total;
}, {});
console.log(countedLettersReduced);