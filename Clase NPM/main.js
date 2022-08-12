const moment = require("moment"); // require
moment().format();

const actualMoment = moment();
var birthDate = moment([1999, 1, 01]);
const yearsOfDifference = actualMoment.diff(birthDate, "years");
const daysOfDifference = actualMoment.diff(birthDate, "days");
const monthsOfDifference = actualMoment.diff(birthDate, "months");

const text = "Desde mi nacimiento han pasado";

console.log(`${text} ${yearsOfDifference} Años`);
console.log(`${text} ${monthsOfDifference} Meses`);
console.log(`${text} ${daysOfDifference} Dias`);
