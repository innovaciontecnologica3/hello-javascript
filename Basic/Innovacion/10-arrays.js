//  ARRAY

//declaracion
let myArray = [1,2,3,4,5]
let myId =["innovacion",3,"hvv"]


//metodos comunes - push | pop
myArray.push(6)  //añade un nuevo elemento al array
myArray.push(7)
console.log(myArray)


myArray.pop() // elimina el ultimo elemento del array 
console.log(myArray)


// shift | unshift
myArray.shift() //elimina el primer elemento del array
console.log(myArray)

myArray.unshift(-2, -1) //añade nuevos elementos al array pero los introduce al comienzo del array
console.log(myArray) 


//length
myArray.length //para contar la longitud del array
console.log(myArray) 


//borrar el array
myArray = ["buenos", "dias", "por", "la", "mañana", 23 ]


//slice -> para seleccionar ciertos elementos del array
myArray.slice(1,2)
let newArray = myArray.slice(1,3)
console.log(newArray) 


//splice -> elimina lo que no este en ese rango
let newArray2 = myArray.splice(1,3)
console.log(newArray2) 