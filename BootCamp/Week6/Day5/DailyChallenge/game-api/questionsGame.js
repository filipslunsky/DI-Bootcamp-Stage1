import { emojis } from './data.js';

const getRandEmoji = () => {
    let randInt = Math.floor(Math.random() * 19);
    return emojis[randInt];   
};

const getDecoyAnswers = emoji => {
    let decoyAnswers = [];
    let usedInts = [];
    for (let i = 0; i < 3; i++) {
        let randInt = Math.floor(Math.random() * 19);
        while (randInt === emoji.id -1 || usedInts.includes(randInt)) {
            randInt = Math.floor(Math.random() * 19);
        }
        usedInts.push(randInt);
        decoyAnswers.push(emojis[randInt].name);
    }
    return decoyAnswers;
};

// let testEmoji = getRandEmoji();
// console.log(testEmoji);


// console.log(getDecoyAnswers(testEmoji));

const getQuestionData = () => {
    let emoji = getRandEmoji();
    let allAnswers = getDecoyAnswers(emoji);
    let randInt = Math.floor(Math.random() * 3);
    allAnswers.splice(randInt, 0, emoji.name);
    return [emoji, allAnswers];
};

// console.log(getQuestionData());

export const getQuestion = () => {
    let [emoji, allAnswers] = getQuestionData();
    let html = `
            <h3>What is the name of this emoji ${emoji.emoji} ? </h3>
            <input type="radio" id="radio1" name="emoji" value="${allAnswers[0]}">
            <label for="radio1">${allAnswers[0]}</label>
            <br>
            <input type="radio" id="radio2" name="emoji" value="${allAnswers[1]}">
            <label for="radio2">${allAnswers[1]}</label>
            <br>
            <input type="radio" id="radio3" name="emoji" value="${allAnswers[2]}">
            <label for="radio3">${allAnswers[2]}</label>
            <br>
            <input type="radio" id="radio4" name="emoji" value="${allAnswers[3]}">
            <label for="radio4">${allAnswers[3]}</label>
            <br>
            <input type="submit" value="Send" id="send">
        `;
    return [emoji, allAnswers, html];
};

