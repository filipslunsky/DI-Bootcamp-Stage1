def get_age(year:int, month:int, day:int):
    current_year = 2024
    current_month = 8
    current_day = 7

    age = current_year - year
    if (month > current_month) or month == current_month and day > current_day:
        age -= 1
    
    return age

def can_retire(gender:str, date_of_birth:str):
    date_of_birth_separated = date_of_birth.split("/")
    year = int(date_of_birth_separated[0])
    month = int(date_of_birth_separated[1])
    day = int(date_of_birth_separated[2])
    
    age = get_age(year, month, day)

    if age >= 67:
        return True, age
    elif age < 67 and age >= 62 and gender == "woman":
        return True, age
    else:
        return False, age

retired = can_retire("woman", "1958/03/15")
print(retired)




