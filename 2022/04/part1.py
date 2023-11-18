# Rock = A, X
# Paper = B, Y
# Scissors = C, Z

points = {
    "X": 1,
    "Y": 2,
    "Z": 3,
}

results = {
    "A": {
        "X": 3,
        "Y": 6,
        "Z": 0,
    },
    "B": {
        "X": 0,
        "Y": 3,
        "Z": 6,
    },
    "C": {
        "X": 6,
        "Y": 0,
        "Z": 3,
    },
}

with open("input.txt", "r") as file:
    result = 0
    for line in file:
        line = line.strip()
        result += results[line[0]][line[2]] + points[line[2]]

print(result)
