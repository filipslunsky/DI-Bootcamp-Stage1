class Computer():
    def __init__(self):
        self.name = "Apple Computer" # public, i.e. can be accessed from outside the class
        self.__max_price = 900 # private, i.e. can be accessed only from within the class
    
    def sell(self):                 # public method
        print(f"Selling Price: {self.__max_price}")
        self.__sell()
    
    def __sell(self):               # private method
        print("This is a private method.")
    
    def set_max_price(self, price):
        self.__max_price = price

    def get_max_price(self): # setter
        return self.__max_price

    def set_max_price(self, price): # getter
        self.__max_price = price

c = Computer()
c.sell()


# if we wnat to make a method private but not to return error if someone tries to access it from outside the class, we use just one underscore instead of two

