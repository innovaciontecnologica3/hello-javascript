/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/
let myName = "innovacion"
let empresa = "hvv"
let mes = "octubre"


// 1. Concatena dos cadenas de texto
console.log(`${myName} departamento de ${empresa}`)

// 2. Muestra la longitud de una cadena de texto
console.log(`logitud de esta cadena = ${mes.length}`)

// 3. Muestra el primer y último carácter de un string
console.log(`primer caracter = ${myName[0]}  |  ultimo caracter = ${myName[myName.length-1]}`)

// 4. Convierte a mayúsculas y minúsculas un string
console.log(empresa.toUpperCase())
console.log(empresa.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let cadenaLarga = `
esto
es una 
cadena 
en varias lineas
`
console.log(cadenaLarga)


// 6. Interpola el valor de una variable en un string

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(cadenaLarga.replace(" ", "-"))
console.log(cadenaLarga.replaceAll(" ", "-"))


// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(myName.includes("ana"))

// 9. Comprueba si dos strings son iguales
console.log(myName === "innovacion")


// 10. Comprueba si dos strings tienen la misma longitud
console.log(myName.length == empresa.length)