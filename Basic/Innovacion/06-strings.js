// STRINGS

let myName = "innovacion tecnologica"

// logitud de texto
console.log(myName.length)

//acceso a caracteres
console.log(myName[5]) // letra de la posicion 5

//metodos mas comunes
console.log(myName.toUpperCase())
console.log(myName.toLowerCase())
console.log(myName.indexOf("tecnologica")) // en que luegar podemos encontrar esta palabra
console.log(myName.includes("tecnologica")) // devuelve booleano dependiendo si existe o no 
console.log(myName.slice(0,13))
console.log(myName.replace("tecnologica", "hvv"))
console.log(`hola, ${myName}`)