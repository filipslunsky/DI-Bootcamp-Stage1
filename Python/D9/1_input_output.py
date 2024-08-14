f = open('secrets.txt') # very important to run the terminal from the same folder
secret_data = f.read()
# secret_data is a string
print(secret_data)
f.close() # always necessary to close the connection


# import os
# relative_path = os.path.join("folder", "secrets.txt")

# this connects the path from the original path to my path


# ------- MODES OF OPENING ----------
# r - read (default)
# w - (re)writing
# a - appending to a file

# f = open("secrets.txt", "w+")
# f.write("This is a new line.")
# f.close()

f = open("secrets.txt", "a+")
f.write = ("kdfshqjsnvneqnvqoklce")
f.close()

f = open("secrets.txt")
new_data = f.read()
print(new_data)
f.close()



