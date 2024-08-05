# Sets are data collection that hold only unique values
# Sets are mutable, they can change
# Sets don' have index, they are NOT ORDERED

a_set = {1, 2, 3}

b_set = {1, 2, 3, 1, 2, 3, 4}
print(b_set)

# Modification

a_set.add(34)
print(a_set)

# Removal
a_set.remove(2)
print(a_set)

print(len(a_set))

