searchWords = ["PHP", "Java", "Python", "C", "C++"]

with open('Py_Word_Counter\input.txt', 'r') as file:
    lines = file.readlines() 
    lines = [line.strip().capitalize() for line in lines]

for word in searchWords:
    count = lines.count(word.capitalize())
    print(f"{word}->{count}")