# Exercise 3
from exercises import Dog
import random

class PetDog(Dog):
    def __init__(self, name, age, weight, trained = False):
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self):
        self.trained = True
        print(self.bark())
    
    def play(self, *dogs):
        dogs = [dog for dog in dogs]
        dog_string = ", ".join(dogs)
        print(f"{dog_string} and {self.name} are playing together.")
    
    def do_a_trick(self):
        if self.trained:
            tricklist = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]
            trick = random.choice(tricklist)
            print(self.name, trick)
        else:
            print(f"You need to train {self.name} first.")

    
dusty = PetDog("Dusty", 3, 12, False)

dusty.play("Ben", "Matt")

dusty.do_a_trick()

dusty.train()

dusty.do_a_trick()


# Exercise 4
class Family:
    def __init__(self, members:list, last_name:str):
        self.members = members
        self.last_name = last_name
    
    def is_born(self, **kwargs):
        new_child = {}
        for kwarg in kwargs:
            new_child[kwarg] = kwargs[kwarg]
        new_child["age"] = 0
        new_child["is_child"] = True
        self.members.append(new_child)

    def is_18(self, name):
        for member in self.members:
            if member["name"] == name:
                if member["age"] >= 18:
                    return True
                else:
                    return False

    def family_presentation(self):
        print(f"The last name of our family is {self.last_name}.")
        for member in self.members:
            print(f"{member["name"]} is {member["age"]} years old and is {member["gender"]}.")

smiths = Family([
        {'name':'Michael','age':35,'gender':'Male','is_child':False},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False}
    ], "Smith")

smiths.family_presentation()

print(smiths.is_18("Sarah"))

print(smiths.is_18("John"))

smiths.is_born(name = "John", gender = "male")

smiths.family_presentation()

# Exercise 5
class TheIncredibles(Family):
    def use_power(self, name):
        for member in self.members:
            if member["name"] == name:
                if member["age"] >= 18:
                    print(f"{member["name"]} uses {member["power"]}.")
                else:
                    raise Exception("Minors are not allowed to use super powers.")
    def incredible_presentation(self):
        print("Here is our powerful family!")
        super().family_presentation()

incredibles = TheIncredibles([
        {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
    ], "Incredible")


incredibles.incredible_presentation()

incredibles.is_born(name = "Jack", gender = "male", power = "unknown")

incredibles.incredible_presentation()
