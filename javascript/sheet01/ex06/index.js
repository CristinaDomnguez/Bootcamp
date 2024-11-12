function saludar(nombre) {
  return "Hola " + nombre;
}

let nombre1 = saludar("Maria");
console.log(nombre1);
let nombre2 = saludar("Fran");
console.log(nombre2);

function numeroMayor(num1, num2) {
  if (num1 < num2) {
    return "El numero " + num2 + " es mayor que el numero " + num1;
  } else {
    return "El numero " + num1 + " es mayor que el numero " + num2;
  }
}

let numero1 = numeroMayor(4, 8);
console.log(numero1);

let numero2 = numeroMayor(5, 2);
console.log(numero2);
