def adv_say_hello(name:str = "John Doe", language:str = "EN"):
    '''gives name specific greetings depending on a language'''
    if language == "HE":
        return f"Shalom, {name}"
    elif language == "PT":
        return f"Oi, {name}"
    elif language == "ES":
        return f"Hola, {name}"
    elif language == "RU":
        return f"Privet, {name}"
    elif language == "EN":
        return f"Hello, {name}"
    else:
        "unknown language"



print(adv_say_hello("Dana Scully", "RU"))

students = ["Harry", "Hermione", "Ron", "Luna"]

# concept of "docstrings" can be seen below in the word "list", it doesn't have to be there but it is more comprehensive
# it is better to use return instead of print in functions, it makes them easier to use

def wizard(names_list:list):
    for name in names_list:
        return f"{name}, welcome to Hogwarts!"

print(wizard(students))    

# "return" works similarly to "break, that is why it cannot be in a block of the loop"

def wizard(names_list:list):
    greeting = []
    for name in names_list:
        greeting.append(f"{name}, welcome to Hogwarts!")
    return greeting
# doesn't change the original list (passing by copy)

print(wizard(students))
print(students)

def selector_heat():
    for i, name in enumerate(students):
        students[i] += f"{name}, you are in Griffyndor!"
# changes the original list (passing by reference), possible with indexing and no return

selector_heat()
print(students)

name = "Avner" # global scope

def say_hi(name):
    name = "Juliana" # local scope
    return name

print(say_hi(name))
print(name)

count = 10

def calculation(a,b):
    global count # accessing the global variable to be able to modify in globally, useful for games (with lists it doesn't have to be done like this)
    result = a + b
    count += result
    return count




    