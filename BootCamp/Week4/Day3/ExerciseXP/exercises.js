// Exercise 1 : Find the numbers divisible by 23
function displayNumbersDivisible() {
    results = [];
    for (let i = 0; i <= 500; i++) {
        if (i % 23 == 0) {
            results.push(i)
        }
    }
    console.log(`Outcome : ${results}`)
    sum = 0;
    for (let result of results) {
        sum += result
    }
    console.log(`Sum : ${sum}`)
}

displayNumbersDivisible()

// Bonus: Add a parameter divisor to the function.
function displayNumbersDivisibleBy(divisor) {
    results = [];
    for (let i = 0; i <= 500; i++) {
        if (i % divisor == 0) {
            results.push(i)
        }
    }
    console.log(`All numbers divisible by ${divisor}: ${results}`)
    sum = 0;
    for (let result of results) {
        sum += result
    }
    console.log(`And their sum : ${sum}`)
}

displayNumbersDivisibleBy(3)
displayNumbersDivisibleBy(45)


// Exercise 2: Shopping List
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
}

let shoppingList = ["banana", "orange", "apple"];

function myBill() {
    let availableItems = [];
    let unavailableItems = [];
    for (let item of shoppingList) {
        if (item in stock && stock[item] > 0) {
            availableItems.push(item)
        } else {
            unavailableItems.push(item)
        }
    }
    let totalPrice = 0;
    for (let item of availableItems) {
        totalPrice += prices[item];
        stock[item] -= 1; // bonus - removing the item from the stock
    }
    return totalPrice
}
console.log(myBill())
console.log(stock)


// Exercise 3 : What’s in my wallet ?
function changeEnough(itemPrice, amountOfChange) {
    let values = [0.25, 0.10, 0.05, 0.01]
    totalPocket = 0;
    for (let i = 0; i < 4; i++) {
        let total = amountOfChange[i] * values[i];
        totalPocket += total;
    }
    if (itemPrice <= totalPocket) {
        return true;
    } else {
        return false;
    }
}

console.log(changeEnough(4.25, [25, 20, 5, 0]))
console.log(changeEnough(14.11, [2,100,0,0]))
console.log(changeEnough(0.75, [0,0,20,5]))

// Exercise 4 : Vacations Costs
function hotelCost() {
    let numberOfNights;
    do {
        numberOfNights = prompt("How many nights would you like to stay in the hotel?");
    } while (isNaN(numberOfNights) || numberOfNights === "" || numberOfNights === null || Number(numberOfNights) <= 0);
    let nightlyCost = 140;
    let totalCost = nightlyCost * numberOfNights;
    return totalCost;
}

function planeRideCost() {
    let destination;
    do {
        destination = prompt("Where do you want to travel?");
    } while (destination === "" || destination === null);

    let price;
    switch(destination) {
        case "London":
            price = 183;
            break;
        case "Paris":
            price = 220;
            break;
        default:
            price = 300;
    }
    return price;
}

function rentalCarCost() {
    let numberOfDays;
    do {
        numberOfDays = prompt("For how many days will you need the rented car?");
    } while (isNaN(numberOfDays) || numberOfDays === "" || numberOfDays === null || Number(numberOfDays) <= 0);
    let dailyRental = 40;
    let basicCost = numberOfDays * dailyRental;
    if (numberOfDays > 10) {
        let discountedCost = basicCost * 0.95;
        return discountedCost;
    } else {
        return basicCost;
    }
}

function totalVacationCost() {
    let hotel = hotelCost();
    let plane = planeRideCost();
    let rentalCar = rentalCarCost();
    let totalCost = hotel + plane + rentalCar;
    let report = `The total cost is: ${totalCost}$ it is ${hotel}$ for the hotel, ${plane}$ for the flight ticket and ${rentalCar}$ for the car.`
    return report;
}

console.log(totalVacationCost())

// BONUS
function hotelCost(numberOfNights) {
    let nightlyCost = 140;
    let totalCost = nightlyCost * numberOfNights;
    return totalCost;
}

function planeRideCost(destination) {
    let price;
    switch(destination) {
        case "London":
            price = 183;
            break;
        case "Paris":
            price = 220;
            break;
        default:
            price = 300;
    }
    return price;
}

function rentalCarCost(numberOfDays) {
    let dailyRental = 40;
    let basicCost = numberOfDays * dailyRental;
    if (numberOfDays > 10) {
        let discountedCost = basicCost * 0.95;
        return discountedCost;
    } else {
        return basicCost;
    }
}

function totalVacationCost() {
    let numberOfNights;
    do {
        numberOfNights = prompt("How many nights would you like to stay in the hotel?");
    } while (isNaN(numberOfNights) || numberOfNights === "" || numberOfNights === null || Number(numberOfNights) <= 0);
    let hotel = hotelCost(numberOfNights);

    let destination;
    do {
        destination = prompt("Where do you want to travel?");
    } while (destination === "" || destination === null);
    let plane = planeRideCost(destination);

    let numberOfDays;
    do {
        numberOfDays = prompt("For how many days will you need the rented car?");
    } while (isNaN(numberOfDays) || numberOfDays === "" || numberOfDays === null || Number(numberOfDays) <= 0);
    let rentalCar = rentalCarCost(numberOfDays);

    let totalCost = hotel + plane + rentalCar;
    let report = `The total cost is: ${totalCost}$ it is ${hotel}$ for the hotel, ${plane}$ for the flight ticket and ${rentalCar}$ for the car.`
    return report;
}

console.log(totalVacationCost())

// Exercise 5 : Users
// in a separate file named and index5.html

// Exercise 6 : Change the navbar
// in a separate file named exercise6.js and index6.html

// Exercise 7 : My Book List
// in a separate file named exercise7.js and index7.html
