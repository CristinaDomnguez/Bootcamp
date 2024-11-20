const numeros = [1, 2, 3, 4, 5];
function sumarNumeros(numeros){
    const suma = numeros.reduce((acumulador, numeroActual) => {
        return acumulador + numeroActual;
    },0);
    return suma;
}
console.log(sumarNumeros(numeros));