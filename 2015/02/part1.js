var fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, input) => {
  const calculateSurfaceArea = ([l, w, h]) => 2 * (l * w + w * h + h * l);
  const calculateSmallestSide = ([l, w, h]) => Math.min(l * w, w * h, h * l);

  const totalPaper = input
    .split("\n")
    .slice(0, -1)
    .reduce((total, box) => {
      const dimensions = box.split("x").map(Number);
      const surfaceArea = calculateSurfaceArea(dimensions);
      const smallestSide = calculateSmallestSide(dimensions);
      return total + surfaceArea + smallestSide;
    }, 0);

  console.log(totalPaper);
});
