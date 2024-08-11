# Exercise 1
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age
    
luna = Cat("Luna", 3)
milo = Cat("Milo", 10)
oliver = Cat("Oliver", 7)

cats = [luna, milo, oliver]

def find_oldest_cat(cats:list):
    oldest_age = 0
    for cat in cats:
        if cat.age > oldest_age:
            oldest_age = cat.age
            oldest_cat = cat
    return oldest_cat

oldest_cat = find_oldest_cat(cats)
print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")

# Exercise 2
class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height
    
    def __repr__(self):
        return f"Name of the dog: {self.name}, height: {self.height} cm"
    
    def bark(self):
        print(f"{self.name} goes woof!")
    
    def jump(self):
        x = 2 * self.height
        print(f"{self.name} jumps {x} cm high!")
    

davids_dog = Dog("Rex", 50)

print(davids_dog)
davids_dog.bark()
davids_dog.jump()

sarahs_dog = Dog("Teacup", 20)

print(sarahs_dog)
sarahs_dog.bark()
sarahs_dog.jump()

dogs = [davids_dog, sarahs_dog]

if sarahs_dog.height > davids_dog.height:
    bigger_dog = sarahs_dog
elif sarahs_dog.height < davids_dog.height:
    bigger_dog = davids_dog

print(f"{bigger_dog.name} is bigger.")

# Exercise 3
class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics
    
    def sing_me_a_song(self):
        for lyric in self.lyrics:
            print(lyric)
        

stairway = Song(["There's a lady who's sure","all that glitters is gold", "and she's buying a stairway to heaven"])

stairway.sing_me_a_song()

# Exercise 4
from itertools import groupby

class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []
        self.sorted_animals = {}
    
    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
            print(f"We bought a new {new_animal}.")
    
    def get_animals(self):
        for animal in self.animals:
            print(animal)
    
    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"We have sold {animal_sold}.")
    
    def sort_animals(self):
        alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        for i in range(0, len(alphabet)):
            group = []
            for animal in self.animals:
                if alphabet[i] in animal:
                    group.append(animal)
                self.sorted_animals[i + 1] = group
        for number in range(1, 27):
            if len(self.sorted_animals[number]) == 0:
                del self.sorted_animals[number]
        print(self.sorted_animals)
        
    def get_groups(self):
        keys = self.sorted_animals.keys()
        for key in keys:
            print(self.sorted_animals[key])
    

ramat_gan_safari = Zoo("Ramat Gan Safari")
ramat_gan_safari.add_animal("Bear")
ramat_gan_safari.add_animal("Emu")
ramat_gan_safari.add_animal("Cat")
ramat_gan_safari.add_animal("Cougar")
ramat_gan_safari.add_animal("Ape")
ramat_gan_safari.add_animal("Cobra")
ramat_gan_safari.add_animal("Tiger")
ramat_gan_safari.add_animal("Lion")
ramat_gan_safari.add_animal("Eel")
ramat_gan_safari.add_animal("Zebra")

ramat_gan_safari.get_animals()

ramat_gan_safari.sell_animal("Zebra")

ramat_gan_safari.get_animals()

ramat_gan_safari.sort_animals()

ramat_gan_safari.get_groups()
