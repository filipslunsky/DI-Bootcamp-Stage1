const numbers = [5,0,9,1,7,4,2,6,3,8];
console.log(numbers)

stringNumbers = numbers.toString()
console.log(stringNumbers)
joinNumbers = numbers.join("")
console.log(joinNumbers)
joinNumbers = numbers.join("+")
console.log(joinNumbers)
joinNumbers = numbers.join("---")
console.log(joinNumbers)

let highestNumber = 0;
for (let number of numbers) {
    if (number > highestNumber) {
        highestNumber = number
    }
    
}

console.log(highestNumber)