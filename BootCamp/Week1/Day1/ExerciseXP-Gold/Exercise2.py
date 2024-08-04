month_input = input("Please enter a number of a month: ")
month_input = int(month_input)

if month_input == 12 or month_input <= 2:
    print("It is winter.")
elif month_input > 2 and month_input <= 5:
    print("It is spring.")
elif month_input > 5 and month_input <= 8:
    print("It is summer.")
elif month_input > 8 and month_input <= 11:
    print("It is autumn.")
else:
    print("Your choice is out of season")
    