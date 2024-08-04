# part 1 of the challenge - evaluating the length of the string (part A of the evaluation in case the string is perfect)
user_string = input("Give me a string that has exactly 10 characters and I will show you something really cool with it: ")
length = len(user_string)

if length == 10:
    print("perfect string")
    # part 2 of the challenge - printing the first and the last character
    print(f"the first character is: {user_string[0]}")
    print(f"the last character is: {user_string[9]}")

    # part 3 of the challenge - reconstructing the string
    reconstructed_string = ""

    print("reconstructing... ")

    for i in range(0, 10):
        reconstructed_string = reconstructed_string + user_string[i]
        print(reconstructed_string)

    # bonus part of the challenge
    # import relevant module
    import random

    print("shuffling...")

    shuffled_string = "".join(random.sample(user_string, len(user_string)))
    print(shuffled_string)

#continuation of part 1 (part B - in case the string is too long or too short)
elif length > 10:
    print("string too long")
else:
    print("string too short")
