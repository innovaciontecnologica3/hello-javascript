// SET  NO ADMITE VALORES DUPLICADOS

//decalracion
// let mySet = new Set()  // cuando lo inicializamos vacío
let mySet = new Set(["buenos", "dias", "por", "la", "mañana", 23]) //cuando lo iniciamos con datos
console.log(mySet)

//metodos comunes

// add y delete
mySet.add("innovacion")
console.log(mySet)

mySet.delete("por")
console.log(mySet)

// has
console.log(mySet.has("hvv"))
console.log(mySet.has(23))


// size
console.log(mySet.size)


// De Set -> Array
let myArray = Array.from(mySet)
console.log(myArray)


// De Array -> Set
mySet = new Set(myArray)
console.log(mySet)


// NO ADMITE VALORES DUPLICADOS 
mySet.add("innovacion")
mySet.add("innovacion")
mySet.add("innovacion")
mySet.add("innovacion")
console.log(mySet)
