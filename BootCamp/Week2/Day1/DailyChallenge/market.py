class Farm:
    def __init__(self, name, slogan = "E-I-E-I-0!"):
        self.name = name
        self.slogan = slogan
        self.animals = {}

    def add_animal(self, animal, amount = 1):
        animal_names = self.animals.keys()
        if animal not in animal_names:
            self.animals[animal] = amount
        else:
            self.animals[animal] += amount

    def get_info(self):
        print(self.name)
        for key, value in self.animals.items():
            print(key, " : ", value)
        print(self.slogan)
        
    
    def get_animal_types(self):
        animal_types = sorted(list(self.animals.keys()))
        return animal_types

    def get_short_info(self):
        animal_list = self.get_animal_types()
        short_info = "McDonald's farm has "
        for i in range(0, len(animal_list) - 2):
            short_info += animal_list[i] + "s, "
        short_info += animal_list[-2] + "s "
        short_info += "and " + animal_list[-1] + "s."
        return short_info
        

macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
macdonald.add_animal("pig", 10)

macdonald.get_info()

print(macdonald.get_animal_types())

print(macdonald.get_short_info())
