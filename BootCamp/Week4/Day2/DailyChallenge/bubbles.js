const numbers = [5,0,9,1,7,4,2,6,3,8];

// 1. Using the .toString() method convert the array to a string.
stringNumbers = numbers.toString()
console.log(stringNumbers)


// 2. Using the .join()method convert the array to a string. Try passing different values into the join.
// Eg .join(“+”), .join(” “), .join(“”)
joinNumbers = numbers.join("")
console.log(joinNumbers)
joinNumbers = numbers.join("+")
console.log(joinNumbers)
joinNumbers = numbers.join("---")
console.log(joinNumbers)

// 3.Bonus : To do this Bonus look up how to work with nested for loops
// Sort the numbers array in descending order, do so using for loops (Not using built-in sort methods).
// The output should be: [9,8,7,6,5,4,3,2,1,0]

let sortedNumbers = []
while (numbers.length > 0) {
        let highestNumber = 0;
    for (let number of numbers) {
        if (number > highestNumber) {
            highestNumber = number
        }
    }
    let highestNumberIndex = numbers.indexOf(highestNumber)
    numbers.splice(highestNumberIndex, 1)
    sortedNumbers.push(highestNumber)
    highestNumber = 0
}

console.log(sortedNumbers)