var fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, input) => {
  const floor = input.split("").reduce((acc, char) => {
    return char === "(" ? acc + 1 : char === ")" ? acc - 1 : acc;
  }, 0);
  console.log(floor);
});
