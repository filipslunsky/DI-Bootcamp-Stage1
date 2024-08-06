sentence = input("please input a sentence: ")
words = sentence.split(" ")

reversed_words = words[::-1]

reversed_sentence = ""
for i in range(0, len(reversed_words)):
    reversed_sentence += reversed_words[i] + " "

print(reversed_sentence)
