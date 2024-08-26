// // Exercise 1 : List of people
// // PART I
// const people = ["Greg", "Mary", "Devon", "James"];
// console.log(people)

// // remove Greg
// people.splice(0, 1);
// console.log(people)

// // replace James with Jason
// people[2] = "Jason";
// console.log(people)

// // adding my own name
// people.push("Filip");
// console.log(people)

// // index of Mary
// console.log(people.indexOf("Mary"))

// // make a copy of the people array using the slice method
// const newPeople = people.slice(1, 3);
// console.log(newPeople)

// // code that gives the index of “Foo”
// console.log(people.indexOf("Foo"))
// // it returns -1 to indicate it is not present

// // variable called last which value is the last element of the array
// let last = newPeople.splice(-1, 1);
// console.log(last)

// // PART II
// const people = ["Greg", "Mary", "Devon", "James"];
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i])
// }

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
//     if (people[i] === "Devon") {
//         break
//     }
// }

// // Exercise 2
// // Your favorite colors
// // 1. Create an array called colors where the value is a list of your five favorite colors.
// const colors = ["blue", "white", "green", "yellow", "red"];

// // 2. Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect
// for (let i = 0; i < colors.length; i++) {
//     console.log(`My #${i+1} choice: ${colors[i]}`)
// }

// // 3. Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// const suffixes = ["st", "nd", "rd", "th", "th"];
// for (let i = 0; i < colors.length; i++) {
//     console.log(`My ${i+1}${suffixes[i]} choice is ${colors[i]}`)
// }

// // Exercise 3 : Repeat the question
// let number = 0;

// while (number < 10) {
//     let answer = prompt("Enter a number:");
//     number = Number(answer);
//     if (!isNaN(number) && isFinite(number)) {
//         if (number < 10) {
//             console.log("The number is too small. Try again.");
//         } else {
//             console.log("You entered a valid number:", number);
//         }
//     } else {
//         console.log("That's not a valid number!");
//     }
// }

// // Exercise 4 - Building Management
// // 1. Copy and paste the above object to your Javascript file.
// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }

// // 2. Console.log the number of floors in the building.
// console.log(building.numberOfFloors)

// // 3. Console.log how many apartments are on the floors 1 and 3.
// console.log(building.numberOfAptByFloor.firstFloor)
// console.log(building.numberOfAptByFloor.thirdFloor)

// // 4. Console.log the name of the second tenant and the number of rooms he has in his apartment.
// console.log(building.nameOfTenants[1])

// // 5. Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
// let sumOfRentOfSarahAndDavid = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1];

// if (sumOfRentOfSarahAndDavid > building.numberOfRoomsAndRent.david[1]) {
//     building.numberOfRoomsAndRent.david[1] = 1200;
// }
// console.log(building.numberOfRoomsAndRent.david[1])

// // Exercise 5 Family
// // 1. Create an object called family with a few key value pairs.
// const family = {
//     father: "Jack",
//     mother: "Jill",
//     son: "Billy",
//     daughter: "Jean"
// }

// // 2. Using a for in loop, console.log the keys of the object.
// for (let key in family) {
//     console.log(key)
// }
// // 3. Using a for in loop, console.log the values of the object.
// for (let key in family) {
//     console.log(family[key])
// }

// //Exercise 6: Rudolph
// const details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'reindeer'
//   }

//   let rudolphIntro = "";
//   for (let key in details) {
//     rudolphIntro += key
//     rudolphIntro += " "
//     rudolphIntro += details[key]
//     if (details[key] === "reindeer") {
//         break
//     }
//     rudolphIntro += " "
//   }

// console.log(rudolphIntro)

// Exercise 7: Secret Group
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
firstLetters = [];
for (let person of names) {
    firstLetters.push(person[0]);
}

firstLetters.sort()
let serctetName = firstLetters.join("")

console.log(serctetName)

