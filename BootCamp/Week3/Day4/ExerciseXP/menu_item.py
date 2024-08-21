# 2. In the file menu_item.py, create a new class called MenuItem, the attributes should be the name and price of each item.
# 3. Create several methods (save, delete, update) these methods will allow a user to save, delete and update items from the Menu_Items table. The update method can update the name as well as the price of an item.
import psycopg2
from dotenv import load_dotenv
import os

load_dotenv()

DB_NAME = os.getenv('DB_NAME')
DB_HOST = os.getenv('DB_HOST')
DB_USER = os.getenv('DB_USER')
DB_PASSWORD = os.getenv('DB_PASSWORD')
DB_PORT = os.getenv('DB_PORT')

class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price
        self.connection = psycopg2.connect(database = DB_NAME,
                              user = DB_USER,
                              password = DB_PASSWORD,
                              host = DB_HOST,
                              port = DB_PORT)
        self.cursor = self.connection.cursor()
        self.item_id = 0
    
    def save(self):
        query = f'''INSERT INTO Menu_Items 
    (item_name, item_price) 
    VALUES ('{self.name}', '{self.price}')'''
        self.cursor.execute(query)
        self.connection.commit()
        id_query = f"SELECT item_id FROM Menu_Items WHERE item_name = '{self.name}' AND item_price = {self.price}"
        self.cursor.execute(id_query)
        self.item_id = self.cursor.fetchone()[0]
    
    def update(self, new_name, new_price):
        query = f"UPDATE Menu_Items SET item_name = '{new_name}', item_price = '{new_price}' WHERE item_id = '{self.item_id}'"
        self.cursor.execute(query)
        self.connection.commit()

    def delete(self):
        query = f"DELETE FROM Menu_Items WHERE item_id = '{self.item_id}'"
        self.cursor.execute(query)
        self.connection.commit()

if __name__ == '__main__':    
    my_item = MenuItem("hamburger", 20)
    print(my_item.name)
    print(my_item.price)
    print(my_item.item_id)

    my_item.save()
    my_item.update("cheeseburger", 23)
