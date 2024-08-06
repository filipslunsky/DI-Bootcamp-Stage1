# user input
word = input("Please type in a word: ")

# creating a list of unique letters in the user input word to serve as the keys
unique_letters =[]

for i in range(0, len(word)):
    if word[i] not in unique_letters:
        unique_letters.append(word[i])

# creating a dictionary in two loops
# the first one runs through the key list (unique_letters)
# the loop inside checks and takes the indices of the letters in the user string and puts them in a list (indices)
# finally at the end of unique_letters loop, these two results are combined as key (string) and value (list) in the letter_index dictionary
letter_index = {}

for i in range(0, len(unique_letters)):
    indices = []
    for index in range(0, len(word)):
        if word[index] == unique_letters[i]:
            indices.append(index)
    letter_index[unique_letters[i]] = indices

# printing the result
print(letter_index)
