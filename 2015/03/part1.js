const fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, input) => {
  const visitedHouses = new Set();
  let x = 0;
  let y = 0;

  visitedHouses.add(`${x},${y}`);

  for (let i = 0; i < input.length; i++) {
    const direction = input.charAt(i);

    switch (direction) {
      case "^":
        y++;
        break;
      case "v":
        y--;
        break;
      case ">":
        x++;
        break;
      case "<":
        x--;
        break;
      default:
        break;
    }

    visitedHouses.add(`${x},${y}`);
  }

  console.log(visitedHouses.size);
});
