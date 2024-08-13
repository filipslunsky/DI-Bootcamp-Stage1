import math

class Circle:
    circles = []
    
    def __init__(self, radius):
        self.radius = radius
        self.circles.append(radius)
    
    def __repr__(self):
        return f"I am a circle of radius {self.radius}, diameter {self.diameter} and {self.circumference} circumference. My area is {self.area}."
    
    def __add__(self, other):
        sum = self.radius + other.radius
        return Circle(sum)
    
    def __eq__(self, other):
        if isinstance(other, Circle):
            return self.radius == other.radius
        else:
            return False
        
    def __lt__(self, other):
        if isinstance(other, Circle):
            return self.radius < other.radius
        else:
            return False
        
    def __gt__(self, other):
        if isinstance(other, Circle):
            return self.radius > other.radius
        else:
            return False

    @property
    def diameter(self):
        diameter = self.radius * 2
        return diameter

    @property
    def circumference(self):
        circumference = 2 * self.radius * math.pi
        return circumference

    @property
    def area(self):
        area = self.radius ** 2 * math.pi
        return area
    
    def sort_circles():
        return list(sorted(Circle.circles))
    

circle1 = Circle(5)
circle2 = Circle(8)
circle3 = Circle(3)
circle4 = Circle(12)

print(circle3)

circle5 = circle1 + circle2
print(circle5)

circle6 = circle1 + circle3
print(circle6)

print(circle1 < circle2)
print(circle2 == circle6)
print(circle5 < circle4)

print(Circle.circles)

print(Circle.sort_circles())


# BONUS - turtle drawing

from turtle import Turtle
sorted_circles = Circle.sort_circles()

def get_circonference(radius):
    return 2 * radius * math.pi

turtle_feed = list(map(get_circonference, sorted_circles))

t = Turtle()
t.speed(1)

for circle in turtle_feed:
    t.circle(circle)

