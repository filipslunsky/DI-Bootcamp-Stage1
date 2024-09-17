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
    postData('http://127.0.0.1:5400/register', options)
};

const regForm = document.getElementById('register-form');

regForm.addEventListener('submit', handleForm);

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
  const html = `<p>new user: ${data.username}, id ${data.id}</p>`;
  const targetDiv = document.getElementById('message');
  targetDiv.innerHTML = html;
};