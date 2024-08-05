#Accept a number from the user and print its multiplication table

number = int(input("Give me a number from 1 to 10: "))
multiplication = []

for multiplier in range(0, 11):
    multiplication.append(number * multiplier)

print(multiplication)