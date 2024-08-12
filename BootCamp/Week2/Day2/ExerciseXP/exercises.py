# Exercise 1
class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'

mina = Bengal("Mina", 7)
daisy = Chartreux("Daisy", 3)
bell = Siamese("Bell", 4)

all_cats = [mina, daisy, bell]

sara_pets = Pets(all_cats)

sara_pets.walk()

# Exercise 2
class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight
    
    def bark(self):
        return f"{self.name} is barking."
    
    def run_speed(self):
        self.run_speed = self.weight/self.age * 10
        return self.run_speed
    
    def fight(self, other_dog):
        dog_fight_index = self.run_speed() * self.weight
        other_dog_fight_index = other_dog.run_speed() * other_dog.weight
        if dog_fight_index > other_dog_fight_index:
            return f"{self.name} wins the fight."
        elif dog_fight_index < other_dog_fight_index:
            return f"{other_dog.name} wins the fight."
        elif dog_fight_index == other_dog_fight_index:
            return f"The fight is tied."
    



rex = Dog("Rex", 7, 25)
ben = Dog("Ben", 4, 12)
tim = Dog("Tim", 6, 30)

print(rex.bark())
print(ben.bark())
print(tim.bark())

print(rex.fight(ben))


# Exercise 3
