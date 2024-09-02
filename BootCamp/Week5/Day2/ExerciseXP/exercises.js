// Exercise 1 : Colors
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…

colors.forEach((color, index) => {
    console.log(`${index}# choice is ${color}`)
});

// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
if (colors.includes("Violet")) {
    console.log("Yeah")
} else {
    console.log("No...")
};

// Exercise 2: Colors #2
const ordinal = ["th","st","nd","rd"];
const displayColors = (colors, ordinal) => {
    for (let i = 0; i < colors.length; i++) {
        if (i < 3) {
            console.log(`${i+1}${ordinal[i+1]} choice is ${colors[i]}`)
        } else {
            console.log(`${i+1}${ordinal[0]} choice is ${colors[i]}`)
        }
    }
};

displayColors(colors, ordinal)

// Exercise 3 : Analyzing
// Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result); // expected output: ['bread', "carrot", "potato", 'chicken', "apple", "orange"]

// ------2------
const country = "USA";
console.log([...country]);  // expected output: ["U", "S", "A"]

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);  // expected output: [undefined, undefined]

// Exercise 4 : Employees
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// 1. Using the map() method, push into a new array the firstname of the user and a welcome message.
const welcomeStudents = users.map(user => {
    return `Hello ${user.firstName}`;
});
console.log(welcomeStudents);

// 2. Using the filter() method, create a new array, containing only the Full Stack Residents.
const fullStackResidents = users.filter(user => {
    return user.role === 'Full Stack Resident';
});
console.log(fullStackResidents);

// 3. Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.
const lastNames = users.filter(user => user.role === 'Full Stack Resident').map(user => user.lastName);
console.log(lastNames);

// Exercise 5 : Star Wars
// Use the reduce() method to combine all of these into a single string.
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const starWarsOpening = epic.reduce((total, item) => {
    return total + ' ' + item;
});
console.log(starWarsOpening);


// Exercise 6 : Employees #2
const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
    {name: "Liam", course: "Computer Science", isPassed: false}, 
    {name: "Jenner", course: "Information Technology", isPassed: true}, 
    {name: "Marco", course: "Robotics", isPassed: true}, 
    {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
    {name: "Jamie", course: "Big Data", isPassed: false}];

// 1. Using the filter() method, create a new array, containing the students that passed the course.
const passedStudents = students.filter(student => student.isPassed === true);
console.log(passedStudents);
// Bonus : Chain the filter method with a forEach method, to congratulate the students with their name and course name (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)
const congratsToPassedStudents = [];
students.filter(student => student.isPassed === true).forEach(student => {
    let message = `Good Job ${student.name} you passed the course in ${student.course}`;
    congratsToPassedStudents.push(message);
});
console.log(congratsToPassedStudents);