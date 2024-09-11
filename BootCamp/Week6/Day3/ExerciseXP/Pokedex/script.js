let pokemonCollection = [];

const findBasicInfo = async () => {
    let randomInt = Math.floor(Math.random() * 1025) + 1;
    try {
        let result = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${randomInt}/`);
        // let result = await fetch(`https://pokeapi.co/api/v2/pokemon-form/25/`);
        let data = await result.json();
        return data;
    } catch (error) {
        console.log(error);
    }

};


const catchPokemon = async () => {
    let mainPokemonObj = await findBasicInfo();
    // console.log(mainPokemonObj);
    // console.log(mainPokemonObj.name);
    // console.log(mainPokemonObj.id);
    // console.log(mainPokemonObj.sprites.front_default);
    // console.log(mainPokemonObj.types[0].type.name);
    let moreInfoObj = await getMoreInfo(mainPokemonObj.pokemon.url);
    // console.log(moreInfoObj.height);
    // console.log(moreInfoObj.weight);
    let resultInfoObject = {
        name: mainPokemonObj.name,
        number: mainPokemonObj.id,
        picture: mainPokemonObj.sprites.front_default,
        type: mainPokemonObj.types[0].type.name,
        weight: moreInfoObj.weight,
        height: moreInfoObj.height
    }
    // console.log(resultInfoObject);
    return resultInfoObject;
};


const getMoreInfo = async (url) => {
    let result = await fetch(url);
    let data = await result.json();
    // console.log(data);
    return data;
};


const processPokemon = async () => {
    let pokemon = await catchPokemon();
    pokemonCollection.push(pokemon);
    // console.log(pokemon);
    // console.log(pokemonCollection);
    renderPokemon(pokemon);
}

const renderPokemon = async (pokemon) => {
    let html = `<p id="name">${capitalizeFirstLetter(pokemon.name)}</p>
        <p class="additional">Pokemon n°${pokemon.number}</p>
        <p class="additional">Height: ${pokemon.height}cm</p>
        <p class="additional">Weight: ${pokemon.weight}g</p>
        <p class="additional">Type: ${pokemon.type}</p>`;
    document.getElementById('info').innerHTML = html;
    document.getElementById('picture').src = pokemon.picture;
}

document.getElementById('get').addEventListener('click', processPokemon);

let currentPosition = pokemonCollection.length;

const moveLeft = () => {
    if (currentPosition === 0) {
        currentPosition = pokemonCollection.length;
    }
    currentPosition -= 1;
    // console.log(currentPosition);
    renderPokemon(pokemonCollection[currentPosition]);
}

const moveRight = () => {
    if (currentPosition === pokemonCollection.length - 1) {
        currentPosition = -1;
    }
    currentPosition += 1;
    // console.log(currentPosition);
    renderPokemon(pokemonCollection[currentPosition]);
}

document.getElementById('left').addEventListener('click', moveLeft);
document.getElementById('right').addEventListener('click', moveRight);

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}