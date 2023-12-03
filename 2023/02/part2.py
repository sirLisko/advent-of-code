
with open("input.txt", "r") as file:
    total_power = 0

    for line in file:
        line = line.strip()
        bags = {
            "red": 0,
            "green": 0,
            "blue": 0,
        }
        [number, rounds] = line.split(': ')
        for round in rounds.split(';'):
            for draw in round.split(','):
                [quantity, color] = draw.strip().split(' ')
                bags[color] = max(bags[color], int(quantity))

        power = bags['red'] * bags['green'] * bags['blue']
        total_power += power

print(total_power)
