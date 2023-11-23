var fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, input) => {
  let niceCount = 0;
  input.split("\n").forEach((string) => {
    const vowels = string.match(/[aeiou]/g);
    if (!vowels || vowels.length < 3) {
      return false;
    }

    let hasDoubleLetter = false;
    for (let i = 0; i < string.length - 1; i++) {
      if (string[i] === string[i + 1]) {
        hasDoubleLetter = true;
        break;
      }
    }
    if (!hasDoubleLetter) {
      return false;
    }

    if (
      !(
        string.includes("ab") ||
        string.includes("cd") ||
        string.includes("pq") ||
        string.includes("xy")
      )
    ) {
      niceCount++;
    }
  });

  console.log(niceCount);
});
