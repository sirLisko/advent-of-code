const fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, input) => {
  const visitedHouses = new Set();
  let santaX = 0;
  let santaY = 0;
  let roboX = 0;
  let roboY = 0;
  let isSantaTurn = true;

  visitedHouses.add(`${santaX},${santaY}`);

  for (let i = 0; i < input.length; i++) {
    const direction = input.charAt(i);

    if (isSantaTurn) {
      switch (direction) {
        case "^":
          santaY++;
          break;
        case "v":
          santaY--;
          break;
        case ">":
          santaX++;
          break;
        case "<":
          santaX--;
          break;
        default:
          break;
      }

      visitedHouses.add(`${santaX},${santaY}`);
    } else {
      switch (direction) {
        case "^":
          roboY++;
          break;
        case "v":
          roboY--;
          break;
        case ">":
          roboX++;
          break;
        case "<":
          roboX--;
          break;
        default:
          break;
      }

      visitedHouses.add(`${roboX},${roboY}`);
    }

    isSantaTurn = !isSantaTurn;
  }

  console.log(visitedHouses.size);
});
