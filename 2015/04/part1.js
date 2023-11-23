const crypto = require("crypto");

const secretKey = "yzbqklnj";

let number = 1;
let found = false;

while (!found) {
  const hash = crypto
    .createHash("md5")
    .update(secretKey + number)
    .digest("hex");
  if (hash.startsWith("00000")) {
    found = true;
    console.log(number);
  }
  number++;
}
