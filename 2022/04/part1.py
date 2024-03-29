with open("input.txt", "r") as file:
    result = 0
    for line in file:
        pair = line.strip().split(',')
        first_start, first_end = map(int, pair[0].split('-'))
        second_start, second_end = map(int, pair[1].split('-'))

        if (first_start >= second_start and first_end <= second_end) \
                or (second_start >= first_start and second_end <= first_end):
            result += 1

print(result)
