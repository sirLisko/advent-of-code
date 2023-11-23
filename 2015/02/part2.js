var fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, input) => {
  const calculateSmallestPerimeter = ([l, w, h]) => {
    const perimeters = [2 * (l + w), 2 * (w + h), 2 * (h + l)];
    return Math.min(...perimeters);
  };

  const calculateBowLength = ([l, w, h]) => l * w * h;

  const totalRibbon = input
    .split("\n")
    .slice(0, -1)
    .reduce((total, box) => {
      const dimensions = box.split("x").map(Number);
      const smallestPerimeter = calculateSmallestPerimeter(dimensions);
      const bowLength = calculateBowLength(dimensions);
      return total + smallestPerimeter + bowLength;
    }, 0);

  console.log(totalRibbon);
});
