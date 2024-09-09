const addGif = event => {
    event.preventDefault();
    let word = event.target.word.value;
    console.log(word);
    event.target.reset();

    let mainUrl = 'https://api.giphy.com/v1/gifs/random';
    let params = {
    tag: word,
    rating: 'g',
    api_key: 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My',
    };

    const createQueryString = (params) => {
        return Object.keys(params)
                    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
                    .join('&');
    };
    let url = `${mainUrl}?${createQueryString(params)}`;

    let response = fetch(`${mainUrl}?${createQueryString(params)}`);

    response
    .then(result => result.json())
    .then(data => appendGif(data.data.images.downsized.url))
    .catch(error => log(error));
    };

const appendGif = url => {
    let targetDiv = document.getElementById("gifs");
    let newDiv = document.createElement('div');
    newDiv.classList.add('gif-div');
    let newImg = document.createElement('img');
    newImg.src = url;
    let newButton = document.createElement('button');
    newButton.innerHTML = 'DELETE THIS GIF';
    newButton.addEventListener('click', deleteGif);
    newDiv.appendChild(newImg);
    newDiv.appendChild(newButton);
    targetDiv.appendChild(newDiv);
};

const deleteGif = event => {
    let divToRemove = event.target.parentElement;
    divToRemove.remove();
};

document.getElementById('delete-all').addEventListener('click', () => {
    let allGifDivs = document.getElementsByClassName('gif-div');
    for (let i = allGifDivs.length - 1; i >=0 ; i--) {
        allGifDivs[i].remove();
    } 
});


