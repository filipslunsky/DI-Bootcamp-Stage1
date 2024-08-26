// Exercise 1 : Divisible by three
let numbers = [123, 8409, 100053, 333333333, 7];

for (let number of numbers) {
    console.log(number % 3 === 0)
}

// // Exercise 2 : Attendance
// let guestList = {
//     randy: "Germany",
//     karla: "France",
//     wendy: "Japan",
//     norman: "England",
//     sam: "Argentina"
//   }

//   let user_input = prompt("What is your name?");

//   if (user_input in guestList) {
//     console.log(`Hi, I am ${user_input} and I am from ${guestList[user_input]}.`)
//   } else {
//     console.log("Hi, I am a guest.")
//   }

// Exercise 3 : Playing with numbers
let age = [20,5,12,43,98,55];

// 1. Console.log the sum of all the numbers in the age array.
let sumOfAges = 0
for (let item of age) {
    sumOfAges += item
}
console.log(sumOfAges)

// 2. Console.log the highest age in the array.
let highestAge = 0;
for (let item of age) {
    if (item > highestAge) {
        highestAge = item
    }
}
console.log(highestAge)
