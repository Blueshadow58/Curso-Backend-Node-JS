const fs = require("fs");

try {
  const fileData = fs.readFileSync("./fyh.txt", "utf-8");
  console.log(fileData);
} catch (err) {
  console.log(err);
}
