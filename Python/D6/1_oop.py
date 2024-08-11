# the whole concept started to really kick in in 2000s and 2010s
# principles of OOR
#   1 ABSTRACTION
#       ability to work with the class without      knowinghow the class works, apllies especially to the methods (class functions)
#   2 ENCAPSULATION
#       portfolio of stuff the class has, i.e. variables, methods etc.
#   3 POLYMORPHISM
#       usability for various instances of the class
#   4 INHERITANCE
#       principle of making subclasses

# class Dog():
#     pass

# shelter_dog = Dog()

class Dog():
    def __init__(self, name, age):
        # self.name is the attribute of name within the dog class
        # name is the parameter tha I got in the init function
        self.name = name
        self.age = age
    def whats_your_name(self):
        print(self.name)

sally = Dog("Sally", 1)
sally.whats_your_name()

spot = Dog("Spot", 2)
spot.whats_your_name()

class Person():
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def __repr__(self): # built in function for the class object do to return something directly so that Python knows how to print this person (othewise it only gives the memory address of the object) 
        return f"this person's name is {self.name} and his age is {self.age}"
    def __add__(self, other): # self + other
        return self.age + other.age

# __something__ is called "dunder method" (stands for double underscore), means it is built in to all classes

john = Person("John", 36)
print(john)
peter = Person("Peter", 30)
print(john + peter)

# self argument doesn't need to be there but it will not access the function parameters

class Dog():
    def __init__(self, name_of_the_dog):
        print("A new dog hase been initialized!")
        print("His name is ", name_of_the_dog)
        

ben = Dog("Ben")
