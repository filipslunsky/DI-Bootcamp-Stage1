const handleForm = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    
    const options = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    };
    postData('http://127.0.0.1:5400/login', options)
};

const logForm = document.getElementById('login-form');

logForm.addEventListener('submit', handleForm);

const postData = async (url, options) => {
    try {
        const res = await fetch(url, options);
        const data = await res.json();
        console.log(data);
        render(data);
      } catch (e) {
        console.log(e);
      }
};

const render = (data) => {
    const html = `<p>Login status: ${data.message}</p>`;
    const targetDiv = document.getElementById('message');
    targetDiv.innerHTML = html;
};