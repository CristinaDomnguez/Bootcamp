const palabras = ['hola', 'adios', 'paciencia', 'ayuda', 'amor'];
function convertirMayusculas(palabras){
    const mayusculas = palabras.map(palabra => palabra.toUpperCase());
    return mayusculas;
}
console.log(convertirMayusculas(palabras));