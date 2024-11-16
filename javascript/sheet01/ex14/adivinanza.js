

function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const resultadoAleatorio = numeroAleatorio(1, 100);

const boton = document.getElementById("adivinar");
const resultadoTexto = document.getElementById("resultado");
const inputNumero = document.getElementById("cajaTexto");

function comparaNumero() {
  const numero = parseInt(inputNumero.value);
  if (isNaN(numero)) {
    resultadoTexto.textContent = "Introduce numero valido";
    resultadoTexto.style.color = "red";
    return;
  }
  if (numero < resultadoAleatorio) {
    resultadoTexto.textContent = "El numero es mayor";
    resultadoTexto.style.color = "red";
  } else if (numero > resultadoAleatorio) {
    resultadoTexto.textContent = "El numero es menor";
    resultadoTexto.style.color = "red";
  } else {
    resultadoTexto.textContent = "Correcto!";
    resultadoTexto.style.color = "green";
  }
}

boton.addEventListener("click", comparaNumero);
