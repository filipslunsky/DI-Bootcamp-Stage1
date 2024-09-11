class TodoList {
    constructor () {
        this.taskList = [];
    }

    addTask(task) {
        let newTask = {
            name: task,
            completed: false
        };
        this.taskList.push(newTask);
    }

    markComplete(task) {
            for (let i = 0; i < this.taskList.length; i++) {
                if (this.taskList[i].name === task) {
                    this.taskList[i].completed = true;
                }
            }
    }

    displayTasks() {
        for (let i = 0; i < this.taskList.length; i++) {
            console.log(`task ${i + 1}: ${this.taskList[i].name}, completed: ${this.taskList[i].completed}`)
        }
    }
}

export { TodoList }