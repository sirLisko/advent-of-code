import re

num_re = re.compile(r'\|\s*([0-9\s]+)$')
win_re = re.compile(r': ([0-9\s]+)\s*\|')


def calculate(n):
    if n == 1:
        return 1
    return 2 ** (n-1)


with open("input.txt", "r") as file:
    count = 0
    for line in file:
        winners = set(re.search(win_re, line).group(1).split())
        numbers = set(re.search(num_re, line).group(1).split())
        common_elements = len(winners.intersection(numbers))
        if (common_elements > 0):
            count += calculate(common_elements)

print(count)
