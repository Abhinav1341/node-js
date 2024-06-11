const path = require("path");
console.log(path.sep);

//filePath
const fPath = path.join("/folder", "subfolder", "text.txt");
console.log(fPath);

const baseName = path.basename(fPath);
console.log(baseName);

//absolute path of this file
const abs = path.resolve(__filename);
console.log(abs);
