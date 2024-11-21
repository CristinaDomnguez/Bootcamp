const texto = "Javascript";
function contarVocales(texto) {
  let numeroVocales = 0;
  const vocales = "aeiouAEIOU";
  for (let i = 0; i < texto.length; i++) {
    if (vocales.includes(texto[i])) {
      numeroVocales++;
    }
  }
  return numeroVocales;
}
console.log(contarVocales(texto));
