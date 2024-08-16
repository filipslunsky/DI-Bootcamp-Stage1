picture = [[0,0,0,1,0,0,0],[0,0,1,1,1,0,0],[0,1,1,1,1,1,0],[1,1,1,1,1,1,1],[0,0,0,1,0,0,0],[0,0,0,1,0,0,0]]
for line in picture:
    line_img = ""
    for pxl in line:
        if pxl == 0:
            line_img += " "
        elif pxl == 1:
            line_img += "*"
    print(line_img)