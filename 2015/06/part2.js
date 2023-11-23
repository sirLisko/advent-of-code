const fs = require("fs");

const grid = [];
for (let i = 0; i < 1000; i++) {
  grid.push(Array(1000).fill(0));
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
        ? -1
        : 2;
    const [startX, startY, endX, endY] = matches.map(Number);

    for (let x = startX; x <= endX; x++) {
      for (let y = startY; y <= endY; y++) {
        if (action === 1) {
          grid[x][y] += 1;
        } else if (action === -1) {
          grid[x][y] = Math.max(0, grid[x][y] - 1);
        } else {
          grid[x][y] += 2;
        }
      }
    }
  });

  let totalBrightness = 0;
  for (let x = 0; x < 1000; x++) {
    for (let y = 0; y < 1000; y++) {
      totalBrightness += grid[x][y];
    }
  }

  console.log(totalBrightness);
});
