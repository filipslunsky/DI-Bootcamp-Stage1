# user input of the sentence
text = input("Write a sentence to get the occurance of words counted: ")

# converting the input string in a list of all words form the string into word_list
word_list = text.split(" ")

# creating a list of unique words for the previous list to unique_words
unique_words = []
for i in range(0, len(word_list)):
    if word_list[i] not in unique_words:
        unique_words.append(word_list[i])

# outputting the results by counting the unique_words in word_list
for i in range(0, len(unique_words)):
    print(f"{unique_words[i]}: {word_list.count(unique_words[i])}")

