//Estructura IF 

true //1 verdadero
false //0 falso
//ejemplo 1------------------------------------------------------
// if (true){
//     console.log('Vas a ver este mensaje');
// }
// if (false){
//     console.log('No as a ver este mensaje'); //<--Nunca se va a ejecurar
// }

//Ejemplo 2--------------------------------------------------------
let numero = 4

//console.log(numero == 2) 

if(numero == 2){
    console.log('es verdadero')
}

//Ejemplo 3-------------------------------------------------------
let stock = 0 

if (stock == 0){
    alert('Este producto no tiene stock!')
}
//Ejemplo 4-------------------------------------------------------
let nombreUsuario = prompt('Ingrese su nombre de usuario:')

if (nombreUsuario == ''){
    alert('No ingresaste el nombre de usuairo!')
}else{
    alert('El nombre de usuario ingresado es :'+nombreUsuario)
}
//Ejemplo 5-------------------------------------------------------
let precio = 50

if (precio < 20){
    alert('El precio es menor a 20')
}else if ( precio <= 50 ){
    alert('el precio es igual o menor a 50')
}else if ( precio < 100 ){
    alert('el precio es menor a 100')
}else {
    alert('el precio es mayor a 100')
}
/*
Case sensitive
no son iguales
let nombre
let Nombre
*/
//----------------------------------------------------------------
//                      OPERADORES LÓGICOS
//----------------------------------------------------------------

//operador de igualdad debil (lose equality) == compara valores
if( 2 == '2'){
    console.log('Esto es correcto!, vemos esto por consola')
}

//operador de igualdad estricta (strict equality) === compara aparte el tipo de dato
if( 2 === '2'){
    console.log('NO vemos esto por consola!')
}

//      Operador AND -> &&
// let nombre = prompt('Ingrese su nombre:')
// let apellido = prompt('Ingrese su nombre:')

// if( (nombre != '') && (apellido != '')){
//     alert('Nombre: '+nombre+' Apellido: '+apellido)
// }else{
//     alert('Error: Faltan alguno de los datos!')
// }

//      Operador OR -> ||
let nombre = prompt('Ingrese su nombre:')

if( (nombre == 'ANA') || (nombre == 'ana') || (nombre == 'Ana')){
    alert('El nombre ingresado es Ana')
}else{
    alert('El nombre ingresado no es Ana!')
}

//transformar un string a minuscula
let nombre1 = prompt('Ingrese su nombre:').toLowerCase()

//transformar un string a mayuscula
let nombre2 = prompt('Ingrese su nombre:').toUpperCase()