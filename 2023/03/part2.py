import re

num_re = re.compile(r'\d+')
token_re = re.compile(r'[^\d\.]{1}')


def is_adjacent_y(match_y, token_y):
    return match_y <= token_y + 1 and match_y >= token_y - 1


def is_adjacent_x(start_x, end_x, token_x):
    return start_x <= token_x + 1 and end_x >= token_x - 1


def is_adjacent(item, token_x, token_y):
    return is_adjacent_x(item['start'], item['end'], token_x) and is_adjacent_y(item['line'], token_y)


with open("input.txt", "r") as file:
    gear_sum = 0
    data, tokens = [], []
    for i, line in enumerate(file):
        numbers = num_re.finditer(line)
        for number in numbers:
            data.append({'match': number.group(
                0), 'start': number.start(), 'end': number.end() - 1, 'line': i})
        matches = token_re.finditer(line.strip())
        for match in matches:
            tokens.append({'match': match.group(
                0), 'idx': match.start(), 'line': i})

    for token in tokens:
        token_matches = [item for item in data if is_adjacent(
            item, token['idx'], token['line'])]
        if len(token_matches) == 2:
            gear_sum += int(token_matches[0]['match']) * \
                int(token_matches[1]['match'])

    print(gear_sum)
