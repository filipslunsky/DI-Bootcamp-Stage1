# Group Ticket Sectipn
number_of_people = int(input("How many people want a ticket? "))
counter = 1
price_list = []

while counter <= number_of_people:
    age = int(input(f"What is the age of the person number {counter}? "))
    if age < 3:
        price_list.append(0)
    elif age >= 3 and age <= 12:
        price_list.append(10)
    elif age > 12:
        price_list.append(15)
    else:
        print("Not a real age. ")
    counter += 1

total_price = 0

for i in range(0, len(price_list)):
    total_price += price_list[i]

print(f"The total price for yor tickets is {total_price} dollars.")

