def sum_of_same(number:int):
    string = str(number)
    string_2 = string + string
    string_3 = string_2 + string
    string_4 = string_3 + string

    result = int(string) + int(string_2) + int(string_3) + int(string_4)
    return result

print(sum_of_same(3))
