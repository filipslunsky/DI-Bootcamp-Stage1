# The FizzBuzz Exercise
# Ask the user for a number between 1 and 100

# - use input for getting the input number from the user
# - convert the input to an integer (int)

# If the number is a multiple of three, print "Fizz"

# - use modulo (%) to check if multiple + condition (if)

# If the number is a multiple of five, print "Buzz".
# - use modulo (%) to check if multiple + condition (elif)

# If the number is a multiple is a multiples of both three and five,
# print "FizzBuzz" instead.

user_input = input("Please enter a number between 1 and 100: ")
user_input = int(user_input)

# this part of code checks the validity of user input, if it doesn't match the criteria, it asks for another one
# if (user_input < 0) or (user_input > 100):
#     print("Your number doesn't work")
#     input("please enter a new number between 1 and 100: ")
#     user_input = int(user_input)

if (user_input % 5 == 0) and (user_input % 3 == 0):
    print("FizzBuzz")
elif user_input % 5 == 0:
    print("Buzz")
elif user_input % 3 == 0:
    print("Fizz")
else:
    print("No Fizz and no Buzz for you today")
