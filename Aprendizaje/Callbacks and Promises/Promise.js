function dividir(dividendo, divisor) {
  return new Promise((resolve, reject) => {
    if (divisor == 0) {
      reject("no se puede dividir por 0");
    } else {
      resolve(dividendo / divisor);
    }
  });
}

// dividir(10, 0)
//   .then((resultado) => {
//     console.log(`resultado ${resultado}`);
//   })
//   .catch((err) => {
//     console.log(`Error ${err}`);
//   });

dividir(10, 2)
  .then((response) => response * 2)
  .then((response) => response - 4)
  .then((response) => console.log(response))
  .catch((error) => console.log(`error:${error}`));
