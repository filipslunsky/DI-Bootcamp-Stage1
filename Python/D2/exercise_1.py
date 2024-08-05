list1 = [5, 10, 15, 20, 25, 50, 20]

# while 20 in list1: (another possibility of while condition)
while list1.count(20) != 0:
    list1[list1.index(20)] = 200

print(list1)

list2 = [5, 10, 15, 20, 25, 50, 20]

for i in range(0, len(list2)):
    if list2[i] == 20:
        list2[i] = 200

print(list2)

# the for loop is more efficient here because it goes through the list only once, the while goes through the whole list every time as long as there is 20 in it