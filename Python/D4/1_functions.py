
#--------- QUOTATION MARKS USE ---------
# single quotation marks can be used only in one line
# tripple """ """/ ''' ''' can be used on break lines (with enter)

# --------- FUNCITONS -------------
# useful for doing repetitive tasks to keep DRY
# parameters/arguments are used with functions but not necessarily
# keyword is "def", always use indentation
# always need to be called to execute

def say_hello():
    print("Hello there")

say_hello()

def adv_say_hello(name):
    return f"Hello {name}"

adv_say_hello("Johny") # if there is no argument, error will be returned

print(adv_say_hello("Johny"))

def adv_say_hello(name, language):
    if language == "HE":
        return f"Shalom, {name}"
    elif language == "PT":
        return f"Oi, {name}"
    elif language == "ES":
        return f"Hola, {name}"
    elif language == "RU":
        return f"Privet, {name}"
    else:
        "unknown language"

print(adv_say_hello("Joe", "RU"))
print(adv_say_hello("Joe", "HE")) # positional arguments, respect the order of defined argument

print(adv_say_hello(language = "ES", name = "Joe")) # keyword arguments

