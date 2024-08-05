# User input
number = int(input("Please enter a number you want to be multiplied: "))
length = int(input("How many multiplications would you like? "))

result = []
for i in range(0, length):
    i += 1
    result.append(i * number)

print(result)