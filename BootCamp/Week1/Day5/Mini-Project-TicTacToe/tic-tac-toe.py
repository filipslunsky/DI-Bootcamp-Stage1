# finish game when the winner is found - FIXED
# handle tie - FIXED
# finish game when tie happens - FIXED
# check user input for move possibility (only " " items) - FIXED
# check user input for validity (1, 2, 3) - FIXED
# game repeat (y/n)
# alternating first move

row_1 = [" ", " ", " "]
row_2 = [" ", " ", " "]
row_3 = [" ", " ", " "]

is_game_over = False

def display_board(row_1, row_2, row_3):
    top_bottom = "*****************"
    spacer =    "*  ---|---|---  *"
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

def player_input(player):
    accepted_input = ["1", "2", "3"]

    row = input(f"Player {player}, enter row (1 - 3): ")
    if row not in accepted_input:
        print("You need to input 1, 2 or 3.")
        player_input(player)

    column = input(f"Player {player}, enter column (1 - 3): ")    
    if column not in accepted_input:
        print("You need to input 1, 2 or 3.")
        player_input(player)
    
    column_number = int(column)

    if row == "1":
        if row_1[column_number - 1] == " ":
            row_1[column_number - 1] = player
        else:
            print("You cannot make this move, this field is already taken.")
            player_input(player)
    elif row == "2":
        if row_2[column_number - 1] == " ":
            row_2[column_number - 1] = player
        else:
            print("You cannot make this move, this field is already taken.")
            player_input(player)
    elif row == "3":
        if row_3[column_number - 1] == " ":
            row_3[column_number - 1] = player
        else:
            print("You cannot make this move, this field is already taken.")
            player_input(player)
    
    display_board(row_1, row_2, row_3)

def check_win(player):
    col_1 = [row_1[0], row_2[0], row_3[0]]
    col_2 = [row_1[1], row_2[1], row_3[1]]
    col_3 = [row_1[2], row_2[2], row_3[2]]
    diag_1 = [row_1[0], row_2[1], row_3[2]]
    diag_2 = [row_1[2], row_2[1], row_3[0]]

    win_check_list = [row_1.count(player), row_2.count(player), row_3.count(player), col_1.count(player), col_2.count(player), col_3.count(player), diag_1.count(player), diag_2.count(player)]
    
    global is_game_over

    if (row_1.count(" ") + row_2.count(" ") + row_3.count(" ")) == 0:
            is_game_over = True
            print("The game is tied. No winners, no losers.")

    if 3 in win_check_list:
        print(f"Player {player} is the winner!")
        is_game_over = True
        
    

def play():
    print("Welcome to TIC TAC TOE")

    display_board(row_1, row_2, row_3)
    
    while not is_game_over:
        player_input("X")
        check_win("X")
        if not is_game_over:
            player_input("O")
            check_win("O")

play()
