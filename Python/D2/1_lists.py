a_list = [1,2,3,4,5,6,7]

# ACCESS
# a_list[0] - first value
# a_list[-1] - last value
# a_list[-2] - second last value

# a_list[0:3] - [1,2,3]
# a_list[:3] - [1,2,3]
# a_list[4:] - [5,6,7]
# a_list[-3] - [5,6,7]

# print(a_list[-1::-1]) # reversing th list
# print(a_list.reverse()) # the same thing with a function

a_list.append(8)
print(a_list)

a_list.reverse()
print(a_list)