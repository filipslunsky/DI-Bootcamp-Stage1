list1 = [3, 47, 99, -80, 22, 97, 54, -23, 5, 7]
list2 = [44, 91, 8, 24, -6, 0, 56, 8, 100, 2]
list3 = [3, 21, 76, 53, 9, -82, -3, 49, 1, 76]
list4 = [18, 19, 2, 56, 33, 17, 41, -63, -82, 1]

lists = list1 + list2 + list3 + list4

print(lists)
print(sorted(lists))
print(sum(lists))

first_last = [lists[0], lists[-1]]
print(first_last)

greater_than_50 = []
for i in range(0, len(lists)):
    if lists[i] > 50:
        greater_than_50.append(lists[i])
print(greater_than_50)

smaller_than_10 = []
for i in range(0, len(lists)):
    if lists[i] < 10:
        smaller_than_10.append(lists[i])
print(smaller_than_10)

lists_squared = []
for i in range(0, len(lists)):
    lists_squared.append(lists[i] ** 2)
print(lists_squared)

print(len(lists))

lone_numbers = []
for i in range(0, len(lists)):
    if lists.count(lists[i]) == 1:
        lone_numbers.append(lists[i])
print(lone_numbers)

print(sum(lists)/len(lists))

print(max(lists))

print(min(lists))



