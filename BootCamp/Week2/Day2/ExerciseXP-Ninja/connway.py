import random

class Cell:
    def __init__(self):
        self.status = random.randint(0,1)
    
    def evaluate_status(self, neigbors_alive):
        if self.status == 1 and neigbors_alive < 2:
            self.status = 0
        elif (self.status == 1 and neigbors_alive == 2) or (self.status == 1 and neigbors_alive == 3):
            self.status = 1
        elif self.status == 1 and neigbors_alive > 3:
            self.status = 0
        elif self.status == 0 and neigbors_alive == 3:
            self.status = 1

class Universe:
    def __init__(self, width, height):
        self.width = width
        self.height = height
        self.plot = []
        for r in range(self.height):
            row = []
            for c in range(self.width):
                cell = Cell()
                row.append(cell)
            self.plot.append(row)
    
    def count_live_neighbors(self):
        plot_scores = []
        for r in range(self.height):
            row_scores = []
            for c in range(self.width):
                score = 0
                for dr in (-1, 0, 1):
                    for dc in (-1, 0, 1):
                        if dr == 0 and dc == 0:
                            continue
                        nr, nc = r + dr, c + dc
                        if 0 <= nr < self.height and 0 <= nc < self.width:
                            if self.plot[nr][nc].status == 1:
                                score += 1
                row_scores.append(score)
            plot_scores.append(row_scores)
        return plot_scores
    
    def next_generation(self):
        plot_scores = self.count_live_neighbors()
        for r in range(self.height):
            for c in range(self.width):
                cell = self.plot[r][c]
                cell.evaluate_status(plot_scores[r][c])
            
    def display_universe(self):
        plot_states = []
        for r in range(self.height):
            row = []
            for c in range(self.width):
                cell = self.plot[r][c]
                cell_status = cell.status
                row.append(cell_status)
            plot_states.append(row)
        return plot_states


def get_gui(picture):
    for line in picture:
        line_img = ""
        for pxl in line:
            if pxl == 0:
                line_img += " "
            elif pxl == 1:
                line_img += "*"
        print(line_img)

def make_alive(width, height, number_gen):
    universe = Universe(width, height)
    picture = universe.display_universe()
    get_gui(picture)
    
    for i in range(number_gen):
        universe.next_generation()
        picture = universe.display_universe()
        get_gui(picture)


make_alive(50, 50, 1000)

