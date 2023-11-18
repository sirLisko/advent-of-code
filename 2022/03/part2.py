with open("input.txt", "r") as file:
    result = 0
    lines = [line.strip() for line in file]
    for i in range(0, len(lines), 3):
        common_chars = set(lines[i]) & set(lines[i+1]) & set(lines[i+2])
        for char in common_chars:
            if char.islower():
                result += ord(char) - ord('a') + 1
            else:
                result += ord(char) - ord('A') + 27

print(result)
