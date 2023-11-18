var fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, directions) => {
  const result = directions.split("").reduce(
    (acc, char, index) => {
      if (acc.floor === -1) {
        return acc;
      }

      if (char === "(") {
        acc.floor++;
      } else if (char === ")") {
        acc.floor--;
      }

      if (acc.floor === -1) {
        acc.position = index + 1;
      }

      return acc;
    },
    { floor: 0, position: -1 },
  );

  console.log(result.position);
});
