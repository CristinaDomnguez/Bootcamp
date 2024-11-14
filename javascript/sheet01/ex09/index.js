function invertirCadena(cadena) {
  return cadena.split("").reverse().join("");
}

console.log(invertirCadena("Hola Mundo"));

function contarVocales(cadenaVocales) {
  let numeroVocales = 0;
  const vocales = "aeiouAEIOU";
  for (let i = 0; i < cadenaVocales.length; i++) {
    if (vocales.includes(cadenaVocales[i])) {
      numeroVocales++;
    }
  }
  return numeroVocales;
}

console.log(contarVocales("Hola Mundo"));
