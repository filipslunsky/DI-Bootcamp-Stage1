fs = open("hello.txt", "w+")
position = fs.tell()
print(position)
fs.write("Hello worldddddd")

fs.seek(1)
position = fs.tell()
print(position)
content = fs.read()
position = fs.tell()
print(position)
fs.close()
print(content)
