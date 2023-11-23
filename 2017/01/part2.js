const fs = require("fs");

fs.readFile("input.txt", "utf8", (err, input) => {
  let sum = 0;
  const digits = input.split("").map(Number);
  const halfway = digits.length / 2;

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === digits[(i + halfway) % digits.length]) {
      sum += digits[i];
    }
  }

  console.log(sum);
});
