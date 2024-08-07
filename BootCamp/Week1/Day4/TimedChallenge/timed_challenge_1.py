def count_occurence(string:str, character:str):
    '''takes 2 arguments and returns the number of occurences of the second character/string in the first one'''
    number_of_occurence = string.count(character)
    return number_of_occurence

print(count_occurence("Programming is cool!", "o"))

print(count_occurence("This is a great example", "y"))
