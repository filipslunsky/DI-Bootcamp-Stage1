const calculator = (a, b, operator) => {
    return operator === "+" ? a + b :
       operator === "-" ? a - b :
       operator === "*" ? a * b :
       null;
}

let result = calculator(5, 4, "+");
console.log(result)


(function times1000(num) {
    console.log(num * 1000);
})(3); //function calls itself once, cannot be reused