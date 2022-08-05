const express = require("express");
const Contenedor = require("./Contenedor");
const app = express();

const getMensaje = () => {
  return "<h1 style='color:blue;'>Bienvenido al servidor express de Franco</h1>";
};

app.get("/", (req, res) => {
  res.send(getMensaje());
});

app.get("/productos", (req, res) => {
  res.send(Contenedor.getAll());
});

app.get("/productoRandom", (req, res) => {
  res.send(Contenedor.getRandom());
});

// const server = http.createServer((req, res) => {
//   res.end(getMensaje());
// });

const PORT = process.env.PORT || 8080;

const connectedServer = app.listen(PORT, () => {
  console.log(`Servidor express escuchando en el puerto ${PORT}`);
});
