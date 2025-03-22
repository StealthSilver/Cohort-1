// promisified read file

const fs = require("fs");

function readFileAsync(filePath, encoding = "utf-8") {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, encoding, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}


readFileAsync("../notes.txt")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
