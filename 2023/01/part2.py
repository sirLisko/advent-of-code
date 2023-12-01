def replace_words_with_numbers(input_string):
    word_to_number = {
        "one": "1",
        "two": "2",
        "three": "3",
        "four": "4",
        "five": "5",
        "six": "6",
        "seven": "7",
        "eight": "8",
        "nine": "9"
    }
    for word, number in word_to_number.items():
        input_string = input_string.replace(word, word + number + word)
    return input_string


with open("input.txt", "r") as file:
    count = 0
    for line in file:
        line = line.strip()
        sanitised_line = replace_words_with_numbers(line)
        filtered_numbers = [
            int(char) for char in sanitised_line if char.isdigit()]
        count += filtered_numbers[0] * 10 + filtered_numbers[-1]

print(count)
