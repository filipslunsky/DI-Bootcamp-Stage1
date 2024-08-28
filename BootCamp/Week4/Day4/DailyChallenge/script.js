let myForm = document.getElementById("libform");
let myButton = document.getElementById("lib-button");
let myStory = document.getElementById("story");

myButton.addEventListener("click", function(e) {
    console.log("clicked")
    e.preventDefault()
    let noun = document.getElementById("noun").value.trim();
    let adjective = document.getElementById("adjective").value.trim();
    let person = document.getElementById("person").value.trim();
    let verb = document.getElementById("verb").value.trim();
    let place = document.getElementById("place").value.trim();
    
    if (noun == "") {
        alert("please fill out the noun")
        return;
    };
    if (adjective == "") {
        alert("please fill out the adjective")
        return;
    };
    if (person == "") {
        alert("please fill out the person")
        return;
    };
    if (verb == "") {
        alert("please fill out the verb")
        return;
    };
    if (place == "") {
        alert("please fill out the place")
        return;
    };
    let storyText1 = `Once upon a time, in a ${adjective} land far, far away, there was a ${noun} named ${person} who loved to ${verb}. Every day, ${person} would travel to the ${place} to find the most ${adjective} ${noun}. One day, while wandering around the ${place}, ${person} stumbled upon a magical ${noun}. It promised to grant one wish, but only if you could answer the riddle: "What is the funniest thing in the ${place}?" ${person} thought long and hard, and then it hit them. With a gleam in their eye, they shouted, "A ${adjective} ${noun} wearing a ${adjective} hat! "The magical ${noun} was so impressed with the answer that it granted ${person} a lifetime supply of ${noun}. And from that day on, every time ${person} walked into the ${place}, they couldn not help but laugh at the memory of their funny wish.`;

    myStory.textContent = storyText1;

    // BONUS PART
    let shuffleButton = document.createElement("button");
    shuffleButton.textContent = "SHUFFLE STORIES";
    let bodyElement = document.querySelector("body");
    bodyElement.appendChild(shuffleButton);
    shuffleButton.addEventListener("click", function () {
        let storyText2 = `In a ${adjective} ${place}, a ${noun} named ${person} decided to ${verb}. The ${noun} was so ${adjective} that everyone couldn't stop laughing!`;

        myStory.textContent = storyText2;

        shuffleButton.addEventListener("click", function () {
            let storyText3 = `On a ${adjective} morning in ${place}, ${person} went to the local ${noun} to ${verb}. While there, they found a ${adjective} ${noun} that could talk! The ${noun} said, "If you ${verb} with me, I'll grant you a ${noun}!" So, ${person} decided to ${verb} and ended up with a magical ${noun}.`;

            myStory.textContent = storyText3;

            shuffleButton.addEventListener("click", function () {
                let storyText4 = `At the ${place}, ${person} discovered a ${adjective} ${noun}. It was so ${adjective} that it made everyone ${verb}. They decided to use the ${noun} to throw a big ${noun} party. By the end of the day, ${person} was the happiest ${noun} in town!`;

                myStory.textContent = storyText4;

                shuffleButton.addEventListener("click", function () {
                    myStory.textContent = "Sorry, we have run out of stories:-)";
                    shuffleButton.remove()
                    myForm.reset();
                })
            })
        })

    })



});