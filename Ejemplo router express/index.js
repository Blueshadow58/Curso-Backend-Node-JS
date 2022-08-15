const express = require("express");
const multer = require("multer");
const productController = require("./Controllers/productController");
const Product = require("./models/Product");
const router = express.Router();
// const uploadData = multer();
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
// app.use(uploadData.array());

//Multer config
const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + ".jpg");
  },
});

const upload = multer({ storage: storage });

router.post(
  "/productos",
  upload.single("thumbnail"),
  productController.uploadProduct
);

const validateId = (req, res, next) => {
  const producto = Product.getProductById(req.params.id);
  if (!producto) {
    res.send("Este producto no existe");
  }
  next();
};

router.get("/productos", productController.getProducts);

router.get("/productos/:id", validateId, productController.getProductById);

router.delete("/productos/:id", productController.deleteById);

router.put(
  "/productos/:id",
  upload.single("thumbnail"),
  productController.updateById
);

app.use("/api", router);

const PORT = 8080;
app.listen(PORT, () => {
  console.log("server on");
});
