# tuples are like lists, BUT THEY CANNOT BE MODIFIED AFTER THEY ARE CREATED
# tuples are READ-ONLY lists

a_tuple = (1, 2, 3, 4, 5, 6)

# access - same as lists

first_value = a_tuple[0]
last_value = a_tuple[-1]

print(first_value)
print(last_value)

# a_tuple[0] = 10 - leads to an error

print(a_tuple)

sub_tuple = a_tuple[0:len(a_tuple)//2]
print(sub_tuple)

b_tuple = ("Yossi", "Tel Aviv", 32)
print(b_tuple)