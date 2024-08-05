# floats and integers are both numbers, however floats have decimal points, integers are only whole numbers

float_list = []


for i in range(0, 8):
    float_list.append(1.5 + 0.5 * i)

print(float_list)

# there are more options how to create the list but we could use a while loop with a counter named i
# i = 0
# while i < 8:
#   float_list.append(1.5 + 0.5 * i)