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

displayQuestion();

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
        
        console.log(result);

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
});