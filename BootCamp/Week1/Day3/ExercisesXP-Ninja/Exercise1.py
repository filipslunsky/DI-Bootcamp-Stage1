# 1 .Copy the following string into your code: "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet".
cars = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

# 2. Convert it into a list using Python (don’t do it by hand!).
cars = cars.split(", ")
print(cars)

# 3. Print out a message saying how many manufacturers/companies are in the list.
print(f"There are {len(cars)} brands in our list.")

# 4. Print the list of manufacturers in reverse/descending order (Z-A).
print(sorted(cars, reverse = True))

# 5.Using loops or list comprehension:
    # 1. Find out how many manufacturers’ names have the letter ‘o’ in them.
cars_with_letter_o = []

for i in range(0, len(cars)):
    if "o" in cars[i]:
        cars_with_letter_o.append(cars[i])
print(cars_with_letter_o)

    # 2. Find out how many manufacturers’ names do not have the letter ‘i’ in them.
cars_without_letter_i = []

for i in range(0, len(cars)):
    if "i" not in cars[i]:
        cars_without_letter_i.append(cars[i])
print(cars_without_letter_i)

# Bonus: There are a few duplicates in this list:["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
    # Remove these programmatically.
cars_2 = ["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
cars_2_unique = []

for i in range(0, len(cars_2)):
    if cars_2[i] not in cars_2_unique:
        cars_2_unique.append(cars_2[i])

# Print out the companies without duplicates, in a comma-separated string with no line-breaks (eg. “Acura, Alfa Romeo, Aston Martin, …”), also print out a message saying how many companies are now in the list.

cars_2_string = ""
for i in range(0, len(cars_2_unique)):
    cars_2_string += cars_2_unique[i]
    if i != len(cars_2_unique) - 1:
        cars_2_string += ", "

print(f"We have {len(cars_2_unique)} companies. Here they are: {cars_2_string}.")

# 7. Bonus: Print out the list of manufacturers in ascending order (A-Z), but reverse the letters of each manufacturer’s name.

cars_2_reversed = sorted(cars_2_unique, reverse = False)

cars_reversed_letters = []
for i in range(0, len(cars_2_reversed)):
    car = cars_2_reversed[i]
    car = car[::-1]
    cars_reversed_letters.append(car)

print(cars_reversed_letters)




