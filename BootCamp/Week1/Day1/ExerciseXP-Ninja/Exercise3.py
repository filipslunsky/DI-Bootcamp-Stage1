3 <= 3 < 9
# predicted result - True (not displayed in the console)

3 == 3 == 3
# predicted result - True (not displayed in the console)

bool(0)
# predicted result - False (not displayed in the console)

bool(4 == 4) == bool("4" == "4")
# predicted result - True (not displayed in the console)

bool(bool(None))
# predicted result - False (not displayed in the console)

x = (1 == True)
y = (1 == False)
a = True + 4
b = False + 10

print("x is", x)
# predicted result - x is True

print("y is", y)
# predicted result - y is False

print("a:", a)
# predicted result - a: 5

print("b:", b)
# predicted result - b: 10
