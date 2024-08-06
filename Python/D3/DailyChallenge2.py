# removing double letters (previous daily challenge)
# when word like "pppoooeeeemmm" is in input, output "poem"

# user input
word = input("type in a word: ")

# # turinig the word into a list
# word_list = []
# for i in range(0, len(word)):
#     word_list.append(word[i])

# # removing ununique letters
# uniqe_list = []
# for i in range(0, len(word_list)):
#     if word_list[i] not in uniqe_list:
#         uniqe_list.append(word_list[i])


# fixed_string = ""
# for i in range(0, len(uniqe_list)):
#     fixed_string += uniqe_list[i]

# print(fixed_string)
# however this approach of removing will remove all ununique letters, not only adjacent

letters = []
i = 0
current_character = word[i]

while i < len(word):
    if word[i] != current_character or len(letters) == 0:
        current_character = word[i]
        letters.append(current_character)
    i += 1

fixed_word = ""
for i in range(0, len(letters)):
    fixed_word += letters[i]
print(fixed_word)