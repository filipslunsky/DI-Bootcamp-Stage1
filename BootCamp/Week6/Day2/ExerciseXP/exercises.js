// Exercise 1 : Giphy API
let response = fetch('https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');

response
.then(result => result.json())
.then(data => console.log(data))
.catch(error => console.log(error));

// Exercise 2 : Giphy API
let mainUrl = 'https://api.giphy.com/v1/gifs/search';
let params = {
    q: 'sun',
    rating: 'g',
    api_key: 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My',
    limit: 10
};

const createQueryString = (params) => {
    return Object.keys(params)
                 .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
                 .join('&');
};
let url = `${mainUrl}?${createQueryString(params)}`;

let response2 = fetch(`${mainUrl}?${createQueryString(params)}`);

response2
.then(result => result.json())
.then(data => console.log(data))
.catch(error => log(error));

// Exercise 3 : Async function
// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));

const fetchStarship = async () => {
    const url = "https://www.swapi.tech/api/starships/9/";

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const objectStarWars = await response.json();
        console.log(objectStarWars.result);
        
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

fetchStarship();

// Exercise 4: Analyze
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// expected output: 
// calling
// 2-second break
// resolved

