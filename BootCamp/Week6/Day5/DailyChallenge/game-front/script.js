let allQuestions = 0;
let correctValue = 0;
let wrongValue = 0;

const displayQuestion = async () => {
    try {
        let response = await fetch('http://127.0.0.1:5100/api/question');
        let data = await response.json();
        let myForm = document.getElementById('emojiForm');
        myForm.innerHTML = data;
        
        
    } catch (error) {
        console.log(error)
    }
};



let myForm = document.getElementById('emojiForm');
myForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(myForm);

    try {
        const response = await fetch('http://127.0.0.1:5100/api/question', {
            method: 'POST',
            body: formData
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.text();
        
        
        let correct = document.getElementById('correct');
        let wrong = document.getElementById('wrong');
        let all = document.getElementById('all');

        if (result === 'correct') {
            correctValue++;
            correct.innerHTML = correctValue;
        } else if (result === 'wrong') {
            wrongValue++;
            wrong.innerHTML = wrongValue;
        }

        allQuestions++;
        all.innerHTML = allQuestions;
        

        alert(result);
        displayQuestion();

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
});

displayQuestion();

document.getElementById('sendScore').addEventListener('click', async () => {
    let myScore = correctValue / allQuestions;
    let myName = prompt('What is your name?');
    
    let scoreObj = {name: myName, score: myScore};
    let scoreJson = JSON.stringify(scoreObj);
    
    try {
        const response = await fetch('http://127.0.0.1:5100/api/scores', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: scoreJson
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        displayScores(result);
        console.log('Server response:', result);

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
});

const displayScores = (data) => {
    let sortedData = data.sort((a, b) => b.score - a.score);
    let html = '';
    for (let i = 0; i < 7; i++) {
        html += `<p>${i + 1}.   Name: ${sortedData[i].name}      Score: ${sortedData[i].score}</p>`;
    }
    
    document.getElementById('highScores').innerHTML = html;
};