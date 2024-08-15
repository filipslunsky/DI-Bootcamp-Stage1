import random
wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
word_letters = []
puzzle_letters = []
played_letters = []
wrong_guesses = 0

def pick_word(wordslist):
    word = random.choice(wordslist)
    for i in range(0, len(word)):
        word_letters.append(word[i])
        puzzle_letters.append("_")


def get_letter_input():
    accepted_values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ "
    letter = input("Guess letter or space: ")
    while letter not in accepted_values:
        letter = input("Invalid input, you must guess a letter or a space: ")

    letter = letter.lower()
    return letter

     
def build_gallows(wrong_guesses):
    if wrong_guesses == 0:
        head = " "
        body = " "
        left_arm = " "
        right_arm = " "
        left_leg = " "
        right_leg = " "

    elif wrong_guesses == 1:
        head = "0"
        body = " "
        left_arm = " "
        right_arm = " "
        left_leg = " "
        right_leg = " "

    elif wrong_guesses == 2:
        head = "0"
        body = "|"
        left_arm = " "
        right_arm = " "
        left_leg = " "
        right_leg = " "

    elif wrong_guesses == 3:
            head = "0"
            body = "|"
            left_arm = "-"
            right_arm = " "
            left_leg = " "
            right_leg = " "
    
    elif wrong_guesses == 4:
            head = "0"
            body = "|"
            left_arm = "-"
            right_arm = "-"
            left_leg = " "
            right_leg = " "

    elif wrong_guesses == 5:
            head = "0"
            body = "|"
            left_arm = "-"
            right_arm = "-"
            left_leg = "_"
            right_leg = " "
    
    elif wrong_guesses == 6:
            head = "0"
            body = "|"
            left_arm = "-"
            right_arm = "-"
            left_leg = "_"
            right_leg = "_"
    
    gallows = f'''
    |============||
    |            ||
    {head}            ||
   {left_arm}{body}{right_arm}           ||
   {left_leg}{body}{right_leg}           ||
                 ||
                 ||
    _____________||__
    |                |
    '''
    print(gallows)



def guess_letter():
    global wrong_guesses
    global guessed_letter
    guessed_letter = get_letter_input()
    if guessed_letter in played_letters:
        print(f"You have already played letter {guessed_letter.upper()}")
    else:
        played_letters.append(guessed_letter)
        if guessed_letter in word_letters:
            for i in range(0, len(word_letters)):
                if word_letters[i] == guessed_letter:
                    puzzle_letters[i] = guessed_letter
        else:
            wrong_guesses += 1

def build_puzzle():
    puzzle_string = ""
    for i in range(0, len(puzzle_letters)):
        puzzle_string += f"{puzzle_letters[i]} "
    print(puzzle_string)

def delete_scores():
    global wrong_guesses
    wrong_guesses = 0
    global word_letters
    word_letters = []
    global puzzle_letters
    puzzle_letters = []
    global played_letters
    played_letters = []

def play():
    pick_word(wordslist)
    while wrong_guesses < 6 and "_" in puzzle_letters:
        build_gallows(wrong_guesses)
        build_puzzle()
        guess_letter()
    if wrong_guesses == 6:
        build_gallows(wrong_guesses)
        print("You have LOST.")
    else:
        build_puzzle()
        print("You have WON.")
   
    play_again = input("Would you like to play again? (y/n) ")
    if play_again == "y":
        delete_scores()
        play()
    else:
        print("Thank you for playing!")

play()
