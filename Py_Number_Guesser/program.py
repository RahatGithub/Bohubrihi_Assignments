import random 
correctAns = random.randint(1,50)
low,high = 1,50

print("[Your guess should be in the range of 1 to 50]\n\n")

flag = 0
for i in range(5):
    inputNum = int(input("Enter your guess:"))
    if inputNum == correctAns: 
        print(f">>You win! correct ans: {correctAns}")
        flag = 1
        break 
    elif inputNum > correctAns:
        print(">>correct ans is smaller")
    elif inputNum < correctAns:
        print(">>correct ans is greater")

if flag == 0:
    print(f">>You lose! correct ans: {correctAns}")