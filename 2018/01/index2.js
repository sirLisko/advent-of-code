const fs = require("fs");

const calibration = (input) => {
  const looping = true;
  const changes = input.split("\n").map(Number);
  const freqs = new Set();
  let frequency = 0;
  while (looping) {
    for (const change of changes) {
      freqs.add(frequency);
      frequency += change;
      if (freqs.has(frequency)) {
        return frequency;
      }
    }
  }
};

fs.readFile("./input.txt", { encoding: "utf8" }, (err, input) =>
  console.log(calibration(input)),
);
