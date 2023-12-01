numbers = {
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9
}

with open("input.txt", "r") as file:
    count = 0

    for line in file:
        line = line.strip()
        filtered_numbers = [int(char) for char in line if char.isdigit()]
        count += filtered_numbers[0] * 10 + filtered_numbers[-1]

print(count)
