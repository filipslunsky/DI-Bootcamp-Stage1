# modifying dictionaries
a_dict = {}

# adding to dictionary

a_dict["Address"] = "Tel Aviv"

print(a_dict["Address"])

age = 32
a_dict["Age"] = age

new_key = 100
new_value = 2000
a_dict[new_key] = new_value

print(a_dict)

# adding to an existing key

a_dict["Age"] = 40 # overwrites the previous value

print(a_dict)

a_dict["Numbers"] = [1, 2, 3, 4, 5]

print(a_dict)

numbers = a_dict["Numbers"] # "numbers" are a reference to the value inside the numbers key, IT IS NOT A COPY!!!

numbers[0] = 100

print(a_dict)

numbers_copy = a_dict["Numbers"].copy()

numbers_copy[0] = 34567898765

print(numbers_copy)
print(a_dict)

