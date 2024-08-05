words = input("Give me seven words please and separate them with a space: ").split(" ")
# Jon Jane Jim auto llama done sweet
letter = input("Now give me a letter please: ")

for i in range(0, len(words)):
    if letter in words[i]:
        print(f"the letter {letter} is on index {words[i].index(letter)} in the word {words[i]}")
    else:
        print(f"the letter {letter} is nowhere to be found in the word {words[i]}")

