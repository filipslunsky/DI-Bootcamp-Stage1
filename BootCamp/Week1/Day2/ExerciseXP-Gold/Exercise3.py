names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

username = input("What is your name? ")

if username in names:
    print(names.index(username))
else:
    print("You are not on the list.")
