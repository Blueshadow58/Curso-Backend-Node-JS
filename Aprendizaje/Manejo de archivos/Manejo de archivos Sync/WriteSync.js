const fs = require("fs");
const fecha = date();

try {
  fs.writeFileSync("./fyh.txt", fecha);
  console.log(fileData);
} catch (err) {
  console.log(err);
}
