const chooseSide = (e) => {
    let chosenSide = e.target.textContent;
    console.log(chosenSide);
    document.getElementById("choice").style.display = 'none';
    return chosenSide;
    
};

document.getElementById("cross-choice").addEventListener("click", chooseSide);
document.getElementById("circle-choice").addEventListener("click", chooseSide);