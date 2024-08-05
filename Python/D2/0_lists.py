# sometimes we need a set of data to be in the same memory slot - enter data collection
# list (arrays) - data collection that can hold any type of data, in other languages lists are fairly the samething as arrays
# to hold values inside, we use indexing (0 ... n)
# lists are mutable, i.e. they can be changed

a_list = [] # a list

print(type(a_list)) # type() - returns a type of class

print(a_list)

a_list = [1, 2, 3, 4, 5, 6, 7, 8]
print(a_list)

a_list = [1,2,3,4,5,6,7,8]
print(a_list)

first_value = a_list[0]
print(first_value)

last_value = a_list[-1]
print(last_value)

# taking a part of a list is called slicing
sub_list = a_list[0:4]
print(sub_list)
# starting point is always included, the end point is always excluded

list_size = len(a_list)
print(list_size)

second_slice = a_list[4:len(a_list)] # since the endpoint is excluded, we can use the length of the list to get the last one instead of using "-1"
print(second_slice)

sublist_a = a_list[0:len(a_list)//2]
sublist_b = a_list[0:len(a_list)//2:len(a_list)] # ve can ommit the end point and it will just go to the end of the list
print(sublist_a)
print(sublist_b)

# MODIFYING LISTS
b_list = ['a', 'c', 2, 10]
print(b_list)
b_list[2] = 20
print(b_list)

b_list[0].capitalize()
print(b_list)

b_list[0] = b_list[0].capitalize()
print(b_list)

b_sublist = b_list[:2]
b_sublist[0] = 'B'
print(b_sublist)
print(b_list)


# DELETION

c_list = [1,2,3,3]
c_list.remove(3) # removes first occurence of whatever we put in
print(c_list)

deleted_variable = c_list.pop() # removes the last value as default but can take index as an argument; can be stored inside a variable
print(c_list)
print(deleted_variable)

