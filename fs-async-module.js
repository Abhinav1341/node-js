const { readFile, writeFile } = require("fs");

readFile("./folder/sec.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const second = result;
  readFile("./folder/first.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    const first = result;
    writeFile(
      "./folder/result-async.txt",
      `${first} & ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
