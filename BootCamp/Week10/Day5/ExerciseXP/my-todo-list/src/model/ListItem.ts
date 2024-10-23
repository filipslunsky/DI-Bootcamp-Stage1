import { v4 as uuidv4 } from 'uuid';

export interface ListItemInterface {
    id: string;
    item: string;
    checked: boolean;
}

export class ListItem implements ListItemInterface {
    private _id: string;
    private _item: string;
    private _checked: boolean;
  
    constructor(item: string, checked: boolean = false) {
      this._id = uuidv4();
      this._item = item;
      this._checked = checked;
    }
  
    get id(): string {
      return this._id;
    }

    get item(): string {
      return this._item;
    }
  
    set item(newItem: string) {
      this._item = newItem;
    }
  
    get checked(): boolean {
      return this._checked;
    }
  
    set checked(newChecked: boolean) {
      this._checked = newChecked;
    }
};
