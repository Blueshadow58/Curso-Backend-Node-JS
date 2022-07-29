operacion = (num1, num2, func) => func(num1, num2);

suma = (num1, num2) => num1 + num2;

resta = (num1, num2) => num1 - num2;

multiplicacion = (num1, num2) => num1 * num2;

divicion = (num1, num2) => num1 / num2;

modulo = (num1, num2) => num1 % num2;

console.log(operacion(4, 2, modulo));
