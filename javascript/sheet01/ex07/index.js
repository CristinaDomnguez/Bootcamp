let diasDeLaSemana = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];
for (let i = 0; i < diasDeLaSemana.length; i++) {
  console.log(diasDeLaSemana[i]);
}

let numeros = [1, 2, 3, 4, 5, 6, 7];

function sumarArray(arr) {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    suma += arr[i];
  }
  return suma;
}
console.log("La suma del array es " + sumarArray(numeros));
