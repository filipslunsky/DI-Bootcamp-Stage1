def calculation(a, b):
    addition = a + b
    subtraction = a - b
    return [addition, subtraction] # if we don'specify, default is a tuple

res = calculation(5, 4)

print(res)
