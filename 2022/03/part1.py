with open("input.txt", "r") as file:
    result = 0
    for line in file:
        line = line.strip()
        mid = len(line) // 2

        first_half = set(line[:mid])
        second_half = set(line[mid:])

        common_chars = first_half & second_half
        for char in common_chars:
            if char.islower():
                result += ord(char) - ord('a') + 1
            else:
                result += ord(char) - ord('A') + 27

print(result)
