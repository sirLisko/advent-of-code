var fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, input) => {
  let niceCount = 0;
  input.split("\n").forEach((string) => {
    let hasPairTwice = false;
    for (let i = 0; i < string.length - 1; i++) {
      const pair = string.substring(i, i + 2);
      const remaining = string.substring(i + 2);
      if (remaining.includes(pair)) {
        hasPairTwice = true;
        break;
      }
    }
    if (!hasPairTwice) {
      return;
    }

    let hasRepeatingLetter = false;
    for (let i = 0; i < string.length - 2; i++) {
      if (string[i] === string[i + 2]) {
        niceCount++;
        break;
      }
    }
  });
  console.log(niceCount);
});
