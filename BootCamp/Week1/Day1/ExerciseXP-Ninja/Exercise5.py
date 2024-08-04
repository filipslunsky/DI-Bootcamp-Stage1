tested_sentence = input("What is the longest sentence withou an A? ")
count = tested_sentence.count("a")
characters = 0

while count == 0:
    characters = len(tested_sentence)
    tested_sentence = input(f"Cool, your sentence has {characters} and no A. Can you do better? ")
    count = tested_sentence.count("a")

print("GAME OVER, letter A detected")
