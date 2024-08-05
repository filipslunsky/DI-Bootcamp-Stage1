import random
# print(random.randint(0, 9))
guess = input("Pick a number between 1 and 9, incuding 1 and 9: ")
games_won = 0
games_lost = 0

while guess != "quit":
    guess = int(guess)
    if guess == random.randint(0, 9):
        guess = input("Winner! Keep guessing: ")
        games_won += 1
    else:
        guess = input("Better luck next time! Keep guessing: ")
        games_lost += 1
print("Thank you for playing, here are your statistics:")
print(f"games won: {games_won}")
print(f"games lost: {games_lost}")
