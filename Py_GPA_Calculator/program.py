# taking marks as input
marks = list(map(int, input("Enter the marks for MATH, ENGLISH, BANGLA and SCIENCE (in single line, separated by space): ").split()) )

avg = sum(marks)//4

def calculateGrade(avg) :
    if avg<=40 : return 'F'
    elif avg<=60 : return 'D'
    elif avg<=70 : return 'C'
    elif avg<=80 : return 'B'
    elif avg<=90 : return 'A'
    elif avg<=100 : return 'A+' 

grade = calculateGrade(avg)
print(f"Average marks: {avg}\nObtained grade: {grade}")