//variables
let nombre = "Agustín"
let apellido = "Dreisch" //tipo string
let dni = 12345678 //tipo number

let numero
numero = 15

let numeroA = 3
let numeroB = 4
const NUMEROC = 5

let resultadoSuma = numeroA + numeroB
let resultadoResta = numeroA - numeroB
let resultadoProducto = numeroA * NUMEROC

console.log(resultadoSuma)
console.log(resultadoResta)
console.log(resultadoProducto)

//CONCATENACION 
let textA = "Coder"
let textB = "House"
const ESPACIO = " "

let resultadoA = textA + textB
let resultadoB = textA + 1 //JavaScript tiene tipado debil
let resultadoC = textA + ESPACIO +textB

console.log(resultadoA)
console.log(resultadoB)
console.log(resultadoC)

//prompt
let palabra = prompt("Ingrese una palabra")
console.log(palabra)

let name = prompt("Ingrese su nombre:")
alert("Bienvenido a mi página web " +name)

let numero1 = parseInt(prompt("Ingrese un numero")) //intigers
let numero2 = parseInt(prompt("Ingrese un numero"))
let result = numero1 + numero2
alert("El resultado de la suma es: "+result)

let numero10 = parseFloat(prompt("Ingrese un numero")) //FLOTANTE
let numero20 = parseFloat(prompt("Ingrese un numero"))

let numero100 = Number(prompt("Ingrese un numero")) //Opcion recomendada, lo pasa a numero
let numero200 = Number(prompt("Ingrese un numero"))
//utilizar solamente parseInt o parseFloat si solo si cuando el numero es entero o flotante