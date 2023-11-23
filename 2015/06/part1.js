const fs = require("fs");

const grid = [];
for (let i = 0; i < 1000; i++) {
  grid.push(Array(1000).fill(false));
}

fs.readFile("./input.txt", "utf8", (err, input) => {
  input.split("\n").forEach((instruction) => {
    if (!instruction) {
      return;
    }
    const matches = instruction.match(/(\d+)/g);
    const action = instruction.startsWith("turn on")
      ? 1
      : instruction.startsWith("turn off")
        ? 0
        : 2;
    const [startX, startY, endX, endY] = matches.map(Number);

    for (let x = startX; x <= endX; x++) {
      for (let y = startY; y <= endY; y++) {
        if (action === 1) {
          grid[x][y] = true;
        } else if (action === 0) {
          grid[x][y] = false;
        } else {
          grid[x][y] = !grid[x][y];
        }
      }
    }
  });
  let count = 0;
  for (let x = 0; x < 1000; x++) {
    for (let y = 0; y < 1000; y++) {
      if (grid[x][y]) {
        count++;
      }
    }
  }

  console.log(count);
});
