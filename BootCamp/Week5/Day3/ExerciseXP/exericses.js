// Exercise 1 : Location
// Analyze the code below. What will be the output?
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// expected output: I am John Doe from Vancouver, Canada. Latitude (49.2827), Longitude (-123.1207)

// Exercise 2: Display Student Info
function displayStudentInfo(objUser){
    //destructuring
    const {first, last} = objUser;
    console.log(`Your full name is ${first} ${last}`)
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});

// Exercise 3: User & id
const users = { user1: 18273, user2: 92833, user3: 90315 };
// 1. Using methods taught in class, turn the users object into an array.
let userEntries = Object.entries(users);
console.log(userEntries);

// 2. Modify the outcome of part 1, by multipling the user’s ID by 2.
const doubledUserEntries = userEntries.map(item => {
    return [item[0], item[1] * 2];
});
console.log(doubledUserEntries);

// Exercise 4 : Person class
// Analyze the code below. What will be the output?
class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
const member = new Person('John');
console.log(typeof member);
// expected output: object


// Exercise 5 : Dog class
class Dog {
    constructor(name) {
      this.name = name;
    }
  };

//  Analyze the options below. Which constructor will successfully extend the Dog class?
//   // 1  ----->  no super in the constructor
// class Labrador extends Dog {
// constructor(name, size) {
//     this.size = size;
//     }
// };
//     // 2  ----->  OK
// class Labrador extends Dog {
//     constructor(name, size) {
//       super(name);
//       this.size = size;
//     }
// };
//     // 3  ----->  missing name in constructor arguments
// class Labrador extends Dog {
// constructor(size) {
//     super(name);
//     this.size = size;
//     }
// };
//   // 4  ----->  no super in the constructor
// class Labrador extends Dog {
// constructor(name, size) {
//     this.name = name;
//     this.size = size;
//     }
// };

//  Exercise 6 : Challenges
// 1. Evaluate these (ie True or False)
// [2] === [2] -> false
// {} === {}   -> false

// 2. What is, for each object below, the value of the property number and why?
const object1 = { number: 5 }; 
const object2 = object1; // object2 references object1
const object3 = object2; // object3 references object2, thus object1
const object4 = { number: 5}; // object4 is a separate object from object1, object2 and object3

object1.number = 4; // assigns new value to the number key for object1 and therefore for object2 and object3
console.log(object2.number) // expected output: 4
console.log(object3.number) // expected output: 4
console.log(object4.number) // expected output: 5

    // 1. Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin etc …
class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
};

    // 2. Create a class Mammal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

class Mammal extends Animal {
    constructor(name, type, color) {
        super(name, type, color);
    }
    sound(nameSound) {
        return `${nameSound}!!! I am ${this.name}, I am a ${this.type} and my color is ${this.color}.` 
    }
};

    // 3. Create a farmerCow object that is an instance of the class Mammal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
const farmerCow = new Mammal('Lily', 'cow', 'brown and white');
console.log(farmerCow.sound('Moooo'));