const tasks = [];

let addButton = document.getElementById("add-button");

addButton.addEventListener("click", addTask);

function addTask(e) {
    let userInput = document.getElementById("newtask");
    e.preventDefault();
    let inputValue = userInput.value.trim();
    if (inputValue !== "") {
    tasks.push(inputValue)
    
    let newTaskDiv = document.createElement("div");
    newTaskDiv.classList.add("task");
    
    let taskList = document.getElementsByClassName("listTasks")[0];
    taskList.appendChild(newTaskDiv);
    
    let newXButton = document.createElement("button");
    newXButton.classList.add("button-x","red-x-button");
    newTaskDiv.appendChild(newXButton);
    
    let newIcon = document.createElement("i");
    newIcon.classList.add("fas", "fa-times");
    newXButton.appendChild(newIcon);
    
    let newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.name = "task-done";
    newCheckbox.classList.add("task-check");
    newTaskDiv.appendChild(newCheckbox);

    newTaskText = document.createElement("p");
    newTaskText.textContent = inputValue;
    newTaskDiv.appendChild(newTaskText);
    
    let newLine = document.createElement("hr");
    newLine.classList.add("blue-line");
    newTaskDiv.appendChild(newLine);
    
    document.querySelector("form").reset();
}

}