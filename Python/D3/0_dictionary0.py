# Dictionaries - data set, stores keys and values
# they use keys insted of indexes
# they are delcared with curly braces, (like a set but if we declare them as empty, it is presumed, it is a dictionary)
# keys must also be unique

a_dict = {"Dog": "Human best friends",
          1: 1022
          }
        # key: value
        # key has to be immutable (int, string, tuple)
        # value is accessed through a key
        # value can be any type of data

print(a_dict["Dog"])

print(a_dict.keys())
print(a_dict.values())

# when I want to loop through a dictionary, I have tu use key instead of i

for key in a_dict:
    print(key)
    print(a_dict[key])

for value in a_dict.values(): # ůooping through the dictionary values
    print(value)

# looping through the keys and values at the same time
for key, value in a_dict.items():
    print(f"key: {key}, value: {value}")

