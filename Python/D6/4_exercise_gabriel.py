class Student:
    def __init__(self, name):
        # Initialize the name and an empty dictionary for grades
        self.name = name
        self.grades = {}

    def add_grade(self, subject, grade):
        # Add or update the grade for the given subject
        self.grades[subject] = grade

    def calculate_average(self):
        # Calculate and return the average grade
        if not self.grades:
            return 0
        return sum(self.grades.values()) / len(self.grades)

    def __str__(self):
        # Return a string representation of the student with their grades
        grades_str = ', '.join(f'{subject}: {grade}' for subject, grade in self.grades.items())
        return f'{self.name} - Grades: {grades_str}'

class Gradebook:
    def __init__(self):
        # Initialize an empty list to hold students
        self.students = []

    def add_student(self, student):
        # Add the student to the gradebook
        self.students.append(student)

    def find_student(self, name):
        # Find and return the student with the given name
        for student in self.students:
            if student.name == name:
                return student
        return f'Student {name} not found in the gradebook.'

    def display_all_students(self):
        # Display the information of all students
        for student in self.students:
            print(student)

# Usage Example
student1 = Student("Alice")
student2 = Student("Bob")

gradebook = Gradebook()
gradebook.add_student(student1)
gradebook.add_student(student2)

student1.add_grade("Math", 90)
student1.add_grade("English", 85)
student2.add_grade("Math", 78)
student2.add_grade("Science", 88)

print(f"{student1.name}'s average grade: {student1.calculate_average()}")
print(f"{student2.name}'s average grade: {student2.calculate_average()}")

gradebook.display_all_students()
print(student1)