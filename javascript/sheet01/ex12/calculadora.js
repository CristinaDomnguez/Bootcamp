function calcular(operacion) {
  const numero1 = parseFloat(document.getElementById("numero1").value);
  const numero2 = parseFloat(document.getElementById("numero2").value);
  const resultadoTexto = document.getElementById("resultado");

  if (isNaN(numero1) || isNaN(numero2)) {
    resultadoTexto.textContent =
      "Por favor, introduce ambos números antes de realizar la operación.";
    return;
  }
  let resultado;

  switch (operacion) {
    case "suma":
      resultado = numero1 + numero2;
      resultadoTexto.textContent = `El resultado de la suma es: ${resultado}`;
      break;
    case "resta":
      resultado = numero1 - numero2;
      resultadoTexto.textContent = `El resultado de la resta es: ${resultado}`;
      break;
    case "multiplicacion":
      resultado = numero1 * numero2;
      resultadoTexto.textContent = `El resultado de la multiplicación es: ${resultado}`;
      break;
    case "division":
      if (numero2 === 0) {
        resultadoTexto.textContent =
          "La división entre cero no está permitida.";
        return;
      }
      resultado = numero1 / numero2;
      resultadoTexto.textContent = `El resultado de la división es: ${resultado}`;
      break;
    default:
      resultadoTexto.textContent = "Operación no válida.";
  }
}
