import json

json_file = "file.json"

with open(json_file, "r") as file_obj:
    my_family =  json.load(file_obj)


children = my_family["children"]
for child in children:
    print(f"name: {child['firstName']}, age: {child['age']}")

alice = children[0]
bob = children[1]

alice["favorite_color"] = "blue"
bob["favorite_color"] = "green"

json_file = "file2.json"

with open(json_file, 'w') as file_obj:
    json.dump(my_family, file_obj, indent = 4)
  