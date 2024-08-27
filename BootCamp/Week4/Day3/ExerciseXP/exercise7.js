let books = [{
    title: "Alice in Wonderland",
    author: "Lewis Carrol",
    image: "https://m.media-amazon.com/images/I/71O1It5N1VS._SY466_.jpg",
    alreadyRead: true
},
{
    title: "Nineteen Eighty-Four",
    author: "George Orwell",
    image: "https://m.media-amazon.com/images/I/418Ug-5U2ML._SY445_SX342_.jpg",
    alreadyRead: true
}];

let mySection = document.querySelector("section");

for (let book of books) {
    let bookDiv = document.createElement("div");
    mySection.appendChild(bookDiv)
    let bookImg = document.createElement("img");
    bookDiv.appendChild(bookImg);
    bookImg.src = book.image;
    bookImg.style.width = "100px";
    let bookDetails = document.createElement("p");
    bookDiv.appendChild(bookDetails);
    bookDetails.innerHTML = `${book.title} by ${book.author}`
    if (book.alreadyRead) {
        bookDetails.style.color = "red";
    }
}

