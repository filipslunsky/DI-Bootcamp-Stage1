toppings = []
choice = input("What do you want on your pizza? After you are done, type in 'quit'. ")

while choice != "quit":
    toppings.append(choice)
    print(f"We added {choice} to your pizza.")
    choice = input("What else shall we add on your pizza? After you are done, type in 'quit'. ")

print(f"Working on your order, the total price for your pizza is {10 + 2.5 * len(toppings)} dollars.")
