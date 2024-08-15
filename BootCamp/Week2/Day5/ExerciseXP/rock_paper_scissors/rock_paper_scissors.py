from game import Game

def get_user_menu_choice():
    user_input = ""
    print("""
---- MAIN MENU ----""")
    while True:
        print("""Please choose if you want to:
p - Play a new game
s - Show scores
q - Quit""")
        user_input = input()
        if user_input == "p" or user_input == "s" or user_input == "q":
            break
        print("Please select letters p, s or q.")
    return user_input


def print_resuts(results):
    print(f"""
Here are your statistics so far:
- games you WON:    {results["win"]}
- games you LOST:   {results["loss"]}
- games you DRAW:   {results["draw"]}
""")

def main():
    results ={"win": 0,"loss": 0,"draw": 0}
    while True:
        user_menu_choice = get_user_menu_choice()
        if user_menu_choice == "p":
            game = Game()
            result = game.play()
            results[result] += 1
        elif user_menu_choice == "s":
            print_resuts(results)
        elif user_menu_choice == "q":
            print("Thank you for playing. Skynet hopes to see you again soon.")
            break
        
        

main()