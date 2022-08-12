const Product = require("../models/Product");
const multer = require("multer");
const { useParams } = require("react-router-dom");

exports.uploadProduct = (req, res, next) => {
  const { file } = req;
  const { title, price } = req.body;
  if (!file) {
    //Caso de error
    const error = new Error("porfavor no deje campos vacios");
    error.httpStatus = 400;
    return next(error);
  }
  //   const producto = new Product(title, price, file);
  Product.addProduct(title, price, file);
  //caso de existo

  const lastElement = Product.getAll();

  res.send(lastElement[lastElement.length - 1]);
};

exports.getProducts = (req, res, next) => {
  res.send(Product.getAll());
};

exports.getProductById = (req, res, next) => {
  res.send(Product.getProductById(req.params.id));
};

exports.deleteById = (req, res, next) => {
  res.send(Product.deleteById(req.params.id));
};

exports.updateById = (req, res, next) => {
  const id = req.params.id;
  const title = req.query.title;
  const price = req.query.price;
  const thumbnail = req.query.thumbnail;

  res.send(Product.updateById(id, title, price, thumbnail));
};
