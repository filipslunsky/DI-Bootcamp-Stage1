# username = "Yossi"

# if username == "Yossi":
#     print("Yossi, Management Section")
# else:
#     print(f"{username}, Client Section")

# username = "Ben"

# if username == "Yossi":
#     print("Yossi, Management Section")
# else:
#     print(f"{username}, Client Section")

# # Bob is a terrible guy so we add "elif"

# username = "Bob"

# if username == "Yossi":
#     print("Yossi, Management Section")
# elif username == "Bob":
#     print("Bob is very restricted")
# else:
#     print(f"{username}, Client Section")

username = "Yossi"
password = "1234"
if username == "Yossi" and password == "1234": # all conditions need to be true, if the the program finds one False, it doesn't check the following
    print("Yossi, Management Section")
elif username == "Bob" or password != "1234": # only one of the conditions needs to be True
    print("ACCESS RESTRICTED")
else:
    print(f"{username}, Client Section")
