def box_printer(*args):
    longest_arg = ""
    for arg in args:
        if arg > longest_arg:
            longest_arg = arg

    width = 4 + len(longest_arg)
    top_bottom = ""
   
    for i in range(0, width):
        top_bottom += "*"
    
    print(top_bottom)
    
    for arg in args:
        spacer_size = width - 4 - len(arg)
        spacer = ""
        
        for i in range(0, spacer_size):
            spacer += " "
        
        print(f"* {arg}{spacer} *")
    
    print(top_bottom)


box_printer("Hello", "World", "in", "reallylongword", "a", "frame")
box_printer("It's", "supercalifragilisticexpialidocious", "and", "I", "love", "it", "sooooooo", "much")
