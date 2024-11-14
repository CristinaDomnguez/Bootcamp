function mostrarClick() {
  console.log("¡Botón pulsado!");
}

function mostrarTextoClick() {
  alert(texto.value);
}
const boton = document.getElementById("miBoton");
const texto = document.getElementById("miTexto");
boton.addEventListener("click", mostrarTextoClick);
