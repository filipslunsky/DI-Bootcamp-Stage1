import { TodoList } from "./todo.js";

let myTodoList = new TodoList();

myTodoList.addTask('feed the cat');
myTodoList.addTask('buy milk');
myTodoList.addTask('code something cool in JS');
myTodoList.addTask('jog 5km');

myTodoList.markComplete('code something cool in JS');
myTodoList.markComplete('jog 5km');

myTodoList.displayTasks();


