# removing stuff from dictionaries

a_dict = {
    "A": 1,
    "B": 2,
    "C": 3
}

print(a_dict)

number = a_dict.pop("C")

print(a_dict)

print(number)

last_item = a_dict.popitem() # removes last item and if saved, returns a tuple

print(last_item)

print(a_dict)

del a_dict["A"] # deletes the specified key and its value, unlike pop() it doesn't move it somewhere else

print(a_dict)
