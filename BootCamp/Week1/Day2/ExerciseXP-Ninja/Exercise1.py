C = 50
H = 30
D_list = input("input three numbers separated with a comma: ").split(",")
Q_list = []

for i in range(0, len(D_list)):
    # Q = Square root of [(2 * C * D)/H]
    Q = ((2 * C * int(D_list[i]))/H) ** (1/2)
    Q_list.append(Q)

print(f"{int(Q_list[0])},{int(Q_list[1])},{int(Q_list[2])}")
