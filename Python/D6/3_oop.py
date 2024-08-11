class Item:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity
    
    def update_quantity(self, amount):
        self.quantity += amount
    
    def calculate_total_value(self):
        return self.price * self.quantity
    
    def __repr__(self):
        return f"Item ('{self.name}', '{self.price}', '{self.quantity}')"

class Inventory:
    def __init__(self):
        self.items = []
    def add_item(self, item):
        print(f"Added {item.name} to inventory")
    def remove_item(self, item_name):
        self.items = [item for item in self.items if item.name != item_name]
        print(f"Removed {item_name} from inventory.")
    def get_inventory_value(self):
        values = [item.calculate_total_value() for item in self.items]
        print(f"Inventory value: {sum(values)}")
        return sum(values)
    def __repr__(self):
        return "\n".join(str(item) for item in self.items) # str is another way to call repr function within the class
    
item1 = Item("Bananas", 1, 10)
item2 = Item("Peaches", 2, 5)

inventory = Inventory()
inventory.add_item(item1)
inventory.add_item(item2)
inventory.get_inventory_value()
print(inventory)
inventory.remove_item("Bananas")
inventory.get_inventory_value()
print(inventory)
