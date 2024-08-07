def get_full_name(first_name, middle_name = "", last_name = ""):
    full_name = first_name + " " + middle_name + " " + last_name
    return full_name
print(get_full_name("John", "Wilkes", "Booth"))
print(get_full_name("John", "Booth"))

