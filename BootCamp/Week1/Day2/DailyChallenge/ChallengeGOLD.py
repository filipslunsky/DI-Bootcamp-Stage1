from datetime import date

# taking and formating the user input - date of birth
user_input = input("Enter your date of birth in YYYY/MM/DD: ")
sorted_input = user_input.split("/")
int_input = []
for i in range(0, 3):
    int_input.append(int(sorted_input[i]))
print(int_input)

# calculating the age of the user based on the user input and current date
birth_date = date(int_input[0], int_input[1], int_input[2])
today = date.today()
age = today.year - birth_date.year - ((today.month, today.day) < (birth_date.month, birth_date.day))

# calculating the number of candles 
candles = age % 10
cake_top = "       _"
for i in range(0, candles):
    cake_top += "i"
cake_top += "_"
print(cake_top)
print("      |:H:a:p:p:y:|")
print("    __|___________|__")
print("   |^^^^^^^^^^^^^^^^^|")
print("   |:B:i:r:t:h:d:a:y:|")
print("   |                 |")
print("   ~~~~~~~~~~~~~~~~~~~")

# calculating leap year bonus cake

if int_input[0] % 4 == 0:
    print(cake_top)
print("      |:H:a:p:p:y:|")
print("    __|___________|__")
print("   |^^^^^^^^^^^^^^^^^|")
print("   |:B:i:r:t:h:d:a:y:|")
print("   |                 |")
print("   ~~~~~~~~~~~~~~~~~~~")