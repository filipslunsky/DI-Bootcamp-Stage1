# 1 -  given lists - storing in variables
list1 = [3, 47, 99, -80, 22, 97, 54, -23, 5, 7]
list2 = [44, 91, 8, 24, -6, 0, 56, 8, 100, 2]
list3 = [3, 21, 76, 53, 9, -82, -3, 49, 1, 76]
list4 = [18, 19, 2, 56, 33, 17, 41, -63, -82, 1]

# 2a) - printing lsits on a single line
lists = list1 + list2 + list3 + list4

print(lists)

# 2b) - sorting list in ascending order
print(sorted(lists))

# 2c) - summing all the numbers
print(sum(lists))

# 3 - printing the first and the last number
first_last = [lists[0], lists[-1]]
print(first_last)

# 4 - listing all the numbers greater than 50
greater_than_50 = []
for i in range(0, len(lists)):
    if lists[i] > 50:
        greater_than_50.append(lists[i])
print(greater_than_50)

# 5 - lisitng all the numbers smaller than 10
smaller_than_10 = []
for i in range(0, len(lists)):
    if lists[i] < 10:
        smaller_than_10.append(lists[i])
print(smaller_than_10)

# 6 - listing all the square roots
lists_squared = []
for i in range(0, len(lists)):
    lists_squared.append(lists[i] ** 2)
print(lists_squared)

print(len(lists))

# 7 - getting only the numbers that occur exactly once in the list
lone_numbers = []
for i in range(0, len(lists)):
    if lists.count(lists[i]) == 1:
        lone_numbers.append(lists[i])
print(lone_numbers)

# 8 - getting the average value of the list
print(sum(lists)/len(lists))

# 9 - finding the highest value in the list
print(max(lists))

# 10 - finding the lowest value in the list
print(min(lists))

# 11 - Bonus: Find the sum, average, largest and smallest number without using built in functions.
# summing the list without using sum() in order to divide by its length to get average value
total = 0
for i in range(0, len(lists)):
    total += lists[i]
print(total/len(lists))

# finding the largest number on the list without using max()

max_value = 0
for i in range(0, len(lists)):
    if lists[i] > max_value:
        max_value = lists[i]
print(max_value)

# finding the lowes number withou using min()
min_value = 0
for i in range(0, len(lists)):
    if lists[i] < min_value:
        min_value = lists[i]
print(min_value)

# 12.Bonus: Instead of using pre-defined lists of numbers, ask the user for 10 numbers between -100 and 100. Ask the user for an integer between -100 and 100 – repeat this question 10 times. Each number should be added into a variable that you created earlier.
user_list = []
for i in range(0, 10):
    user_list.append(int(input("enter a whole number between -100 and 100: ")))
print(user_list)

# 13 - Bonus: Instead of asking the user for 10 integers, generate 10 random integers yourself. Make sure that these random integers are between -100 and 100.
import random
random_list = []
for i in range(0, 10):
    random_list.append(random.randint(-100, 100))
print(random_list)

# 14.Bonus: Instead of always generating 10 integers, let the amount of integers also be random! Generate a random positive integer no smaller than 50.
random_list2 = []
for i in range(0, random.randint(50, 300)):
    random_list2.append(random.randint(-100, 100))
print(random_list2)

# 15.Bonus: Will the code work when the number of random numbers is not equal to 10?
# since all the code written above works with len(lists), it doesn't depend on a preset length of the list, e.g. summing values is calculated below, as well as max_value without using preset functions
# summing value of the random list
total_random_list2 = 0
for i in range(0, len(random_list2)):
    total_random_list2 += random_list2[i]
print(total_random_list2/len(random_list2))

# max value
max_random_list2 = 0
for i in range(0, len(random_list2)):
    if random_list2[i] > max_random_list2:
        max_random_list2 = random_list2[i]
print(max_random_list2)
