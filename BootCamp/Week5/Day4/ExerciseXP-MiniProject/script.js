// global stuff
let quotes = [
    {
        id: 0,
        text: "Don't cry for me, Argentina, The truth is I never left you.",
        author: "Evita Perón",
        likes: 0
    },{
        id: 1,
        text: "Life is like a box of chocolates, you never know what you will get.",
        author: "Forrest Gump",
        likes: 0
    },{
        id: 2,
        text: "I'll be back. Hasta la vista, baby.",
        author: "T-800",
        likes: 0
    },{
        id: 3,
        text: "Vodka and martini, please. Shaken, not stirred.",
        author: "James Bond, 007",
        likes: 0
    },{
        id: 4,
        text: "I am your father.",
        author: "Darth Vader",
        likes: 0
    },
];

let randomId = 0;
let nextAvailableId = 5;

// quote generating section
const getRandomQuote = () => {
    let newRandomId = Math.floor(Math.random() * quotes.length);
    while (newRandomId === randomId) {
        newRandomId = Math.floor(Math.random() * quotes.length);
    }
    randomId = newRandomId;
    let randomQuote = quotes.filter(item => item.id === randomId);
    return randomQuote[0];
};

const displayQuote = () => {
    let myQuote = getRandomQuote();
    let author = document.getElementById("quoteAuthor");
    let quote = document.getElementById("quoteSentence");
    author.textContent = myQuote.author;
    quote.textContent = myQuote.text;
    document.getElementById("countCharSpaceResult").innerHTML = "";
    document.getElementById("countCharNoSpaceResult").innerHTML = "";
    document.getElementById("countWordsResult").innerHTML = "";
    document.getElementById("likeQuoteResult").innerHTML = "";
};

let quoteButton = document.getElementById("generate");
quoteButton.addEventListener("click", displayQuote);

displayQuote();

// quote adding section
const addButton = document.getElementById("add");
addButton.addEventListener("click", function(e) {
    e.preventDefault()
    let newQuote = document.getElementById("newQuoteText").value.trim();
    let newAuthor = document.getElementById("newQuoteAuthor").value.trim();
    let newQuoteObject = {id: nextAvailableId, text: newQuote, author: newAuthor, likes: 0};
    quotes.push(newQuoteObject);
    nextAvailableId++;
    console.log(quotes);
    document.getElementById("addQuoteForm").reset();
});

// quote info section

let charButtonSpaces = document.getElementById("countCharSpace");
charButtonSpaces.addEventListener("click", function () {
    let currentQuote = document.getElementById("quoteSentence").innerHTML;
    console.log(currentQuote);
    let result = currentQuote.length;
    let paragraph = document.getElementById("countCharSpaceResult");
    paragraph.innerHTML = `This quote has ${result} characters, including spaces.`;

});

let charButtonNoSpaces = document.getElementById("countCharNoSpace");
charButtonNoSpaces.addEventListener("click", function () {
    let currentQuote = document.getElementById("quoteSentence").innerHTML;
    console.log(currentQuote);
    trimmedQuote = currentQuote.split(' ').join('');
    let result = trimmedQuote.length;
    let paragraph = document.getElementById("countCharNoSpaceResult");
    paragraph.innerHTML = `This quote has ${result} characters without spaces.`;
});

let wordButton = document.getElementById("countWords");
wordButton.addEventListener("click", function () {
    let currentQuote = document.getElementById("quoteSentence").innerHTML;
    console.log(currentQuote);
    splitQuote = currentQuote.split(" ");
    let result = splitQuote.length;
    let paragraph = document.getElementById("countWordsResult");
    paragraph.innerHTML = `This quote has ${result} words.`;
});

let likeButton = document.getElementById("likeQuote");
likeButton.addEventListener("click", function () {
    let currentQuoteObj = quotes.filter(quote => {
        let currentQuote = document.getElementById("quoteSentence").innerHTML;
        if (quote.text === currentQuote) {
            return quote;
        }
    });
    currentQuoteObj[0].likes++;
    let paragraph = document.getElementById("likeQuoteResult");
    paragraph.innerHTML = `Number of likes: ${currentQuoteObj[0].likes}`
});

// search quotes section
const searchButton = document.getElementById("search");
searchButton.addEventListener("click", function (e) {
    e.preventDefault();
    let inputValue = document.getElementById("searchAuthorInput").value.trim();
    let filteredQuotes = quotes.filter(item => item.author === inputValue);
    let paragraphText = document.getElementById("authorQuote");
    let paragraphAuthor = document.getElementById("authorName");
    document.getElementById("searchAuthor").reset();
    
    if (filteredQuotes.length > 0) {
        paragraphText.innerHTML = filteredQuotes[0].text;
        paragraphAuthor.innerHTML = filteredQuotes[0].author;
    }

    let counter = 0;

    const nextButton = document.getElementById("next");
    nextButton.addEventListener("click", function (e) {
        e.preventDefault();
        counter++;
        if (counter === filteredQuotes.length) {
            counter = 0;
        }
        paragraphText.innerHTML = filteredQuotes[counter].text;
        paragraphAuthor.innerHTML = filteredQuotes[counter].author;
    });

    const previousButton = document.getElementById("previous");
    previousButton.addEventListener("click", function (e) {
        e.preventDefault();
        counter--;
        if (counter < 0) {
            counter = filteredQuotes.length - 1;
        }
        paragraphText.innerHTML = filteredQuotes[counter].text;
        paragraphAuthor.innerHTML = filteredQuotes[counter].author;
    });
});
