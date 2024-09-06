let playerSide = '';
let computerSide = '';

const chooseSide = (e) => {
    let chosenSide = e.target.textContent;
    document.getElementById("choice").style.display = 'none';
    playerSide = chosenSide;
    if (chosenSide === 'X') {
        computerSide = 'O';
    } else {
        computerSide = 'X';
    }
    displayGameField();
};

document.getElementById("cross-choice").addEventListener("click", chooseSide);
document.getElementById("circle-choice").addEventListener("click", chooseSide);

const displayGameField = () => {
    document.getElementById("game-field").style.display = "initial";
    startGame();
};

const startGame = () => {
    for (let i = 1; i <= 9; i++) {
        document.getElementById(`field${i}`).addEventListener("click", (e) => {
            e.target.textContent = playerSide;
            e.target.style.pointerEvents = 'none';
            if (evaluateStatus()) {
                computerPlay();
                evaluateStatus();
             }
        });
    }
};

const computerPlay = () => {
    let status = scanField();
    if (((computerSide === status.f2 && computerSide === status.f3)
    || (computerSide === status.f4 && computerSide === status.f7)
    || (computerSide === status.f5 && computerSide === status.f9)) && ((status.f1 !== 'X') && (status.f1 !== 'O'))) {
    console.log(1)
    let field1 = document.getElementById("field1");
    field1.textContent = computerSide;
    field1.style.pointerEvents = 'none';
    }
    else if (((computerSide === status.f5 && computerSide === status.f8)
        || (computerSide === status.f1 && computerSide === status.f3)) && ((status.f2 !== 'X') && (status.f2 !== 'O'))) {
        console.log(2)
    let field2 = document.getElementById("field2");
    field2.textContent = computerSide;
    field2.style.pointerEvents = 'none';
    }
    else if (((computerSide === status.f1 && computerSide === status.f2)
        || (computerSide === status.f6 && computerSide === status.f9)
        || (computerSide === status.f5 && computerSide === status.f7)) && ((status.f3 !== 'X') && (status.f3 !== 'O'))) {
        console.log(3)
    let field3 = document.getElementById("field3");
    field3.textContent = computerSide;
    field3.style.pointerEvents = 'none';
    }
    else if (((computerSide === status.f5 && computerSide === status.f6)
        || (computerSide === status.f1 && computerSide === status.f7)) && ((status.f4 !== 'X') && (status.f4 !== 'O'))) {
        console.log(4)
    let field4 = document.getElementById("field4");
    field4.textContent = computerSide;
    field4.style.pointerEvents = 'none';
    }
    else if (((computerSide === status.f4 && computerSide === status.f6)
        || (computerSide === status.f2 && computerSide === status.f8)
        || (computerSide === status.f1 && computerSide === status.f9)
        || (computerSide === status.f3 && computerSide === status.f7)) && ((status.f5 !== 'X') && (status.f5 !== 'O'))) {
        console.log(5)
    let field5 = document.getElementById("field5");
    field5.textContent = computerSide;
    field5.style.pointerEvents = 'none';
    }
    else if (((computerSide === status.f4 && computerSide === status.f5)
        || (computerSide === status.f3 && computerSide === status.f9)) && ((status.f6 !== 'X') && (status.f6 !== 'O'))) {
        console.log(6)
    let field6 = document.getElementById("field6");
    field6.textContent = computerSide;
    field6.style.pointerEvents = 'none';
    }
    else if (((computerSide === status.f1 && computerSide === status.f4)
        || (computerSide === status.f8 && computerSide === status.f9)
        || (computerSide === status.f3 && computerSide === status.f5)) && ((status.f7 !== 'X') && (status.f7 !== 'O'))) {
        console.log(7)
    let field7 = document.getElementById("field7");
    field7.textContent = computerSide;
    field7.style.pointerEvents = 'none';
    }
    else if (((computerSide === status.f7 && computerSide === status.f9)
        || (computerSide === status.f2 && computerSide === status.f5)) && ((status.f8 !== 'X') && (status.f8 !== 'O'))) {
        console.log(8)
    let field8 = document.getElementById("field8");
    field8.textContent = computerSide;
    field8.style.pointerEvents = 'none';
    }
    else if (((computerSide === status.f3 && computerSide === status.f6)
        || (computerSide === status.f7 && computerSide === status.f8)
        || (computerSide === status.f1 && computerSide === status.f5)) && ((status.f9 !== 'X') && (status.f9 !== 'O'))) {
        console.log(9)
    let field9 = document.getElementById("field9");
    field9.textContent = computerSide;
    field9.style.pointerEvents = 'none';
    } else if(((playerSide === status.f2 && playerSide === status.f3)
    || (playerSide === status.f4 && playerSide === status.f7)
    || (playerSide === status.f5 && playerSide === status.f9)) && ((status.f1 !== 'X') && (status.f1 !== 'O'))) {
    console.log(1)
    let field1 = document.getElementById("field1");
    field1.textContent = computerSide;
    field1.style.pointerEvents = 'none';
    }
    else if (((playerSide === status.f5 && playerSide === status.f8)
        || (playerSide === status.f1 && playerSide === status.f3)) && ((status.f2 !== 'X') && (status.f2 !== 'O'))) {
        console.log(2)
    let field2 = document.getElementById("field2");
    field2.textContent = computerSide;
    field2.style.pointerEvents = 'none';
    }
    else if (((playerSide === status.f1 && playerSide === status.f2)
        || (playerSide === status.f6 && playerSide === status.f9)
        || (playerSide === status.f5 && playerSide === status.f7)) && ((status.f3 !== 'X') && (status.f3 !== 'O'))) {
        console.log(3)
    let field3 = document.getElementById("field3");
    field3.textContent = computerSide;
    field3.style.pointerEvents = 'none';
    }
    else if (((playerSide === status.f5 && playerSide === status.f6)
        || (playerSide === status.f1 && playerSide === status.f7)) && ((status.f4 !== 'X') && (status.f4 !== 'O'))) {
        console.log(4)
    let field4 = document.getElementById("field4");
    field4.textContent = computerSide;
    field4.style.pointerEvents = 'none';
    }
    else if (((playerSide === status.f4 && playerSide === status.f6)
        || (playerSide === status.f2 && playerSide === status.f8)
        || (playerSide === status.f1 && playerSide === status.f9)
        || (playerSide === status.f3 && playerSide === status.f7)) && ((status.f5 !== 'X') && (status.f5 !== 'O'))) {
        console.log(5)
    let field5 = document.getElementById("field5");
    field5.textContent = computerSide;
    field5.style.pointerEvents = 'none';
    }
    else if (((playerSide === status.f4 && playerSide === status.f5)
        || (playerSide === status.f3 && playerSide === status.f9)) && ((status.f6 !== 'X') && (status.f6 !== 'O'))) {
        console.log(6)
    let field6 = document.getElementById("field6");
    field6.textContent = computerSide;
    field6.style.pointerEvents = 'none';
    }
    else if (((playerSide === status.f1 && playerSide === status.f4)
        || (playerSide === status.f8 && playerSide === status.f9)
        || (playerSide === status.f3 && playerSide === status.f5)) && ((status.f7 !== 'X') && (status.f7 !== 'O'))) {
        console.log(7)
    let field7 = document.getElementById("field7");
    field7.textContent = computerSide;
    field7.style.pointerEvents = 'none';
    }
    else if (((playerSide === status.f7 && playerSide === status.f9)
        || (playerSide === status.f2 && playerSide === status.f5)) && ((status.f8 !== 'X') && (status.f8 !== 'O'))) {
        console.log(8)
    let field8 = document.getElementById("field8");
    field8.textContent = computerSide;
    field8.style.pointerEvents = 'none';
    }
    else if (((playerSide === status.f3 && playerSide === status.f6)
        || (playerSide === status.f7 && playerSide === status.f8)
        || (playerSide === status.f1 && playerSide === status.f5)) && ((status.f9 !== 'X') && (status.f9 !== 'O'))) {
        console.log(9)
    let field9 = document.getElementById("field9");
    field9.textContent = computerSide;
    field9.style.pointerEvents = 'none';
    } else {
    randomInt = Math.floor(Math.random() * 9) + 1;
    let randomKey = `f${randomInt}`;
    while (status.randomKey === 'X' || status.randomKey === 'O') {
        randomInt = Math.floor(Math.random() * 9) + 1;
        randomKey = `f${randomInt}`;
    }
    let fieldRand = document.getElementById(`field${randomInt}`);
    fieldRand.textContent = computerSide;
    fieldRand.style.pointerEvents = 'none';
    }
};

const evaluateStatus = () => {
    let status = scanField();
    if ((playerSide === status.f1 && playerSide === status.f2 && playerSide === status.f3)
    || (playerSide === status.f4 && playerSide === status.f5 && playerSide === status.f6)
    || (playerSide === status.f7 && playerSide === status.f8 && playerSide === status.f9)
    || (playerSide === status.f1 && playerSide === status.f4 && playerSide === status.f7)
    || (playerSide === status.f2 && playerSide === status.f5 && playerSide === status.f8)
    || (playerSide === status.f3 && playerSide === status.f6 && playerSide === status.f9)
    || (playerSide === status.f1 && playerSide === status.f5 && playerSide === status.f9)
    || (playerSide === status.f3 && playerSide === status.f5 && playerSide === status.f7)) {
        console.log("You have won!");
        finishGame('w');
        return false;
    } else if ((computerSide === status.f1 && computerSide === status.f2 && computerSide === status.f3)
        || (computerSide === status.f4 && computerSide === status.f5 && computerSide === status.f6)
        || (computerSide === status.f7 && computerSide === status.f8 && computerSide === status.f9)
        || (computerSide === status.f1 && computerSide === status.f4 && computerSide === status.f7)
        || (computerSide === status.f2 && computerSide === status.f5 && computerSide === status.f8)
        || (computerSide === status.f3 && computerSide === status.f6 && computerSide === status.f9)
        || (computerSide === status.f1 && computerSide === status.f5 && computerSide === status.f9)
        || (computerSide === status.f3 && computerSide === status.f5 && computerSide === status.f7)) {
            console.log("You have lost!");
            finishGame('l');
        return false;
    } else if ((status.f1 === 'X' || status.f1 === 'O')
    && (status.f2 === 'X' || status.f2 === 'O')
    && (status.f3 === 'X' || status.f3 === 'O')
    && (status.f4 === 'X' || status.f4 === 'O')
    && (status.f5 === 'X' || status.f5 === 'O')
    && (status.f6 === 'X' || status.f6 === 'O')
    && (status.f7 === 'X' || status.f7 === 'O')
    && (status.f8 === 'X' || status.f8 === 'O')
    && (status.f9 === 'X' || status.f9 === 'O')) {
        console.log("The game is tied.");
        finishGame('t');
        return false;
    } else {
        return true;
    }
};

const scanField = () => {
    let fieldObj = {};
    for (let i = 1; i <= 9; i++) {
        let field = document.getElementById(`field${i}`);    
        if (field) {
            fieldObj['f'+ i] = field.textContent;
        } else {
            fieldObj['f'+ i] = null;
        }
    }
    return fieldObj;
};

const finishGame = (resultStatus) => {
    for (let i = 1; i <= 9; i++) {
        document.getElementById(`field${i}`).style.pointerEvents = 'none';
    }
    if (resultStatus === 'w' || resultStatus === 'l') {
        colorFields(resultStatus);
    };
    displayEndMessage(resultStatus);
};

const colorFields = resultStatus => {
    let color = '';
    if (resultStatus === 'w') {
        color = 'green';
    } else {
        color = 'red';
    }
    let status = scanField();
    if (status.f1 === status.f2 && status.f2 === status.f3 && (status.f1 === 'X' || status.f1 === 'O')) {
        document.getElementById('field1').style.backgroundColor = color;
        document.getElementById('field2').style.backgroundColor = color;
        document.getElementById('field3').style.backgroundColor = color;
    } else if (status.f4 === status.f5 && status.f5 === status.f6 && (status.f4 === 'X' || status.f4 === 'O')) {
        document.getElementById('field4').style.backgroundColor = color;
        document.getElementById('field5').style.backgroundColor = color;
        document.getElementById('field6').style.backgroundColor = color;
    } else if (status.f7 === status.f8 && status.f8 === status.f9 && (status.f7 === 'X' || status.f7 === 'O')) {
        document.getElementById('field7').style.backgroundColor = color;
        document.getElementById('field8').style.backgroundColor = color;
        document.getElementById('field9').style.backgroundColor = color;
    } else if (status.f1 === status.f4 && status.f4 === status.f7 && (status.f1 === 'X' || status.f1 === 'O')) {
        document.getElementById('field1').style.backgroundColor = color;
        document.getElementById('field4').style.backgroundColor = color;
        document.getElementById('field7').style.backgroundColor = color;
    } else if (status.f2 === status.f5 && status.f5 === status.f8 && (status.f2 === 'X' || status.f2 === 'O')) {
        document.getElementById('field2').style.backgroundColor = color;
        document.getElementById('field5').style.backgroundColor = color;
        document.getElementById('field8').style.backgroundColor = color;
    } else if (status.f3 === status.f6 && status.f6 === status.f9 && (status.f3 === 'X' || status.f3 === 'O')) {
        document.getElementById('field3').style.backgroundColor = color;
        document.getElementById('field6').style.backgroundColor = color;
        document.getElementById('field9').style.backgroundColor = color;
    } else if (status.f1 === status.f5 && status.f5 === status.f9 && (status.f1 === 'X' || status.f1 === 'O')) {
        document.getElementById('field1').style.backgroundColor = color;
        document.getElementById('field5').style.backgroundColor = color;
        document.getElementById('field9').style.backgroundColor = color;
    } else if (status.f3 === status.f5 && status.f5 === status.f7 && (status.f3 === 'X' || status.f3 === 'O')) {
        document.getElementById('field3').style.backgroundColor = color;
        document.getElementById('field5').style.backgroundColor = color;
        document.getElementById('field7').style.backgroundColor = color;
    }
};

const displayEndMessage = resultStatus => {
    let endMessage = '';
    if (resultStatus === 'w') {
        endMessage = 'You have won!';
    } else if (resultStatus === 'l') {
        endMessage = 'You have lost!';
    } else if (resultStatus === 't') {
        endMessage = 'The game is tied!';
    };

    let targetElement = document.getElementById('game-field');
    let newParagraph = document.createElement('p');
    newParagraph.textContent = endMessage;
    targetElement.appendChild(newParagraph);
    let playAgain = document.createElement('p');
    playAgain.textContent = 'PLAY AGAIN';
    playAgain.style.cursor = 'pointer';
    playAgain.addEventListener("click", () => location.reload());
    targetElement.appendChild(playAgain);
};
