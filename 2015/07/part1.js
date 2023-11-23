const fs = require("fs");

const BITWISE_METHODS = {
  AND: (a, b) => a & b,
  OR: (a, b) => a | b,
  NOT: (a) => ~a,
  LSHIFT: (a, b) => a << b,
  RSHIFT: (a, b) => a >> b,
};

const wires = new Map();

const parseInstruction = (instruction) => {
  const command = instruction.match(/[A-Z]+/g);
  const args = instruction.match(/[a-z0-9]+/g);
  const destination = args.pop();

  return {
    command: command && command[0],
    args: args.map((arg) => (isNaN(Number(arg)) ? arg : Number(arg))),
    destination: destination,
  };
};

const calculateWire = (wireName) => {
  const wire = wires.get(wireName);

  if (typeof wireName === "number") return wireName;
  if (typeof wire === "number") return wire;
  if (typeof wire === "undefined") return undefined;

  if (!wire.command) {
    wires.set(wireName, calculateWire(wire.args[0]));
  } else {
    wires.set(
      wireName,
      BITWISE_METHODS[wire.command](
        calculateWire(wire.args[0]),
        calculateWire(wire.args[1]),
      ),
    );
  }

  return wires.get(wireName);
};

fs.readFile("./input.txt", "utf8", (err, input) => {
  input.split("\n").forEach((instruction) => {
    const parsedInstruction = parseInstruction(instruction);
    wires.set(parsedInstruction.destination, {
      command: parsedInstruction.command,
      args: parsedInstruction.args,
    });
  });
  console.log(calculateWire("a"));
});
