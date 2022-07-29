class Contenedor {
  constructor(fileName) {
    this.fileName = fileName;
    this.conteo = 0;
    this.productos = [];
  }

  static conteoGlobal = 0;

  conteoGlobal = () => {
    return Contenedor.conteoGlobal;
  };

  contar = () => {
    this.conteo++;
    Contenedor.conteoGlobal++;
  };

  save = (object) => {
    const fs = require("fs");

    //jsonArray.push(object);

    // fs.promises
    //   .readFile("./productos.txt", "utf-8")
    //   .then((data) => {
    //     this.contar();
    //     //console.log(data);
    //   })
    //   .catch((error) => console.log(error));

    this.contar();
    console.log(Contenedor.conteoGlobal);
    object.id = Contenedor.conteoGlobal;

    this.productos.push(object);

    fs.promises
      .appendFile("./productos.txt", JSON.stringify(this.productos))
      .then((data) => {
        // console.log(this.conteo);
      })
      .catch((error) => console.log(error));
  };
}

module.exports = Contenedor;
