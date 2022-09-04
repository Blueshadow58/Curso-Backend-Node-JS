const express = require("express");
const port = process.env.port || 8080;
const { engine } = require("express-handlebars");
const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

const champList = [{ nombre: "Jarvan IV" }, { nombre: "Teemo" }];

app.get("/", (req, res) => {
  res.render("datos", { champList, listExist: true });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
