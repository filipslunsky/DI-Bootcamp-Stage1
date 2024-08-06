student_grades = {
    "Alice": [88, 92, 100],
    "Bob": [75, 78, 80],
    "Charlie": [92, 90, 85],
    "Dana": [83, 88, 92],
    "Eli": [78, 80, 72]
}

# calculating averages for students and adding to a new dictionary
student_averages = {}

for key in student_grades:
    average = sum(student_grades[key])/len(student_grades[key])
    student_averages[key] = average

# calculating the grades and adding to a new dictionary
student_letter_grades = {}

for key in student_averages:
    grade = ""
    if student_averages[key] >= 90:
        grade = "A"
    elif student_averages[key] >= 80 and student_averages[key] < 90:
        grade = "B"
    elif student_averages[key] >= 70 and student_averages[key] < 80:
        grade = "C"
    elif student_averages[key] >= 60 and student_averages[key] < 70:
        grade = "D"
    elif student_averages[key] < 60:
        grade = "F"
    student_letter_grades[key] = grade

# calculating the class average
averages = []

for key in student_averages:
    averages.append(student_averages[key])

class_average = sum(averages)/len(averages)

# printing out the results
print(f"The class average is {class_average}.")

for key in student_averages:
    print(f"{key} reached the score of {student_averages[key]} and received {student_letter_grades[key]}.")


