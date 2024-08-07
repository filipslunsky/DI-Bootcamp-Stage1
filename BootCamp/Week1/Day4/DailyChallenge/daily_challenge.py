# original crypted string
crypted_string = "7iiTsxh%?i #sM $a #t%^r!"

def decipher_matrix(crypted_string:str):
    '''allows to unscramble the 3-column matrix cipher'''
    # changing the direction of the columns based on the indices of characters
    columnized_string_1 = ""
    columnized_string_2 = ""
    columnized_string_3 = ""

    for i in range(0, len(crypted_string)):
        if i % 3 == 0:
            columnized_string_1 += crypted_string[i]
        elif i % 3 == 1:
            columnized_string_2 += crypted_string[i]
        elif i % 3 == 2:
            columnized_string_3 += crypted_string[i]

    columnized_string = columnized_string_1 + columnized_string_2 + columnized_string_3

    # filtering out non-alpha characters
    alphabet_lower = "abcdefghijklmnopqrstuvwxyz"
    alphabet_upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    deciphered_string = ""

    for i in range(0, len(columnized_string)):
        if columnized_string[i] in alphabet_lower or columnized_string[i] in alphabet_upper:
            deciphered_string += columnized_string[i]

    return deciphered_string

# calling the decipher function on the original string and outputting the result
print(decipher_matrix(crypted_string))
