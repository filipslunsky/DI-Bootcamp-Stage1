let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// 1. Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.
const displayGroceries = () => {
    let fruits = groceries.fruits;
    fruits.forEach(function(fruit) {
        console.log(fruit);
    });
};

displayGroceries()

// 2. Create another arrow function named cloneGroceries.
//      In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
//          Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
            // ---> no, because user is a separate variable that "made a copy" of the value of client before it was changed

//      In the function, create a variable named shopping that is equal to the groceries variable.
//          Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
            // ---> yes, in case of the object we made a reference to the same object in memory so by modifying shopping, we modify the original object in the same memory slot
//          Change the value of the paid key to false. Will we also see this modification in the shopping object ? Why ?
            // ---> yes, in case of the object we made a reference to the same object in memory so by modifying shopping, we modify the original object in the same memory slot
const cloneGroceries = () => {
    let user = client;
    client = 'Betty';
    let shopping = groceries;
    groceries.totalPrice = '35$';
    groceries.other.paid = false;
    console.log(shopping)
}


cloneGroceries()
console.log(groceries)