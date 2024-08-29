const tasks = [];
let taskId = 0;

let addButton = document.getElementById("add-button");

addButton.addEventListener("click", addTask);

function addTask(e) {
    let userInput = document.getElementById("newtask");
    e.preventDefault();
    let inputValue = userInput.value.trim();
    if (inputValue !== "") {
    let task = {};
    task.id = taskId;
    taskId++;
    task.text = inputValue;
    task.done = false;
    tasks.push(task);

    let newTaskDiv = document.createElement("div");
    newTaskDiv.id = task.id;
    newTaskDiv.classList.add("task");
    let taskList = document.getElementsByClassName("listTasks")[0];
    taskList.appendChild(newTaskDiv);
    
    let newXButton = document.createElement("button");
    newXButton.classList.add("button-x","red-x-button");
    newXButton.id = task.id;
    newTaskDiv.appendChild(newXButton);
    
    let newIcon = document.createElement("i");
    newIcon.classList.add("fas", "fa-times");
    newIcon.id = task.id;
    newXButton.appendChild(newIcon);
    
    let newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.name = "task-done";
    newCheckbox.classList.add("task-check");
    newCheckbox.id = task.id;
    newCheckbox.addEventListener("change", doneTask)
    newTaskDiv.appendChild(newCheckbox);

    newTaskText = document.createElement("p");
    newTaskText.textContent = inputValue;
    newTaskText.id = task.id;
    newTaskDiv.appendChild(newTaskText);
    
    let newLine = document.createElement("hr");
    newLine.classList.add("blue-line");
    newLine.id = task.id;
    newTaskDiv.appendChild(newLine);
    
    document.querySelector("form").reset();
}
}

function doneTask(e) {
    let taskId = e.target.id;
    let fullTask = document.getElementById(taskId);
    let taskText = fullTask.children[2];
    for (let task of tasks) {
        if (task.id == taskId) {
            task.done = !task.done;
            if (task.done) {
                taskText.classList.add("crossed-out")
            } else {
                taskText.classList.remove("crossed-out")
            }
        }
    }
}

