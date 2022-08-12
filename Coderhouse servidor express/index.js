const express = require("express");

const app = express();

const getMensaje = () => {
  return "<h1 style='color:blue;'>Bienvenido al servidor express de Franco</h1>";
};

app.get("/", (req, res) => {
  res.send(getMensaje());
});

let visitas = 0;
app.get("/visitas", (req, res) => {
  visitas++;
  res.send(`Cantidad de visitas ${visitas}`);
});

app.get("/horas", (req, res) => {
  let date = new Date();
  res.send(`La fecha es ${date}`);
});

// const server = http.createServer((req, res) => {
//   res.end(getMensaje());
// });

const PORT = process.env.PORT || 8080;

const connectedServer = app.listen(PORT, () => {
  console.log(`Servidor express escuchando en el puerto ${PORT}`);
});
