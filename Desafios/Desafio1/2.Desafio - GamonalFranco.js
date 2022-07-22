class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  getFullName = () => {
    return `Tu Nombre completo es ${this.nombre} ${this.apellido}`;
  };

  addMascota = (mascota) => {
    this.mascotas.push(mascota);
  };

  countMascotas = () => {
    return this.mascotas.length;
  };

  addBook = (nombre, autor) => {
    this.libros.push([
      {
        nombre: nombre,
        autor: autor,
      },
    ]);
  };

  getBooksNames = () => {
    let resultado = [];
    this.libros.map((libros) => {
      resultado.push(libros);
    });
    return resultado;
  };
}

usuario = new Usuario(
  "Franco",
  "Gamonal",
  [{ nombre: "Time Travel", autor: "Jhon Titor" }],
  ["Perro", "Gato"]
);

usuario.addBook("Fundacion", "Isaac Asimov");
usuario.addBook("El Señor de las moscas", "William Golding");

console.log(usuario.getBooksNames());
