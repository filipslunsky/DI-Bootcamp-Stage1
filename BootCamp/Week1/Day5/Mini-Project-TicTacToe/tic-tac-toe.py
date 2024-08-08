row_1 = [" ", " ", " "]
row_2 = [" ", " ", " "]
row_3 = [" ", " ", " "]

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
    row = input(f"Player {player}, enter row (1 - 3): ")
    column = input(f"Player {player}, enter column (1 - 3): ")

    column_number = int(column)

    if row == "1":
        row_1[column_number - 1] = player
    elif row == "2":
        row_2[column_number - 1] = player
    elif row == "3":
        row_3[column_number - 1] = player
    
    display_board(row_1, row_2, row_3)

def check_win(player):
    col_1 = [row_1[0], row_2[0], row_3[0]]
    col_2 = [row_1[1], row_2[1], row_3[1]]
    col_3 = [row_1[2], row_2[2], row_3[2]]
    diag_1 = [row_1[0], row_2[1], row_3[2]]
    diag_2 = [row_1[2], row_2[1], row_3[0]]

    win_check_list = [row_1.count(player), row_2.count(player), row_3.count(player), col_1.count(player), col_2.count(player), col_3.count(player), diag_1.count(player), diag_2.count(player)]

    if 3 in win_check_list:
        print(f"Player {player} is the winner!")

def play():
    print("Welcome to TIC TAC TOE")

    display_board(row_1, row_2, row_3)
    
    for i in range(0, 5):
        player_input("X")
        check_win("X")
        player_input("O")
        check_win("O")

play()
