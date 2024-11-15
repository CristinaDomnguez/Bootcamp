function numeroAleatorio(min, max) {
    texto.textContent = "El número aleatorio es: " + Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let resultado;
  
  const boton = document.getElementById("aleatorio");
  const texto = document.getElementById('resultado')
  boton.addEventListener("click", () => numeroAleatorio(1, 50));
  
