// OPERADORES = REALIZAN OPERACIONES

let a = 5
let b = 2

// operadores aritmetico
console.log(a+b) //suma, resta...
console.log(a%b) // modulo o resto de la division
console.log(a**b) // exponente
a++
console.log(a) //hemos aumentado en +1 el valor de A
b--
console.log(b) //hemos aumentado en -1 el valor de B


// operadores de asignacion
let variable = 8
variable += 8 // 8+8 = 16


//operadores de comparacion
console.log(a>=b)
console.log (a==a) // true -> 6 == 6
console.log (a=="6") // true -> 6 == "6" (JS entiende que aunque string son iguales)

// Igualdad por identidad, debe coincidir por tipo de dato y valor 
console.log (a===a) // true -> 6 (number) === 6 (number)
console.log (a==="6") // FALSE -> 6 (number) === "6" (string)


// operadores logico

//and -> &&
console.log(5<10 && 10<15)

//or -> ||
console.log(5<10 || 15<1)



// operadores ternario 
const llueve = true
llueve ? console.log("esta lloviendo") : console.log("NO esta lloviendo")