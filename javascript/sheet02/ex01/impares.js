const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
function filtrarImpares([]){
    const impares = numeros.filter(num => num % 2 !== 0);
    return impares;
}
console.log(filtrarImpares(numeros));