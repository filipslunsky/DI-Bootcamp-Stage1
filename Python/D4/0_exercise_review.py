# shorter solution of previous daily challenge
string = "dodo"

# get the word
# look up each letter of the string
# create a dictionary
# put the letters as key
# put the index of the letter as a value
# check if the letter is already in the dictionary

# for letter in string:
#     print(letter)

output = {}
for i, letter in enumerate(string):
    if letter in output:
        output[letter].append(i)
    else:
        output.update({letter : [i]})

# update is a dictionary method

print(output)
