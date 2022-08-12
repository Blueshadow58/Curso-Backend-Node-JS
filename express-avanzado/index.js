const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// crear los endpoints necesarios para realizar todas las operaciones sobre una lista de usuarios {nombre: '', id: ''}
const listaUsuarios = [];

// crear un usuario
app.post("/usuario", (req, res) => {
  const data = req.body;
  console.log(data);

  if (!data) {
    res.sendStatus(400);
  }

  listaUsuarios.push(data);

  res.send(listaUsuarios);
});

// listar todos los usuarios
app.get("/usuario", (req, res) => {
  res.send(listaUsuarios);
});

// traer un solo usuario con un id
app.get("/usuario/:id", () => {});

// eliminar todos los usuarios
app.delete("/usuario", () => {});

// eliminar el usuario con un id
app.delete("/usuario/:id", () => {});

// modificar el usuario con un id
app.put("/usuario/:id", () => {});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
