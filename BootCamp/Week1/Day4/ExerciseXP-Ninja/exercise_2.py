def turn_into_morse(string):
    MORSE_CODE_LETTERS = { 'A':'.-', 'B':'-...', 'C':'-.-.', 'D':'-..', 'E':'.', 'F':'..-.', 'G':'--.', 'H':'....', 'I':'..', 'J':'.---', 'K':'-.-',
'L':'.-..', 'M':'--', 'N':'-.', 'O':'---', 'P':'.--.', 'Q':'--.-', 'R':'.-.', 'S':'...', 'T':'-', 'U':'..-', 'V':'...-', 'W':'.--', 'X':'-..-', 'Y':'-.--', 'Z':'--..', '1':'.----', '2':'..---', '3':'...--', '4':'....-', '5':'.....', '6':'-....', '7':'--...', '8':'---..', '9':'----.', '0':'-----', ', ':'--..--', '.':'.-.-.-', '?':'..--..', '/':'-..-.', '-':'-....-', '(':'-.--.', ')':'-.--.-', ' ': '/'}
    string = string.upper()

    morse_string = ""

    for i in range(0, len(string)):
        morse_string += MORSE_CODE_LETTERS[string[i]]
        morse_string += " "

    return morse_string

print(turn_into_morse("word and another word"))


def turn_from_morse(morse_string):
    MORSE_CODE_MORSE = {'.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J', '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T', '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y', '--..': 'Z', '.----': '1', '..---': '2', '...--': '3', '....-': '4', '.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9', '-----': '0', '--..--': ', ', '.-.-.-': '.', '..--..': '?', '-..-.': '/', '-....-': '-', '-.--.': '(', '-.--.-': ')', '/': ' '}

    morse_list = morse_string.split(" ")
    unmorse_list = []

    for i in range(0, len(morse_list)):
        character = morse_list[i]
        unmorse_list.append(MORSE_CODE_MORSE[character])

    unmorse_string = ""
    for i in range(0, len(unmorse_list)):
        unmorse_string += unmorse_list[i]

    return unmorse_string

print(turn_from_morse(".-- --- .-. -.. / .- -. -.. / .- -. --- - .... . .-. / .-- --- .-. -.."))



