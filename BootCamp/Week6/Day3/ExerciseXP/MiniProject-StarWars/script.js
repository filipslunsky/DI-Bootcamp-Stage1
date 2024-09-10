const findCharacter = () => {
    const displayLoading = () => {
        let html = `<div class="fa-3x">
        <i class="fa-solid fa-spinner fa-spin-pulse loading-icon"></i>
        <br>
        <p class="loading-message">Loading...</p>
        </div>`;
        document.getElementById('info').innerHTML = html;
    };
    displayLoading();

    let randomInteger = Math.floor(Math.random() * 83) + 1;

    fetch(`https://www.swapi.tech/api/people/${randomInteger}`)
    .then(result => result.json())
    .then(data => {
        const character = data.result.properties;
        const homeworldURL = character.homeworld;

        return Promise.all([
            Promise.resolve(character),
            fetch(homeworldURL).then(res => res.json())
        ]);
    })
    .then(([character, homeworldData]) => {
        render(character.name, character.height, character.gender,character.birth_year, homeworldData.result.properties.name);
    })
    .catch(error => {
        console.log('Error:', error);
        let html = `<p class="error-message">Oh no! This person isn't available.</p>`;
        document.getElementById('info').innerHTML = html;
    });

    const render = (charName, height, gender, birthYear, homeworld) => {
        let html = `<p class="charName">${charName}</p>
            <p class="other-info">Height: ${height}</p>
            <p class="other-info">Gender: ${gender}</p>
            <p class="other-info">Birth year: ${birthYear}</p>
            <p class="other-info">Home World: ${homeworld}</p>`;
        document.getElementById('info').innerHTML = html;
        }
}

findCharacter();

const myButton = document.querySelector('button');
myButton.addEventListener('click', findCharacter);

  

