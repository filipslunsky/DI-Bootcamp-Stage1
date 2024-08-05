# printing numbers 1 - 20 into the console
for i in range(1, 21):
    print(i)

# printing only even numbers
for i in range(0, 20):
    if i % 2 == 0:
        print(i)

# creating a list of all numbers from 1 - 20 and printing the list into the console
numbers = []
for i in range(1, 21):
    numbers.append(i)

print(numbers)

# printing only numbers with even index from the numbers list which results only in odd numbers between 1 - 20
for i in range(0, 20):
    if i % 2 == 0:
        print(numbers[i])