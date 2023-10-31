searchWords = ["PHP", "Java", "Python", "C", "C++"]

with open('Word_Counter_Py\input.txt', 'r') as file:
    lines = file.readlines() 
    lines = [line.strip() for line in lines]

for word in searchWords:
    count = lines.count(word)
    print(f"{word}->{count}")