// async await syntax

const fs = require("fs").promises;

async function readFileAsync(filePath, encoding = "utf-8") {
  try {
    const data = await fs.readFile(filePath, encoding);
    return data;
  } catch (err) {
    throw err;
  }
}

// Usage example
(async () => {
  try {
    const data = await readFileAsync("../notes.txt");
    console.log(data);
  } catch (err) {
    console.error(err);
  }
})();
