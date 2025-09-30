// MAP O DICCIONARIO (CLAVE - VALOR)

//declaracion
// let myMap = new Map()  // cuando lo inicializas vacio

let myMap = new Map([
    ["nombre", "innovacion"],
    ["edad", 23],
    ["dia", "martes"]
])
console.log(myMap)


// metodos y propiedades
// set
myMap.set("alias", "hvv")
myMap.set("nombre", "innovacion3")
console.log(myMap)


// get
console.log(myMap.get("alias"))

//has
console.log(myMap.has("alias"))

//delete
myMap.delete("dia")
console.log(myMap)

//clear
myMap.clear()
console.log(myMap)