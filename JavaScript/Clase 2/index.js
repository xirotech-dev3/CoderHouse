//-------------------------------------------------------------------------
//      FUNCIONES

function saludar(){ 
    console.log('Hola mundo')
}
saludar() //<- la invoco

let nombre = prompt('Ingrese su nombre: ')
alert('El nombre es: '+nombre)

function solicitarNombre(){
    let nombre = prompt('Ingrese su nombre: ')
    alert('El nombre es: '+nombre)
}
//  PARAMETROS
let resultado = 0
function sumarDosNumeros( a, b ){
    resultado =  a + b
}
sumarDosNumeros(3 , 4)
alert('El resultado de la suma es: '+resultado)

function sumarDosNumerosV2( a, b ){
    return  Number(a) + number(b)
}
let resultadoV2 = sumarDosNumerosV2(5,7)

//EJEMPLO 1 CALCULADORA

function calcularOperacion( a, b, operacion){
    switch (operacion) {
        case '+':
            return a + b
        case '-':
            return a - b
        case '*':
            return a * b
        case '/':
            return a / b
        default:
            return 0
    }
}

let numero1 = number(prompt('Ingrese un nummero: '))
let numero2 = number(prompt('Ingrese un nummero: '))
let operacion = prompt('Ingrese la operacion a realizar: ','Ejemplo: + - * /')

let resultado3 = calcularOperacion(numero1, numero2, operacion)

alert('El resultado de la operacion es: '+resultado)
//-------------------------------------------------------------------------
//      FUNCIONES ANONIMAS

const sumar = function (a,b){ return a + b }
const restar = function(a,b){ return a - b }

//-------------------------------------------------------------------------
//      FUNCIONES FLECHA - arrow functions
const sumarFlecha = (a,b) => { return a + b }

const restarFlecha = (a,b) =>{
    return a - b
}
//return implicito
const restarFlechaDos = (a,b) => a - b

//EJEMPLO
const calcularIva = precio => precio * 0.21

const precioPoducto = 500
const precioDescuento = 50

const iva = calcularIva(precioPoducto)
const precioConIva = sumar( precioPoducto, iva)
const precioFinal = restar( precioConIva, precioDescuento)
//  es buena practica utilizar CONST si no se modifican, si es necesario 
//  que se modifique obvio, usa LET
alert('El precio final es: '+precioFinal)

