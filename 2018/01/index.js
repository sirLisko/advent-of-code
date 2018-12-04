var fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, input) =>
  console.log(input.split("\n").reduce((a, c) => a + parseInt(c), 0))
);
