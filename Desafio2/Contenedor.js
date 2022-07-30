class Contenedor {
  constructor(fileName) {
    this.fileName = fileName;
    this.conteo = 0;
    // this.productos = [];
  }

  static conteoGlobal = 0;
  static productos = [];

  conteoGlobal = () => Contenedor.conteoGlobal;

  totalProductos = () => Contenedor.productos;

  addProducto = (producto) => Contenedor.productos.push(producto);

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
    //     // let array = data.map((a) => a.id);
    //     // let da = JSON.parse(data["id"]);
    //     console.log(Object.values(JSON.parse(data)));

    //     // console.log(da.id);
    //   })
    //   .catch((error) => console.log(error));

    this.contar();
    object.id = Contenedor.conteoGlobal;
    this.addProducto(object);
    fs.promises
      .writeFile("./productos.txt", JSON.stringify(this.totalProductos()))
      .then((data) => {
        return console.log(
          `Producto agregado exitosamente con el id: ${object.id}`
        );
      })
      .catch((error) => console.log(error));

    //Devolver id asignada
  };

  static getById = async (idProduct) => {
    let largoArray = this.productos.length;
    if (this.productos.length === 0) {
      console.log("No existen valores");
    } else {
      const fs = require("fs");
      const delay = (ms) => new Promise((res) => setTimeout(res, ms));

      await delay(1500);

      this.productos.map(function (producto) {
        if (producto.id === idProduct) {
          fs.promises
            .readFile("./productos.txt", "utf-8")
            .then((fileData) => {
              return (
                console.log(`Item con el id: ${idProduct}`) +
                console.log(JSON.parse(fileData)[idProduct - 1])
              );
            })
            .catch((err) => console.log(err));
        }
      });
    }
  };

  static getAll = async () => {
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    await delay(2000);
    const fs = require("fs");

    fs.promises
      .readFile("./productos.txt", "utf-8")
      .then((fileData) => {
        console.log(`Todos los items`);
        return console.log(JSON.parse(fileData));
      })
      .catch((err) => console.log(err));
  };

  static deleteById = async (idProduct) => {
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    await delay(2500);
    const fs = require("fs");

    fs.promises
      .readFile("./productos.txt", "utf-8")
      .then((fileData) => {
        let json = JSON.parse(fileData);
        delete json[idProduct - 1];

        //devuelve el array sin nada
        // console.log(`Item sin el id: ${idProduct}`);
        // console.log(json);

        fs.promises
          .writeFile("./productos.txt", JSON.stringify(json))
          .then(() => {
            return console.log(
              `El producto con id: ${idProduct} a sido eliminado del archivo`
            );
          })
          .catch((error) => console.log(error));
      })
      .catch((err) => console.log(err));
  };

  static deleteAll = async () => {
    const fs = require("fs");

    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    await delay(3000);

    fs.promises
      .writeFile("./productos.txt", "")
      .then(() => {
        console.log(`Todos los objectos han sido eliminados`);
      })
      .catch((error) => console.log(error));
  };
}

module.exports = Contenedor;
