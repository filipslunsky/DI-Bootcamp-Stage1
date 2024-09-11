const bringPokemon = async () => {
    
    try {
        let result = await fetch('https://pokeapi.co/api/v2/pokemon-form/1025/'); // 1 - 1025
        let data = await result.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

const getPokemon = async () => {
    let pokemonData = await bringPokemon();
    console.log(pokemonData);
};

getPokemon();