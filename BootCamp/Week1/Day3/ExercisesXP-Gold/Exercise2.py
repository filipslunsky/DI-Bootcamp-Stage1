birthdays = {"Jimmy": "1973/03/14",
             "Jane": "1980/07/12",
             "Mark": "1982/12/03",
             "Avi": "1985/01/25",
             "Tanya": "1990/11/20"
             }
print("We know the birth dates of the following people.")

for key in birthdays:
    print(key)

name = input("Whose date of birth would you like to know? ")

if name not in birthdays:
    print(f"Sorry, we don't have the birthday information for {name}")
else:
    birthday = birthdays[name]
    print(f"{name} was born on {birthday}.")