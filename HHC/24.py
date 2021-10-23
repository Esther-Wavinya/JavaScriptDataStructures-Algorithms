sum = 0
for i in range(int(input())):
    if i % 3 == 0 or i % 5 == 0:
        sum += i
print(sum)