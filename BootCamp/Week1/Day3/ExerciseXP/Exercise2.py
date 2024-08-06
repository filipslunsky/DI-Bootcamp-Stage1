# given object
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

# extracting keys to loop through the dictionary to get the ages
family_names = family.keys()

# creating a list of prices depending on the age conditions
price_list = []

for key in family_names:
    if family[key] < 3:
        price_list.append(0)
    elif family[key] >= 3 and family[key] <= 12:
        price_list.append(10)
    elif family[key] > 12:
        price_list.append(15)

print(price_list)

# single prices are assigned back to individual family memebers for better understanding who pays how much
prices_assigned = dict(zip(family_names, price_list))

print(prices_assigned)

# getting the total costs for the family
total_costs = sum(price_list)
print(total_costs)

# bonus - creating a dictionary from user input
new_family = {}
print("Input the name and the age of the family memeber. When you are done, simply type in 'done'.")
while True:
    name = input("What is the name? ").strip()
    if name == "done":
        break
    age = input("What is his/her age? ").strip()
    try:
        age = int(age)
        new_family[name] = age
    except ValueError:
        print("There has been a problem, please try again.")

print(new_family)
