const Contenedor = require("./Contenedor");

//Archivo con el que se va a trabajar
const fileName = "productos.text";
//Inicializacion de una instancia de contenedor
contenedor1 = new Contenedor(fileName);
contenedor2 = new Contenedor(fileName);
contenedor3 = new Contenedor(fileName);

const product1 = {
  title: "Laptop",
  price: "300.000",
  //   thumbnail:
  //     "https://www.clickyarregla.com/wp/wp-content/uploads/2016/03/laptop-png-6759.png",
};

const product2 = {
  title: "Monitor",
  price: "200.000",
  //   thumbnail:
  //     "https://images.samsung.com/is/image/samsung/mx-sr35-ls24r350fhlxzx-frontblack-248705432?$650_519_PNG$",
};

const product3 = {
  title: "Mouse",
  price: "50.000",
  //   thumbnail: "https://dojiw2m9tvv09.cloudfront.net/48881/product/cor7139.jpg",
};

contenedor1.save(product1);
contenedor2.save(product2);
contenedor3.save(product3);
