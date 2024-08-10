# -------- GLOBAL VARIABLES ---------

# the row variables serve for storing moves of players and passing to the console output (GUI)
row_1 = [" ", " ", " "]
row_2 = [" ", " ", " "]
row_3 = [" ", " ", " "]

# is_game_over serves to the purpose of stopping and moving the game, is used in the function play() and check_win
is_game_over = False

# last_winner is rewritten at the end of the first game if the user chooses to continue so that the loser from previou game can haev the first move in the next one
last_winner = ""

# -------- FUNCTIONS ---------
# display_board is one of the four main functions, it takes the row variables as arguments and displays them "graphically" to the console
# all the main functions are: display_board(row_1, row_2, row_3), player_input(player), check_win(player) and play()
# the auxiliary functions are: get_row_input(), get_col_input() and delete_scores()
def display_board(row_1, row_2, row_3):
    top_bottom = "*" * 17
    spacer =    "*  " + "-" * 3 + "|" + "-" * 3 + "|"+ "-" * 3 + "  *"
    display_row_1 =  f"*   {row_1[0]} | {row_1[1]} | {row_1[2]}   *"
    display_row_2 =  f"*   {row_2[0]} | {row_2[1]} | {row_2[2]}   *"
    display_row_3 =  f"*   {row_3[0]} | {row_3[1]} | {row_3[2]}   *"

    print(f'''{top_bottom}
{display_row_1}
{spacer}
{display_row_2}
{spacer}
{display_row_3}
{top_bottom}
''')

# the functions get_row_input and get_col_input (auxiliary functions) make sure the user input is really an integer 1,2,3 and nothing else, they display the error message and instruction to the user
def get_row_input():
    accepted_values = ["1","2","3"]
    row = input("Enter row (1 - 3): ")

    while row not in accepted_values:
        row = input("Invalid input, use numbers (1 - 3), enter row: ")

    row = int(row)
    return row

def get_col_input():
    accepted_values = ["1","2","3"]
    col = input("Enter column (1 - 3): ")

    while col not in accepted_values:
        col = input("Invalid input, use numbers (1 - 3), enter column: ")

    col = int(col)
    return col

# player_input is one of the four main fuctions, it takes the user moves (row and col input) and outputs to the row variables, it also check the availability of the move (the field is not taken), it calls the display_board function after every move
def player_input(player):
    print(f"Your move {player}.")
    row = get_row_input()
    col = get_col_input()
    
    column_index = col - 1

    if row == 1:
        if row_1[column_index] == " ":
            row_1[column_index] = player
        else:
            print("You cannot make this move, this field is already taken.")
            player_input(player)
    elif row == 2:
        if row_2[column_index] == " ":
            row_2[column_index] = player
        else:
            print("You cannot make this move, this field is already taken.")
            player_input(player)
    elif row == 3:
        if row_3[column_index] == " ":
            row_3[column_index] = player
        else:
            print("You cannot make this move, this field is already taken.")
            player_input(player)
    
    display_board(row_1, row_2, row_3)

# check_win function is checks after every move if there is a winner (calculates rows, columns and diagonals) or if the game ends in a tie (0 available fieds to move), it checks and updates global variables is_game_over and last_winner
def check_win(player):
    col_1 = [row_1[0], row_2[0], row_3[0]]
    col_2 = [row_1[1], row_2[1], row_3[1]]
    col_3 = [row_1[2], row_2[2], row_3[2]]
    diag_1 = [row_1[0], row_2[1], row_3[2]]
    diag_2 = [row_1[2], row_2[1], row_3[0]]

    win_check_list = [row_1.count(player), row_2.count(player), row_3.count(player), col_1.count(player), col_2.count(player), col_3.count(player), diag_1.count(player), diag_2.count(player)]
    
    global is_game_over
    global last_winner

    if 3 in win_check_list:
        print(f"Player {player} is the winner!")
        is_game_over = True
        last_winner = player

        
    if (row_1.count(" ") + row_2.count(" ") + row_3.count(" ")) == 0 and 3 not in win_check_list:
            is_game_over = True
            print("The game is tied. No winners, no losers.")

# delete_scores is an auxiliary function that clears the board (all 3 row variables) after the first game and sets is_game_over back to False
def delete_scores():
    global row_1
    row_1 = [" ", " ", " "]
    global row_2
    row_2 = [" ", " ", " "]
    global row_3
    row_3 = [" ", " ", " "]
    global is_game_over
    is_game_over = False

# play() is the fourth main function, it outputs the main message, calls display_board for the beginning of the game and handles the turns of player during the game (player_input("X"/"O")) and calls to check for winner or tie after every move (check_win()); after the game is finished, it asks the user to play again, if so ("y"), it calls delete_scores() to reset scores and calls itself again to play another game
def play():
    print("Welcome to TIC TAC TOE")
    display_board(row_1, row_2, row_3)
    
    if last_winner != "X":
        while not is_game_over:
            player_input("X")
            check_win("X")
            if not is_game_over:
                player_input("O")
                check_win("O")
    else:
        while not is_game_over:
            player_input("0")
            check_win("0")
            if not is_game_over:
                player_input("X")
                check_win("X")
        
    play_again = input("Would you like to play again? (y/n) ")
    if play_again == "y":
        delete_scores()
        play()
    else:
        print("Thank you for playing!")
    
play()
