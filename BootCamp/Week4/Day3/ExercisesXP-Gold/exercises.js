// Exercise 1
function isBlank(string) {
    return (string === "")
    }

console.log(isBlank(""))
console.log(isBlank("abc"))

// Exercise 2
function abbrevName (fullName) {
    let nameList = fullName.split(" ")
    let abbrevList = [nameList[0]];
    for (let i = 1; i < nameList.length; i++) {
        let lastName = nameList[i];
        let lastNameAbbrev = lastName[0] + "."
        abbrevList.push(lastNameAbbrev)
    }
    let abbrevNameString = abbrevList.join(" ");
    return abbrevNameString;
}

console.log(abbrevName("Robin Singh"))

// Exercise 3
function swapCase(sentence) {
    let newSentence = "";
    for (let i = 0; i < sentence.length; i++) {
        let letter = sentence[i];
        if (letter === letter.toUpperCase()) {
            letter = letter.toLowerCase();
            newSentence += letter;
        } else {
            letter = letter.toUpperCase();
            newSentence += letter;
        }
    }
    return newSentence;
}


console.log(swapCase("The Quick Brown Fox"))

// Exercise 4
function isOmnipresent(testList, testArg) {
    let results = 0;
    for (let item of testList) {
        if (testArg in item) {
            results += 1;
        }
    }
    if (results === testList.length) {
        return true
    } else {
        return false
    }
}

console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1))
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6))

