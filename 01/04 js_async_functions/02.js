// read file function

const fs = require("fs");

fs.readFile("../notes.txt", "utf-8", function (err, data) {
  console.log(data);
});

// this will run first and then only read file will run
console.log("hi there");
