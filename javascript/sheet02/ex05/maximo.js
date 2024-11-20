const numeros = [1, 2, 3, 4, 5];
function encontrarMaximo(numeros){
    const maximo = Math.max(...numeros)
    return maximo;
}
console.log(encontrarMaximo(numeros));