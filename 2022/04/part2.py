with open("input.txt", "r") as file:
    result = 0
    for line in file:
        pair = line.strip().split(',')
        first_start, first_end = map(int, pair[0].split('-'))
        second_start, second_end = map(int, pair[1].split('-'))

        if not (first_end < second_start or second_end < first_start):
            result += 1

print(result)
