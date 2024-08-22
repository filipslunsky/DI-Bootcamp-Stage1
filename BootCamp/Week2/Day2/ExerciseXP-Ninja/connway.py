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

# test_cell = Cell()
# print(test_cell.status)
# test_cell.evaluate_status(4)
# print(test_cell.status)
# -------> tests for cell creation and status evaluate method passed

class Universe:
    def __init__(self, width, height):
        self.plot = []
        for c in range(height):
            row = []
            for r in range(width):
                cell = Cell()
                row.append(cell)
            self.plot.append(row)
    
    def count_neighbors(self):
        pass

# my_universe = Universe(4, 5)
# print(my_universe.plot)
# -------> test for plot creation passed
