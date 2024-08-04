user_height = input("How tall are you? Answer in centimeters: ")
user_height = int(user_height)

if user_height > 145:
    print("You are tall enough to ride.")
else:
    print("You need to grow some more to ride.")