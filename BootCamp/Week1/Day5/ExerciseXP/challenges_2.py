# 1 Exercise 1
# n = 3

# for i in range(0, n):
#     print(" " * (n - i - 1), end = "")
#     print("*" * (2 * i + 1))

# n = 5
# for i in range(0, n):
#     spaces = " " * (n - i - 1)
#     stars = "*" * (i + 1)
#     print(spaces + stars)

# n = 5
# for i in range(0, n):
#     stars = "*" * (i + 1)
#     print(stars)
# for i in range(0, n):
#     spaces = " " * i
#     stars = "*" * (n - i)
#     print(spaces + stars)

# Exercise 2
# script for sorting numbers from smallest to the highest
my_list = [2, 24, 12, 354, 233]
for i in range(len(my_list) - 1):
    minimum = i
    for j in range( i + 1, len(my_list)):
        if(my_list[j] < my_list[minimum]):
            minimum = j
            if(minimum != i):
                my_list[i], my_list[minimum] = my_list[minimum], my_list[i]
print(my_list)