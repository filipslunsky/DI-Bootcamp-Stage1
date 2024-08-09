import random

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]
target_number   = 3728

sum_couples = 0

for number in list_of_numbers:
    difference = target_number - number
    for i in range(0, len(list_of_numbers)):
        if difference == list_of_numbers[i]:
            sum_couples += 1

sum_couples = sum_couples / 2
print(sum_couples)
