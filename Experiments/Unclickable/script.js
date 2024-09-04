const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");

yesButton.addEventListener("click", function () {
    yesButton.remove();
    noButton.remove();
    document.querySelector("h1").remove();
    document.getElementById("answer").textContent = "I knew it, let us do it;-)";
    
});

noButton.addEventListener("mouseover", function () {
    noButton.style.position = "absolute";
    const randomInt1 = Math.floor(Math.random() * 500);
    const randomInt2 = Math.floor(Math.random() * 1100);
    noButton.style.top = `${randomInt1 + 30}px`;
    noButton.style.left = `${randomInt2 + 60}px`;
});

noButton.addEventListener("click", function () {
    yesButton.remove();
    noButton.remove();
    document.querySelector("h1").remove();
    document.getElementById("answer").textContent = "Come ooooon...";
});