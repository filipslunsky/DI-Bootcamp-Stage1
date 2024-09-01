// // Exercise 1 : Scope  // commented out to avoid errors in the whole file
//     // example 1:
// // #1
// function funcOne() { // exepcted output "inside the funcOne function 3" in alert
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// // #1.1 - run in the console:
// funcOne()
// // #1.2 What will happen if the variable is declared 
// // with const instead of let ? ----> expected output: TypeError (cannot reassign const)

// //#2 
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree() // expected output: inside the funcThree function 0
// funcTwo() // changes the value of a to 5
// funcThree() // inside the funcThree function 5
// // #2.2 What will happen if the variable is declared 
// // with const instead of let ? ---> will throw TypeError at funcTwo()

// //#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour()
// funcFive()
// // expected output:  inside the funcFive function 5

// //#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// // #4.1 - run in the console:
// funcSix() // expected output: inside the funcSix function test
// // #4.2 What will happen if the variable is declared 
// // with const instead of let ?  ---> will throw TypeError

// //#5
// const a = 2;
// if (true) {
//     const a = 5;
//     alert(`in the if block ${a}`); // expected output: in the if block 5
// }
// alert(`outside of the if block ${a}`); // expected output: outside of the if block 2

// // #5.1 - run the code in the console
// // #5.2 What will happen if the variable is declared 
// // with const instead of let ? // ---->  same thing as with let

// Exercise 2 : Ternary operator
// function winBattle(){
//     return true;
// }

// 1. Transform the winBattle() function to an arrow function
const winBattle = () => {
    return true;
}

// 2. Create a variable called experiencePoints.
let experiencePoints;

// 3. Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
experiencePoints = winBattle() ? 10 : 1;

// 4. Console.log the experiencePoints variable.
console.log(experiencePoints)

// Exercise 3 : Is it a string ?
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false
// Check out the example below to see the expected output

const isString = testValue => typeof testValue === 'string';
console.log(isString('hello'));
console.log(isString([1, 2, 4, 0]));

// Exercise 4 : Find the sum
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.
const getSum = (num1, num2) => num1 + num2;
console.log(getSum(3, 4))

// Exercise 5 : Kg and grams
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)
// 1. First, use function declaration and invoke it.
function kgToGramsDecl (num) {
    return num * 1000;
}

// 2. Then, use function expression and invoke it.
const kgToGramsExpr = function(num) {
    return num * 1000;
}

// 3. Write in a one line comment, the difference between function declaration and function expression.
// declaration can be hoisted (expression cannot), is named (expression can be anonymous), declaration is either global or local (expression is accessed via its variable)

// 4. Finally, use a one line arrow function and invoke it.
const kgToGramsArrow = num => num * 1000;

console.log(kgToGramsDecl(3))
console.log(kgToGramsExpr(4))
console.log(kgToGramsArrow(5))

//  Exercise 6 : Fortune teller
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

(function fortuneTeller (numberOfChildren, partnerName, geoLocation, jobTitle) {
    let targetDiv = document.getElementById('fortune-teller');
    let newParagraph = document.createElement('p');
    newParagraph.textContent = `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`
    targetDiv.appendChild(newParagraph);
})(3, 'John Doe', 'New York', 'banker');

// Exercise 7 : Welcome
// John has just signed in to your website and you want to welcome him.

// 1. Create a Navbar in your HTML file.
    // done in index.html (no styling added)
// 2. In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// 3. The function should add a div in the nabvar, displaying the name of the user and his profile picture.


(function greetUser(username) {
    let imgURL = 'https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg';

    let navbar = document.querySelector('nav');
    let newDiv = document.createElement('div');
    newDiv.textContent = username;
    navbar.appendChild(newDiv)
    let newImg = document.createElement('img');
    newImg.src = imgURL;
    newImg.style.height = '50px';
    newDiv.appendChild(newImg);

})('John Doe');

// Exercise 8 : Juice Bar
// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.
// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".
// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.

function makeJuiceOne(size) {
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        let myDiv = document.getElementById('juice-bar-one');
        let message = `The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2} and ${ingredient3}.`;
        myDiv.textContent = message;
    }
    addIngredients('oranges', 'apples', 'ice')
}
makeJuiceOne('large')

// Part II:
// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.

function makeJuiceTwo(size) {
    let ingredients = [];
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        ingredients.push(ingredient1);
        ingredients.push(ingredient2);
        ingredients.push(ingredient3);
    }

    function displayJuice() {
        let myDiv = document.getElementById('juice-bar-two');
        let ingredientsString = ingredients.join(', ');
        let message = `The client wants a ${size} juice, containing ${ingredientsString}.`
        myDiv.textContent = message;
    }

    addIngredients('oranges', 'apples', 'ice');
    addIngredients('cherries', 'sugar', 'papaya');
    displayJuice();

}
makeJuiceTwo('large')

