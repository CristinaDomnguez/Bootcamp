const texto = 'Javascript';
function revertirTexto(texto){
    const revertido = texto.split('').reverse().join('');
    return revertido;
}
console.log(revertirTexto(texto));