let persona = {
  nombre: "Lucia",
  edad: 22,
  ciudad: "Cadiz",
};
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.ciudad);

function datosPersona(obj) {
  return Object.values(obj);
}

console.log(datosPersona(persona));

function datosDePersona(prop1, prop2, prop3) {
    return 'Mi nombre es ' + prop1+ ' tengo ' + prop2 + ' años y vivo en ' + prop3; 
  }

console.log(datosDePersona(persona.nombre, persona.edad, persona.ciudad))

function describirPersona(objeto){
    //return 'Nombre: ' + objeto.nombre + ', ' + 'Edad: ' + objeto.edad + ', ' + 'Ciudad: ' + objeto.ciudad;
    return `Nombre: ${objeto.nombre}, Edad: ${objeto.edad}, Ciudad: ${objeto.ciudad}.`
}
console.log(describirPersona(persona)); 