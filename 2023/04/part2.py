import re

num_re = re.compile(r'\|\s*([0-9\s]+)$')
win_re = re.compile(r': ([0-9\s]+)\s*\|')


def calculate(n):
    if n == 1:
        return 1
    return 2 ** (n-1)


with open("input.txt", "r") as file:
    count = 0
    lines = []
    for l in file:
        lines.append(l.rstrip())
    card_copies = [1 for _ in lines]
    for card_num, line in enumerate(lines):
        numbers = set(re.search(num_re, line).group(1).split())
        winners = set(re.search(win_re, line).group(1).split())
        common_elements = len(winners.intersection(numbers))
        if (common_elements > 0):
            for i in range(card_num+1, card_num+1+common_elements):
                card_copies[i] += card_copies[card_num]


print(sum(card_copies))
