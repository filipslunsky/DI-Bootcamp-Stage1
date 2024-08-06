# number = int(user_input)

# print(f"User's input number is: {number}")

# here above we rely on the user's input being a number, otehrwise there will be an error on line 3

numbers = []

while True:
    user_input = input("Please provide a number: ").strip()
    if user_input == "Q":
        break
    try:
        number = int(user_input)
        numbers.append(number)
        print(f"User's input number is: {number}")
    except ValueError:
        print("Invalid input, you need to input a number.")

# except can be used without a specific error but it is not preferable, it is better to specify and handle various errors separately
print("Program is finished.")
print(numbers)