# Exercise 1
def display_message():
    print("Hey, I am learning Python at the Developers Institute. Cool stuff!")

display_message()

# Exercise 2
def favorite_book(title):
    print(f"One of my favorite books is {title}.")

favorite_book("Alice in Wonderland")

# Exercise 3
def describe_city(city, country = "the rest of the world"):
    print(f"{city} is in {country}.")

describe_city("Jerusalem", "Israel")
describe_city("Prague")

# Exercise 4
import random
def try_luck(number):
    if number > 100 or number < 0:
        print("The number is out of range. Choose between 1 and 100.")
    else:
        random_number = random.randint(1, 100)
        if number == random_number:
            print("You chose wisely.")
        else:
            print("You chose poorly.")

try_luck(57)

# Exercise 5 (1 - 3)
def make_shirt(size, text):
    print(f"The size of the shirt is {size} and the text is: {text}")

make_shirt("XL", "This is my shirt, stop looking at it!")

# Exercise 5 (4 - 8)
def make_shirt(size = "L", text = "I love Python"):
    print(f"The size of the shirt is {size} and the text is: {text}")

make_shirt()

make_shirt("M")

make_shirt("S", "I am always hungry.")

make_shirt(text = "CDO is the same as OCD, just alphabetically ordered.", size = "M")

# Exercise 6
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians():
    for name in magician_names:
        print(name)

show_magicians()

def make_great():
    for i, name in enumerate(magician_names):
        magician_names[i] += " the Great"

make_great()

show_magicians()

# Exercise 7 (1 - 3)
def get_random_temp():
    return random.randint(-10, 40)

print(get_random_temp()) # test of functionality

def main():
    temperature = get_random_temp()
    print(f"The temperature right now is {temperature} degrees Celsius.")
    if temperature < 0:
        print("Brrr, that's freezing! Wear some extra layers today.")
    elif temperature >= 0 and temperature < 16:
        print("Quite chilly! Don't forget your coat.")
    elif temperature >= 16 and temperature <= 23:
        print("Perfecr weather for jogging.")
    elif temperature >= 24 and temperature < 32:
        print("Forget about jogging, go swimming instead.")
    elif temperature >= 32 and temperature <= 40:
        print("Crank up the A/C, it is hot today.")

main() # test of functionality

# Exercise 7 (4)
def get_random_temp(season:str):
    '''input one of the 4 seasons, i.e. spring, summer, fall/autumn, winter'''
    if season == "spring":
        return random.randint(10, 23)
    elif season == "summer":
        return random.randint(25, 40)
    elif season == "fall" or season == "autumn":
        return random.randint(15, 28)
    elif season == "winter":
        return random.randint(-10, 10)

def main():
    season = input("What season is it? ")
    temperature = get_random_temp(season)
    print(f"The temperature right now is {temperature} degrees Celsius.")
    if temperature < 0:
        print("Brrr, that's freezing! Wear some extra layers today.")
    elif temperature >= 0 and temperature < 16:
        print("Quite chilly! Don't forget your coat.")
    elif temperature >= 16 and temperature <= 23:
        print("Perfecr weather for jogging.")
    elif temperature >= 24 and temperature < 32:
        print("Forget about jogging, go swimming instead.")
    elif temperature >= 32 and temperature <= 40:
        print("Crank up the A/C, it is hot today.")

main()

# Exercise 7 (5)
def get_random_temp(season:str):
    '''input one of the 4 seasons, i.e. spring, summer, fall/autumn, winter'''
    if season == "spring":
        return random.uniform(10, 23)
    elif season == "summer":
        return random.uniform(25, 40)
    elif season == "fall" or season == "autumn":
        return random.uniform(15, 28)
    elif season == "winter":
        return random.uniform(-10, 10)

# Exercise 7 (6)
def get_random_temp(month:int):
    '''input number of month 1 - 12'''
    if month >= 3 and month < 6:
        return random.uniform(10, 23)
    elif month >= 6 and month < 9:
        return random.uniform(25, 40)
    elif month >= 9 and month < 12:
        return random.uniform(15, 28)
    elif month == 12 or month < 3:
        return random.uniform(-10, 10)

def main():
    month = int(input("What month is it? "))
    temperature = get_random_temp(month)
    print(f"The temperature right now is {temperature} degrees Celsius.")
    if temperature < 0:
        print("Brrr, that's freezing! Wear some extra layers today.")
    elif temperature >= 0 and temperature < 16:
        print("Quite chilly! Don't forget your coat.")
    elif temperature >= 16 and temperature <= 23:
        print("Perfecr weather for jogging.")
    elif temperature >= 24 and temperature < 32:
        print("Forget about jogging, go swimming instead.")
    elif temperature >= 32 and temperature <= 40:
        print("Crank up the A/C, it is hot today.")
    
main() # functionality test

# Exercise 8
data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

def play_quiz():
    correct_answers = 0
    wrong_answers = 0
    answers_list = []

    for round in data:
        answer = input(f"{round["question"]} ")
        
        answer_dict = {}
        answer_dict["question"] = round["question"]
        answer_dict["correct_answer"] = round["answer"]
        answer_dict["user_answer"] = answer
        answers_list.append(answer_dict)
        
        if answer == round["answer"]:
            correct_answers += 1
            print("That is correct! The Force is strong with this one.")
        else:
            wrong_answers += 1
            print("Sorry, wrong answer, JarJar.")

    print(f"You have answered {correct_answers} correctly and {wrong_answers} incorrectly.")

    for round in answers_list:
        if round["correct_answer"] != round["user_answer"]:
            print(f'''For the question:
        {round["question"]} 
        you answered:
        {round["user_answer"]}
        but the correct answer should be:
        {round["correct_answer"]}''')

    if wrong_answers > 3:
        wrong_answers = 0
        correct_answers = 0
        reply = input("Would you like to play again? (y/n) ")
        if reply == "y":
            play_quiz()
        else:
            print("Thanks for playing!")

play_quiz()