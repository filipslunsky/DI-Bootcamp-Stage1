from menu_item import MenuItem
from menu_manager import MenuManager

item_objects = []

def show_user_menu():
    while True:
        choice = input("""
PICK AN OPTION THAT YOU WANT BY TYPING IN A LETTER:
1 - View an Item (v)
2 - Add an Item (a)
3 - Delete an Item (d)
4 - Update an Item (u)
5 - Show the Menu (s)
To exit type (e)
""")
        if choice == "v":
            name = input("What item would you like to see? ")
            items = MenuManager.all_items()
            if name in items:
                print(MenuManager.get_by_name(name))
            else:
                print("sorry, we don't have this item")
        elif choice == "a":
            add_item_to_menu()
        elif choice == "d":
            remove_item_from_menu()
        elif choice == "u":
            update_item_from_menu()
        elif choice == "s":
            show_restaurant_menu()
        elif choice == "e":
            break


def add_item_to_menu():
    name = input("what item would you like to add? ")
    price = int(input("how much should we charge for it?  "))
    new_item = MenuItem(name, price)
    new_item.save()
    item_objects.append(new_item)
    print(f"the item {name} for {price} was successfully added")

def remove_item_from_menu():
    item_names = []
    for item_object in item_objects:
        item_names.append(item_object.name)
    delete_item_name = input("which item would you like to delete?  ")
    if delete_item_name in item_names:
        item_object_index = item_names.index(delete_item_name)
        deleted_item = item_objects[item_object_index]
        deleted_item.delete()
        print(f"{delete_item_name} was successfully deleted")
    else:
        print("we don't have this item on our menu")

def update_item_from_menu():
    item_names = []
    for item_object in item_objects:
        item_names.append(item_object.name)
    update_item_name = input("which item would you like to update?  ")
    new_name = input("what do you want to call it now?  ")
    new_price = int(input("how much would you like to charge for it?  "))
    if update_item_name in item_names:
        item_object_index = item_names.index(update_item_name)
        updated_item = item_objects[item_object_index]
        updated_item.update(new_name, new_price)
        print(f"{update_item_name} was successfully updated")
    else:
        print("we don't have this item on our menu")

def show_restaurant_menu():
    item_list = MenuManager.all_items()
    for item in item_list:
        print(MenuManager.get_by_name(item))


show_user_menu()