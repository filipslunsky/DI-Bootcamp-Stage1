let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", function(e) {
    e.preventDefault();
    let firstName = document.getElementById("first-name").value.trim();
    let lastName = document.getElementById("last-name").value.trim();

    let newObject = {
        name: firstName,
        lastname: lastName
    };

    let newObjectJson = JSON.stringify(newObject);

    let textDiv = document.getElementById("json-data");
    
    let newParagraph = document.createElement("p");
    newParagraph.textContent = newObjectJson;
    textDiv.appendChild(newParagraph);
    
    document.querySelector("form").reset();
});
