import random

def play_with_change():
    """this function simulates Monty Hall game with door changing strategy"""
    # main set up section and player's first choice
    winning_door = random.randint(1, 3)
    first_choice = random.randint(1, 3)
    
    # finding the unwinning door by Monty Hall and showing to the player
    door_options = []
    for i in range(1, 4):
        if i != winning_door and i != first_choice:
            door_options.append(i)
    if len(door_options) == 2:
        opened_door = door_options[random.randint(0,1)]
    else:
        opened_door = door_options[0]
    
    # player changes original choice to the unopened door by Monty Hall
    for i in range(1, 4):
        if i != first_choice and i != opened_door:
            second_choice = i
    
    # evaluating if player won
    if second_choice == winning_door:
        player_won = True
    else:
        player_won = False
    
    return player_won
    
def play_without_change():
    """this function simulates Monty Hall game with door keeping strategy"""
    # main set up section and player's first choice
    winning_door = random.randint(1, 3)
    first_choice = random.randint(1, 3)
    
    # finding the unwinning door by Monty Hall and showing to the player
    door_options = []
    for i in range(1, 4):
        if i != winning_door and i != first_choice:
            door_options.append(i)
    if len(door_options) == 2:
        opened_door = door_options[random.randint(0,1)]
    else:
        opened_door = door_options[0]
    
    # player keeps original choice regardless of the unopened door by Monty Hall
    second_choice = first_choice
    
    # evaluating if player won
    if second_choice == winning_door:
        player_won = True
    else:
        player_won = False
    
    return player_won    


def play_and_evaluate(number):
    results_with_change = []
    results_without_change = []
    for i in range(0, number):
        result_with_change = play_with_change()
        results_with_change.append(result_with_change)
        result_without_change = play_without_change()
        results_without_change.append(result_without_change)
    
    won_with_change = results_with_change.count(True)
    won_without_change = results_without_change.count(True)
    ratio_with_change = won_with_change / number
    ratio_without_change = won_without_change / number
    
    print(f"Success rate was {ratio_with_change} with changing the door.")
    print(f"Success rate was {ratio_without_change} while keeping the original door.")
    print(f"The total of games with each strategy was {number} games.")

# play_and_evaluate(1000)

# results for door changing strategy don't work, probable error in door changing segment in play_with_change()
