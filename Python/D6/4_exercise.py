class Student():
    def __init__(self, name):
        self.name = name
        self.grades = {}

    def add_grade(self, subject, grade):
        self.grades[subject] = grade

    def calculate_average(self):
        if not self.grades:
            return 0
        average = sum(self.grades.values())/len(self.grades)
        return average
    
    def __str__(self):
        return f"The student {self.name} has these grades."

class Gradebook():
    def __init__(self):
        self.students = []
    def add_student(self, student):
        self.students.append(student)
