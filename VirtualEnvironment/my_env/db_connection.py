import psycopg2
import requests
import json

# DB connection
connection = psycopg2.connect(database = 'countries',
                              user = 'postgres',
                              password = '1234',
                              host = 'localhost',
                              port = '5432')

cursor = connection.cursor()

# API connection
countries_api = requests.get('https://restcountries.com/v3.1/all')

data = countries_api.json()

file_name = 'first_country.json'
with open(file_name, 'w') as file:
    json.dump(data[0], file, indent = 2)

