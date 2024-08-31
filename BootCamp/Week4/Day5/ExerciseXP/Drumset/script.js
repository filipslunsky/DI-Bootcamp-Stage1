// play functions and click events on div elements
function playBoom() {
    let boom = document.getElementById("boom");
    boom.play();    
}

let boomDiv = document.getElementById("boom-play");
boomDiv.addEventListener("click", playBoom);


function playClap() {
    let clap = document.getElementById("clap");
    clap.play();    
}

let clapDiv = document.getElementById("clap-play");
clapDiv.addEventListener("click", playClap);


function playHihat() {
    let hihat = document.getElementById("hihat");
    hihat.play();    
}

let hihatDiv = document.getElementById("hihat-play");
hihatDiv.addEventListener("click", playHihat);


function playKick() {
    let kick = document.getElementById("kick");
    kick.play();    
}

let kickDiv = document.getElementById("kick-play");
kickDiv.addEventListener("click", playKick);


function playOpenhat() {
    let openhat = document.getElementById("openhat");
    openhat.play();    
}

let openhatDiv = document.getElementById("openhat-play");
openhatDiv.addEventListener("click", playOpenhat);


function playRide() {
    let ride = document.getElementById("ride");
    ride.play();    
}

let rideDiv = document.getElementById("ride-play");
rideDiv.addEventListener("click", playRide);


function playSnare() {
    let snare = document.getElementById("snare");
    snare.play();    
}

let snareDiv = document.getElementById("snare-play");
snareDiv.addEventListener("click", playSnare);


function playTink() {
    let tink = document.getElementById("tink");
    tink.play();    
}

let tinkDiv = document.getElementById("tink-play");
tinkDiv.addEventListener("click", playTink);


function playTom() {
    let tom = document.getElementById("tom");
    tom.play();    
}

let tomDiv = document.getElementById("tom-play");
tomDiv.addEventListener("click", playTom);



// keyboard press events
document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(event) {
    if (event.key === "a" || event.key === "A") {
        playBoom();
    } else if (event.key === "s" || event.key === "S") {
        playClap();
    } else if (event.key === "d" || event.key === "D") {
        playHihat();
    } else if (event.key === "f" || event.key === "F") {
        playKick();
    } else if (event.key === "g" || event.key === "G") {
        playOpenhat();
    } else if (event.key === "h" || event.key === "H") {
        playRide();
    } else if (event.key === "j" || event.key === "J") {
        playSnare();
    } else if (event.key === "k" || event.key === "K") {
        playTink();
    } else if (event.key === "l" || event.key === "L") {
        playTom();
    }
}
