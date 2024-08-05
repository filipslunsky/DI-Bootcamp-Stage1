alphabet = "abcdefghijklmnopqrstuvwxyz"
vowels = ["a", "e", "i", "o", "u"]

for i in range(0, len(alphabet)):
    if alphabet[i] in vowels:
        print(f"Letter {alphabet[i]} is a vowel.")
    else:
        print(f"Letter {alphabet[i]} is a consonant.")
