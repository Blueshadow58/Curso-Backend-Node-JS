const fs = require("fs");

fs.promises.readFile("./fyh.txt", "utf-8", (error, fileData) => {
  if (error) {
    console.log("hubo un error", error);
  } else {
    console.log(fileData);
  }
});

fs.promises
  .readFile("./fyh.txt", "utf-8")
  .then((fileData) => {
    console.log(fileData);
  })
  .catch((err) => console.log(err));
