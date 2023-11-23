const fs = require("fs");

fs.readFile("input.txt", "utf8", (err, input) => {
  let sum = 0;
  const digits = input.split("").map(Number);

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === digits[(i + 1) % digits.length]) {
      sum += digits[i];
    }
  }

  console.log(sum);
});
