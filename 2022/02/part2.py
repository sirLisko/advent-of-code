# Rock = A, X
# Paper = B, Y
# Scissors = C, Z
# X lose
# Y draw
# Z win

points = {
    "X": 1,
    "Y": 2,
    "Z": 3,
}

point_results = {
    "X": 0,
    "Y": 3,
    "Z": 6,
}

results = {
    "A": {
        "X": "Z",
        "Y": "X",
        "Z": "Y",
    },
    "B": {
        "X": "X",
        "Y": "Y",
        "Z": "Z",
    },
    "C": {
        "X": "Y",
        "Y": "Z",
        "Z": "X",
    },
}

with open("input.txt", "r") as file:
    result = 0
    for line in file:
        line = line.strip()
        result += (points[results[line[0]][line[2]]] + point_results[line[2]])

print(result)
