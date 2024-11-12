/* let a = -43;
if (a < 0) {
  console.log("El numero " + a + " es negativo");
} else if (a == 0) {
  console.log("El numero " + a + " es cero");
} else {
  console.log("El numero " + a + " es positivo");
}
let b = 0;
if (b < 0) {
  console.log("El numero " + b + " es negativo");
} else if (b == 0) {
  console.log("El numero " + b + " es cero");
} else {
  console.log("El numero " + b + " es positivo");
}
let c = 13;
if (c < 0) {
  console.log("El numero " + c + " es negativo");
} else if (c == 0) {
  console.log("El numero " + c + " es cero");
} else {
  console.log("El numero " + c + " es positivo");
} */

function funcionNumeros(a) {
  if (a < 0) {
    return "El numero " + a + " es negativo";
  } else if (a == 0) {
    return "El numero " + a + " es cero";
  } else {
    return "El numero " + a + " es positivo";
  }
}
let resultado1 = funcionNumeros(-43);
console.log(resultado1);
let resultado2 = funcionNumeros(0);
console.log(resultado2);
let resultado3 = funcionNumeros(13);
console.log(resultado3);
