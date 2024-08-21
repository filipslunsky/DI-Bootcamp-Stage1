# 4. In the file menu_manager.py, create a new class called MenuManager
#       1. Create a Class Method called get_by_name that will return a single item from the Menu_Items table depending on it’s name, if an object is not found (there is no item matching the name in the get_by_name method) return None.
#       2. Create a Class Method called all_items which will return a list of all the items from the Menu_Items table.

import psycopg2
from dotenv import load_dotenv
import os

load_dotenv()

DB_NAME = os.getenv('DB_NAME')
DB_HOST = os.getenv('DB_HOST')
DB_USER = os.getenv('DB_USER')
DB_PASSWORD = os.getenv('DB_PASSWORD')
DB_PORT = os.getenv('DB_PORT')

class MenuManager:
    @classmethod
    def get_by_name(cls, name):
        connection = psycopg2.connect(
            database=DB_NAME,
            user=DB_USER,
            password=DB_PASSWORD,
            host=DB_HOST,
            port=DB_PORT
        )
        cursor = connection.cursor()
        query = f"SELECT item_id, item_name, item_price FROM Menu_Items WHERE item_name = '{name}'"
        cursor.execute(query)

        result = cursor.fetchone()
        if result:
            item_id, item_name, item_price = result
            return f"item_name: {item_name}, item_price: {item_price}"
        else:
            return None
        
    @classmethod
    def all_items(cls):
        items = []
        connection = psycopg2.connect(
            database=DB_NAME,
            user=DB_USER,
            password=DB_PASSWORD,
            host=DB_HOST,
            port=DB_PORT
        )
        cursor = connection.cursor()
        query = "SELECT item_name, item_price FROM Menu_Items"
        cursor.execute(query)
        results = cursor.fetchall()
        for result in results:
            item_name, item_price = result
            items.append(item_name)
        return items


if __name__ == '__main__':
    print(MenuManager.get_by_name('shawarma'))
    print(MenuManager.all_items())