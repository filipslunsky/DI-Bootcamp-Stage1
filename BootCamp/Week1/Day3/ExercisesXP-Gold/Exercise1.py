birthdays = {"Jimmy": "1973/03/14",
             "Jane": "1980/07/12",
             "Mark": "1982/12/03",
             "Avi": "1985/01/25",
             "Tanya": "1990/11/20"
             }

print("Welcome to our birthday DB.")
print("You can look up the birthdays of the people in the list!")

name = input("Whose birthday would you like to know? ")
birthday = birthdays[name]

print(f"{name} was born on {birthday}.")

