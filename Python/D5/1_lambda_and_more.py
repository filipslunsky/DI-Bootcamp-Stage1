# lambda is a more complex way of writing a function
# connected to .map() .filter() and .reduce()

fruits = ["Apple", "Banana", "Pear", "Apricot"]

# regular but not so effective way
fruits_upper = []
for fruit in fruits:
    fruits_upper.append(fruit.upper())

print(fruits_upper)

# using .map() without lambda
def upper_string(s):
    return s.upper()

fruits_upper_mapped = list(map(upper_string, fruits))

print(fruits_upper_mapped)


# using .map() with lambda (better to use for simple functions, if it is more complex, it is hrad to read)
fruits_upper_mapped_lambda = list(map(lambda fruit: fruit.upper(), fruits))
print(fruits_upper_mapped_lambda)

# lambda example 2

numbers = [1, 4, 3, 2, 5, 6]
numbers_squared = list(map(lambda number: number ** 2, numbers))

print(numbers_squared)

powered = lambda n, power : n ** power
print(powered(4,5))

# filter

def starts_with_A(s):
    return s[0] == "A"

starts_A = list(filter(starts_with_A, fruits))
print(starts_A)

# reduce (needs to be imported from functools)
from functools import reduce

def sum_numbers(first, second):
    return first + second

my_list = [1, 3, 5, 6, 19]
reduced_list = reduce(sum_numbers, my_list)
print(reduced_list)