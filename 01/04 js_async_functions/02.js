// read file function

const fs = require("fs");

fs.readFile("../notes.txt", "utf-8", function (err, data) {
  console.log(data);
});
