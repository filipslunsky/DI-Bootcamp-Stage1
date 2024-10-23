import 'bootstrap/dist/css/bootstrap.min.css';
import { FullList } from './model/FullList';
import { ListTemplate } from './templates/ListTemplate';

const fullList = new FullList();
const listTemplate = ListTemplate.instance;

fullList.load();
console.log(fullList);

listTemplate.render(fullList);

const form = document.getElementById("todo-form") as HTMLFormElement;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.getElementById("todo-input") as HTMLInputElement;
  const itemText = input.value.trim();

  if (itemText) {
    fullList.addItem(itemText);
    listTemplate.render(fullList);
    input.value = "";
  }
});

const clearButton = document.getElementById("clear-button") as HTMLButtonElement;

clearButton.addEventListener("click", () => {
  fullList.clearList();
  listTemplate.render(fullList);
});


