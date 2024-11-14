function guardarTextoClick() {
  const texto = cajaTexto.value.trim();
  if (texto !== ""){
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = texto;
    lista.appendChild(nuevoElemento);
    cajaTexto.value = "";
  } else {
    alert("El texto no puede estar vacio");
  }
}

const boton = document.getElementById("miBoton");
const cajaTexto = document.getElementById("miCajaTexto");
const lista = document.getElementById("miLista");
boton.addEventListener("click", guardarTextoClick);

