def undouble_letters(word:str):
    undouble_word = ""
    undouble_word += word[0]

    for letter in word:
        last_letter = undouble_word[-1]
        if letter != last_letter:
            undouble_word += letter

    return undouble_word

print(undouble_letters("ppppooooeeeemmmmmmmmmm"))
