# Caesar's Cypher

alphabet = "abcdefghijklmnopqrstuvwxyz"

# user input
word = input("enter some text that you want to be encrypted: ").lower()
shift = int(input("set the encryption key with a whole number: "))

# creating a list of positions of letters in a word
positions = []
for i in range(0, len(word)):
    if word[i] == " " or word[i] == "," or word[i] == "." or word[i] == "?" or word[i] == "!":
        position = word[i]
        positions.append(position)
    else:
        position = alphabet.index(word[i])
        positions.append(position)

# moving the original position to encrypted
shifted_positions= []

for i in range(0, len(positions)):
    if positions[i] == " " or positions[i] == "," or positions[i] == "." or positions[i] == "?" or positions[i] == "!":
        shifted_positions.append(positions[i])
    else:
        shifted_position = positions[i] + shift
        while shifted_position >= 26:
            shifted_position -= 26
        shifted_positions.append(shifted_position)

# reconstructing the word from shited positions
encrypted_word = ""
for i in range(0, len(shifted_positions)):
    if shifted_positions[i] == " " or shifted_positions[i] == "," or shifted_positions[i] == "." or shifted_positions[i] == "?" or shifted_positions[i] == "!":
        shifted_letter = shifted_positions[i]
        encrypted_word += shifted_letter
    else:
        shifted_letter = alphabet[shifted_positions[i]]
        encrypted_word += shifted_letter

print(encrypted_word)
