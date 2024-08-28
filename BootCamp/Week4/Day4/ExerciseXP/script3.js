// 1. Declare a global variable named allBoldItems.
let allBoldItems;

// 2. Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

function getBoldItems() {
    allBoldItems = document.querySelectorAll("strong");
}

// 3. Create a function called highlight() that changes the color of all the bold text to blue.
function highlight() {
    getBoldItems();
    for (let item of allBoldItems) {
        item.style.color = "blue";
    }
}

// 4. Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.
function returnItemsToDefault() {
    getBoldItems();
    for (let item of allBoldItems) {
        item.style.color = "black";
    }
}

// 5. Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example
let paragraph = document.querySelector("p");
paragraph.addEventListener("mouseover", highlight);
paragraph.addEventListener("mouseout", returnItemsToDefault);