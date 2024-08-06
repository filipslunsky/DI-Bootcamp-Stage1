number = int(input("enter a number to find out if it is perfect or not: "))

dividers = []
for i in range(1, number):
    if number % i == 0:
        dividers.append(i)

is_perfect_number = number == sum(dividers)

print(is_perfect_number)
