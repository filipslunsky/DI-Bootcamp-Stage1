const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;

const toJs = () => {
    return new Promise((res, rej) => {
        let morseObj = JSON.parse(morse);
        if (Object.keys(morseObj).length > 0) {
            res(morseObj);
        } else {
            rej('the object is empty');
        }
    });
};

// // test
// toJs().then(result => console.log(result.b)); // expected output: -...


const toMorse = morseJS => {
    // let word = 'Hello'; // for usinng without a the index.html file in the browser
    let word = prompt('input a word');
    let lowerWord = word.toLocaleLowerCase();
    let letterArr = lowerWord.split('');
    return new Promise((res, rej) => {
        if (letterArr.every(key => key in morseJS)) {
            let morseArr = letterArr.map(item => morseJS[item]);
            res(morseArr);
        } else {
            rej('unknown characters detected');
        }
    });
};

const joinWords = morseTranslation => {
    return morseTranslation.join('\n');
};


toJs()
    .then(morseObj => toMorse(morseObj))
    .then(morseTranslation => joinWords(morseTranslation))
    .then(result => console.log(result))  
    .catch(error => console.log(error)); 

