// using the DOM absolute
document.getElementById("") // returns one element
document.getElementsByClassName("") // returns multiple elements
document.getElementsByTagName("") // same as previous

// using the DOM relative
document.firstChild
document.lastChild
document.lastElementChild
document.firstElementChild
document.nextSibling
document.children // returns array

// querying webpage
document.querySelector() // returns first match
document.querySelectorAll() // returns array of all matches

// creating elements
document.createElement("div")
document.createTextNode()
document.appendChild()