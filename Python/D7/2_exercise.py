class Vehicle():
    def __init__(self, make, model):
        self.make = make
        self.model = model
    
    def start(self):
        print(f"{self.make} {self.model} is starting.")
    
    def stop(self):
        print(f"{self.make} {self.model} is stopping.")
    

class Car(Vehicle):
    def __init__(self, make, model, number_of_doors):
        super().__init__(make, model)
        self.number_of_doors = number_of_doors
    
    def open_trunk(self):
        print(f"Opening trunk of {self.make} {self.model}.")
    

class Motorcycle(Vehicle):
    def __init__(self, make, model, has_sidecar):
        super().__init__(make, model)
        self.has_sidecar = has_sidecar
    
    def pop_wheelie(self):
        print(f"{self.make} {self.model} is popping a wheelie.")

car1 = Car("Toyota", "Corolla", 5)
motorcycle1 = Motorcycle("Harley Davidson", "Street 750", False)

car1.start()
car1.open_trunk()
car1.stop()
motorcycle1.start()
motorcycle1.pop_wheelie()
motorcycle1.stop()

