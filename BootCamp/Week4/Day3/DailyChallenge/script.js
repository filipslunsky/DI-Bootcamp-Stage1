const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

let mySection = document.querySelector("section");
const colors = ["darkGray", "yellow", "lightBlue", "red", "orange", "gold", "blue", "darkblue"];

for (let i = 0; i < planets.length; i++) {          
    let planet = document.createElement("div");     
    planet.setAttribute("class", "planet");
    planet.style.backgroundColor = colors[i];       
    mySection.appendChild(planet)                   
}


// BONUS PART - planets and moons
const planetarySytems = [
    ["Mercury"],
    ["Venus"],
    ["Earth", "Moon"],
    ["Mars", "Phobos", "Deimos"],
    ["Jupiter", "Io", "Europa", "Ganymede", "Callisto"],
    ["Saturn", "Titan", "Enceladus", "Mimas", "Dione", "Rhea"],
    ["Uranus", "Miranda", "Ariel", "Umbriel", "Titania", "Oberon"],
    ["Neptune", "Triton", "Nereid", "Proteus"]
  ];

for (let j = 0; j < 8; j++) {
    for (let i = 0; i < planetarySytems[j].length; i++) {
        if (i === 0) {
            let planet = document.createElement("div");
            planet.setAttribute("class", "planet");
            mySection.appendChild(planet);
            planet.style.backgroundColor = colors[j];
        } else {
            let moon = document.createElement("div");
            moon.setAttribute("class", "moon");
            mySection.appendChild(moon)
        }
    }
}