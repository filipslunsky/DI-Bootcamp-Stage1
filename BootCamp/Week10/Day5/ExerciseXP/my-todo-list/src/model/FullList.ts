import { ListItem } from './ListItem';

export interface FullListInterface {
  list: ListItem[];
  load(): void;
  save(): void;
  addItem(itemText: string): void;
  removeItem(id: string): void;
  clearList(): void;
}

export class FullList implements FullListInterface {
  private _list: ListItem[] = [];

  get list(): ListItem[] {
    return this._list;
  }

  load(): void {
    const storedList = localStorage.getItem('todoList');
    if (storedList) {
      const parsedList = JSON.parse(storedList);
      this._list = parsedList.map((item: { id: string; item: string; checked: boolean }) => 
        new ListItem(item.item, item.checked)
      );
    }
  }

  save(): void {
    localStorage.setItem('todoList', JSON.stringify(this._list));
  }

  addItem(itemText: string): void {
    const newItem = new ListItem(itemText);
    this._list.push(newItem);
    this.save();
  }

  removeItem(id: string): void {
    this._list = this._list.filter(item => item.id !== id);
    this.save();
  }

  clearList(): void {
    this._list = [];
    localStorage.removeItem('todoList');
  }
};

