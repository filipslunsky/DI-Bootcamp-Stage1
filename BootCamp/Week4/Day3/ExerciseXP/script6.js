// 2. changing the navBar id
const myDiv = document.querySelector("div");
myDiv.setAttribute("id", "socialNetworkNavigation");

// 3. crating a new list item
let myItem = document.createElement("li");
myItem.innerHTML = "Logout"
let myList = document.querySelector("ul");
myList.appendChild(myItem);

// 4. getting and displaying the first and last element of the list
let firstItemText = myList.firstElementChild;
let lastItemText = myList.lastElementChild

console.log(firstItemText.textContent)
console.log(lastItemText.textContent)
