# it is good practice to access all external resources, i.e. files, servers, APIs etc. to put it into try-except blocks and catch errors

try:
    f = open("secrets2.txt", "w+")
    for i in range(1, 11):
        f.write(f"secret number {i}\n")
except FileNotFoundError as e:
    print("file was not found")
    print(e)
finally:
    try:
        f.close()
        print("file closed")
    except NameError as e:
        print("file was never opened")
        print(e)


# another easier version how to do this is with-clause (closes the file on its own)
# closing is called "clean-up phase"
with open("secrets.txt", "r") as f:
    content = f.read()
    print(content)


