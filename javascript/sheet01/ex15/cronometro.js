let contador = 0;
let intervalo = null;

const botonIniciar = document.getElementById("iniciar");
const botonDetener = document.getElementById("detener");
const contadorTiempo = document.getElementById("contador");

function iniciarTiempo() {
  if (intervalo === null) {
    intervalo = setInterval(() => {
      contador++;
      contadorTiempo.textContent = contador;
    }, 1000);
  }
}

function detenerTiempo() {
  clearInterval(intervalo);
  intervalo = null;
}

botonIniciar.addEventListener("click", iniciarTiempo);
botonDetener.addEventListener("click", detenerTiempo);
