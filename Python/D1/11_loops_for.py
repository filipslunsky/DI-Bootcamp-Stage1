# for loop is below
# 1, 2, 3, 4, 5

# range(a/starting point/, b/ending point, c/increment can be omitted and is 1 by default/)

for step in range(0, 5, 1):
    print("Hello")
print("Loop has ended")


# in the case below can be used instead of range(); the numbers don't have to be ordered
for step in [0, 1, 2, 3, 4]:
    print(f"step number {step + 1}")

for step in ["zero", 1, "two", 3, 4]:
    print(f"step number {step}")

for char in "ABCDEF":
    print(char)

