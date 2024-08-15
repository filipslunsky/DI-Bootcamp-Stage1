import random

class Game:
    def __init__(self):
        self.valid_choices = ["r", "p", "s"]
        self.translate = {"r": "rock", "p": "paper", "s": "scissors"}

    def get_user_item(self):
        user_item = ""
        while True:
            print("Please choose (r)ock, (p)aper or (s)cissors:")
            user_item = input()
            if user_item in self.valid_choices:
                break
            print("Please choose either 'r', 'p' or 's'")
        return user_item

    def get_computer_item(self):
        computer_item = random.choice(self.valid_choices)
        return computer_item        

    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return "draw"
        elif (user_item == "r" and computer_item == "p") or (user_item == "p" and computer_item == "s") or (user_item == "s" and computer_item == "r"):
            return "loss"
        elif (computer_item == "r" and user_item == "p") or (computer_item == "p" and user_item == "s") or (computer_item == "s" and user_item == "r"):
            return "win"
    
    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        game_result = self.get_game_result(user_item, computer_item)
        if game_result == "draw":
            print(f"""
Game Result:
You selected {self.translate[user_item]}. The computer selected {self.translate[computer_item]}. You DRAW.""")
            return "draw"
        elif game_result == "win":
            print(f"""
Game Result:
You selected {self.translate[user_item]}. The computer selected {self.translate[computer_item]}. You WIN.""")
            return "win"
        elif game_result == "loss":
            print(f"""
Game Result:
You selected {self.translate[user_item]}. The computer selected {self.translate[computer_item]}. You LOSE.""")
            return "loss"


if __name__ in "__main__":
    test = Game()
    # print(test.get_user_item())
    # print(test.get_computer_item())
    # print(test.get_game_result(test.get_user_item(), test.get_computer_item()))
    print(test.play())
    



