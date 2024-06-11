const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync(`./folder/first.txt`, `utf8`);
const second = readFileSync(`./folder/sec.txt`, `utf8`);

writeFileSync(
  `./folder/result-sync.txt`,
  `Here is the Joined String: ${first}, ${second}`,
  { flag: "a" }
);
