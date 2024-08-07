# *args -> we need to put asterisk in front of them, hte word "args" is just standard but can be changed; internally it creates a tuple

def welcome(*args):
    for name in args:
        print(f"Welcome, {name}")

welcome("Juliana")
welcome("Dana", "Shira", "Fox")

# as we can see, it works mostly as a "wild card" when we don't know how many arguments of the same sort are going to be passed to the function

# **kwargs = keyword argument, the same idea but they create a dictionary

def create_info(**kwargs):
    for key, value in kwargs.items():
        print(key, value)
    print(kwargs)

create_info(name = "Juiliana", age = 34, address = "Ramat Gan", email = "juliana@gmail.com")
