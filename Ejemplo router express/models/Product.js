class Product {
  constructor(title, price, thumbnail) {
    this.title = title;
    this.price = price;
    this.thumbnail = thumbnail;
  }

  static productos = [];
  static globalCount = 0;

  static addProduct = (title, price, thumbnail) => {
    Product.count();
    const data = new Product(title, price, thumbnail);
    data.id = Product.globalCount;

    Product.productos.push(data);
  };

  static count = () => {
    Product.globalCount++;
  };

  static getAll = () => {
    return Product.productos;
  };

  static getProductById = (id) => {
    const productos = Product.productos;
    const producto = productos.find((x) => x.id === parseInt(id));
    return producto;
  };

  static updateById = (id, title, price, thumbnail) => {
    Product.productos[id - 1].title = title;
    Product.productos[id - 1].price = price;
    Product.productos[id - 1].thumbnail = thumbnail;

    return "Producto actualizado";
  };

  static deleteById = (id) => {
    const productos = Product.productos;
    const producto = productos.splice(id - 1, 1);
    // delete producto;

    return "Producto eliminado";
  };
}

module.exports = Product;
