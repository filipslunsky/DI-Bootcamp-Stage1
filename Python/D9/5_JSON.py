# JS objects that are quite similar to Python dictionaries
import json

# Python dictionary
my_family = {"parents": ["Beth", "Jerry"],
             "children": ["Summer", "Morty"]}

json_file = "my_file.json"

with open(json_file, "w") as file_obj:
    json.dump(my_family, file_obj)

print(my_family)
print(json_file)

my_family = {
    "parents" :['Beth', 'Jerry'],
    "children" :['Summer', 'Morty']
}

json_my_family = json.dumps(my_family)
print(json_my_family)