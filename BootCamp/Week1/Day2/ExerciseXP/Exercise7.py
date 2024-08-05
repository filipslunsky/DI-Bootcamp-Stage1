# user input converted into a list
fruit_list = input("Tell me your favourite fruits, if there are more, simply separate them with a space: ").split(" ")

fruit = input("What fruit would you like to eat now? ")

if fruit in fruit_list:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy.")