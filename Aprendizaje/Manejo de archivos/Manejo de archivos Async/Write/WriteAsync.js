const fs = require("fs");

fs.promises
  .writeFile("./fyh.txt", "Ejemplo ")
  .then(() => console.log("escrito"))
  .catch((error) => console.log(error));

fs.promises
  .readFile("./fyh.txt", "utf-8")
  .then((fileData) => console.log(fileData))
  .catch((error) => console.log(error));

//Promesas con aysnc await
async function leer() {
  try {
    await fs.promises.writeFile("./fyh.txt", "Ejemplo escritura");
    const fileData = await fs.promises.readFile("./fyh.txt", "utf-8");
    console.log(fileData);
  } catch (error) {
    console.log(error);
  }
}
