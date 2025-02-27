// promisified read file

const fs = require("fs");

function readFileAsync(filePath, encoding = "utf-8") {
  return new Promise((resolve, reject) => {
    fs.readFile("../notes.txt", encoding, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

// Usage example
readFileAsync("example.txt")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
