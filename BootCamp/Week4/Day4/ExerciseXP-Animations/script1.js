// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.

function alertHello () {
    alert("Hello World")
}

setTimeout(alertHello, 2000);

// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
let paragraphCounter = 0;
function addParagraph() {
    let paragraph = document.createElement("p");
    paragraph.textContent = "Hello World";
    let myDiv = document.getElementById("container");
    myDiv.appendChild(paragraph);
    paragraphCounter ++;

    if (paragraphCounter >= 5) {
        clearInterval(myInterval);
        console.log("interval stopped automatically")
    }
}

setTimeout(addParagraph, 2000);

// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

let myInterval = setInterval(addParagraph, 2000);

let myButton = document.getElementById("clear");
myButton.addEventListener("click", function () {
    clearInterval(myInterval);
    console.log("all done with the interval")
});


