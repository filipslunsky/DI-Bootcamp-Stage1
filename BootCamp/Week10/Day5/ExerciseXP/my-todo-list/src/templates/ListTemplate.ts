import { FullList } from "../model/FullList";

export interface ListTemplateInterface {
  render(fullList: FullList): void;
  clear(): void;
}

export class ListTemplate implements ListTemplateInterface {
  private ul: HTMLUListElement;

  static instance: ListTemplate = new ListTemplate();

  private constructor() {
    this.ul = document.getElementById("todo-list") as HTMLUListElement;
  }

  clear(): void {
    this.ul.innerHTML = "";
  }

  render(fullList: FullList): void {
    this.clear();

    fullList.list.forEach(item => {
      const li = document.createElement("li") as HTMLLIElement;
      li.className = "list-group-item d-flex justify-content-between align-items-center";

      const checkbox = document.createElement("input") as HTMLInputElement;
      checkbox.type = "checkbox";
      checkbox.id = item.id;
      checkbox.checked = item.checked;
      checkbox.className = "form-check-input me-2";

      checkbox.addEventListener("change", () => {
        item.checked = checkbox.checked;
        fullList.save();
      });

      const label = document.createElement("label") as HTMLLabelElement;
      label.htmlFor = item.id;
      label.textContent = item.item;
      label.className = checkbox.checked ? "text-decoration-line-through" : "";

      const button = document.createElement("button") as HTMLButtonElement;
      button.className = "btn btn-danger btn-sm";
      button.textContent = "Delete";

      button.addEventListener("click", () => {
        fullList.removeItem(item.id);
        this.render(fullList);
      });

      li.append(checkbox, label, button);

      this.ul.appendChild(li);
    });
  }
}
