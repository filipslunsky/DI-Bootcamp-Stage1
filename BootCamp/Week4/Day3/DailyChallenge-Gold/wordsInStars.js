// let userInput = prompt("input a few words separated with a comma")
        // prompt switched off for testing purposes in VS Code console

let userInput = "Hello world, in, a, frame";
let words = userInput.split(", ");

let wordLengths = [];
for (let word of words) {
    let wordLength = word.length;
    wordLengths.push(wordLength)
}

let maxLength = 0;
for (let wordLength of wordLengths) {
    if (wordLength > maxLength) {
        maxLength = wordLength;
    }
}

let topBottom = "";
topBottom += "**";
for (let i = 0; i < maxLength; i++) {
    topBottom += "*"
}
topBottom += "**";

let spacers = [];
for (let wordLength of wordLengths) {
    let spacer = maxLength - wordLength;
    spacers.push(spacer)
}

let spaces = [];
for (let spacer of spacers) {
    let space = "";
    for (let i = 0; i < spacer; i++) {
        space += " ";
    }
    spaces.push(space)       
}

console.log(topBottom)
for (let i = 0; i < words.length; i++) {
    console.log(`* ${words[i]}${spaces[i]} *`)
}
console.log(topBottom)
