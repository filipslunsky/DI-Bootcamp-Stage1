input_string = input("Enter a word with double letters: ")

if input_string:
    result = input_string[0]
else:
    result = ""

for character in input_string[1:]:
    if character != result[-1]:
        result += character

print(result)