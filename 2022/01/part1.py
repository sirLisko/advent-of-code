with open("input.txt", "r") as file:
    sums = [0]
    count = 0

    for line in file:
        line = line.strip()
        if not line:
            count += 1
            sums.append(0)
        else:
            sums[count] += int(line)

max_sum = max(sums)

print(max_sum)
