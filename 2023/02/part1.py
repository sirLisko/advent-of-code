bags = {
    "red": 12,
    "green": 13,
    "blue": 14,
}

with open("input.txt", "r") as file:
    count = 0

    for line in file:
        line = line.strip()
        [number, rounds] = line.split(': ')
        flag = False
        for round in rounds.split(';'):
            for draw in round.split(','):
                [quantity, color] = draw.strip().split(' ')
                if bags[color] < int(quantity):
                    flag = True
                    break
        if flag == False:
            count += int(number.split(' ')[1])


print(count)
