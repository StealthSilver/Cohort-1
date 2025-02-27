// busy waiting

const fs = require("fs");

fs.readFile("../notes.txt", "utf-8", function (err, data) {
  console.log(data);
});

// this will run first
console.log("hello");

// time taking operation -> busy waiting
let a = 0;
for (let i = 0; i < 1000000; i++) {
  a++;
}

// this will run second and the read file will resolve but keep waiting this to run
console.log("hi there");
