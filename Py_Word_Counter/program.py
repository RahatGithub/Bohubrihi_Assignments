searchWords = ["PHP", "java", "Python", "C", "c++", "python"]

with open('Py_Word_Counter\input.txt', 'r') as file:
    lines = file.readlines() 
    lines = [line.strip().upper() for line in lines]

searchWords = set(map(lambda s: s.upper(), searchWords))

for word in searchWords:
    word = word.upper()
    count = lines.count(word)
    print(f"{word}->{count}")