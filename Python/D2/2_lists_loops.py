list1 = [5, 10, 15, 20, 25, 50, 20]

# looping by index
# we want to do so mainly to have access to the memory
# for reasons: changing the values inside etc.

for i in range(0, len(list1)):
    print(list1[i])

for i in range(0, len(list1)):
    print(list1[i] * 10)