class Animal():
    def __init__(self, type, number_legs, sound):
        self.type = type
        self.number_legs = number_legs
        self.sound = sound

    def print_info(self):
        print(f"This animal is a {self.type}.")
        print(f"This animal has {self.number_legs} legs.")
        print(f"This animal makes the sound {self.sound}.")

    def make_sound(self):
        print(f"I am an animal and I love saying {self.sound}")
    
class Dog(Animal):
    def __init__(self,type, number_legs, sound, breed): # calls the parameteres from parent (no need for them to be in the same order)
        super().__init__(type, number_legs, sound) # calls what to do with those parameteres
        self.breed = breed

    def print_info(self):
        super().print_info() # calls behaviour from the parent for a particular function
        print(f"This dog is a {self.breed}.")
    
    def fetch_ball(self):
        print("I am a dog a I love fetching balls.")


class Dog_golden:
    number_of_dogs = 0 # allows to keep track of instances
    def __init__(self, name, age):
        self.name = name
        self.age = age
        Dog_golden.number_of_dogs += 1

dog1 = Dog_golden("Ben", 2)
dog2 = Dog_golden("Rex", 5)
dog3 = Dog_golden("Buddy", 7)

print(Dog_golden.number_of_dogs)



rex = Dog("dog", "wouaf", 4, "german shepherd")
rex.make_sound()
rex.print_info()
rex.fetch_ball()


