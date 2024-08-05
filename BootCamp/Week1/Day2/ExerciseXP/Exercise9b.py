# visitor input converted into a list
visitor_list = input("Tell us the first names of your group please, separate them with a space: ").split(" ")

# age checking and creating restricted list
restricted_list = []

for i in range(0, len(visitor_list)):
    name = visitor_list[i]
    age = int(input(f"How old are you, {name}? "))
    if age >= 16 and age <= 21:
        print("We are sorry but you cannot watch this movie.")
        restricted_list.append(name)
    else:
        print("Enjoy your movie")

# removing people who are on the resticted_list from the original visitor_list and showing the result
for i in range(0, len(restricted_list)):
    visitor_list.remove(restricted_list[i])

print(visitor_list)