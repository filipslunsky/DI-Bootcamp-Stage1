# ------ DECORATORS -------
# deocrator is delcared with @
#   typically:
#               @staticmethod
#               @classmethod
#               @property

def my_decorator(func):
    def wrapper():
        print("something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

@my_decorator
def say_hello():
    print("Hello")

say_hello()


def my_decorator2(func):
    def wrapper(a, b):
        print("something is happening before the function is called.")
        func(a, b)
        print("Something is happening after the function is called.")
    return wrapper

@my_decorator2
def add(a, b):
    print(a + b)

add(2, 3)

# decorators are pretty useful if we want to measure time of function execution

# there are predefined decorators - @staticmethod, @classmethod, @property etc.

class MyClass: # this class is just used to bundle functions, not necessarily used for building objects
    @staticmethod
    def add(a, b):
        return a + b

print(MyClass.add(3, 6))

# @classmethod
class MyClass2:
    __counter = 0

@classmethod
def add(cls, a):  # passing the own class inside itself, NOT THE OBJECT CREATED FROM THE CLASS
    return cls.__counter + a


# @property
# turns a method into a property

class MyClass3:
    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name
    
    @property
    def email(self):
        return f"{self.first_name}.{self.last_name}@gmail.com"
    
guy = MyClass3("John", "Doe")
print(guy.email) # calling the email as a property, not a method, i.e. wothout ()

# property is very useful to be a getter of private function




