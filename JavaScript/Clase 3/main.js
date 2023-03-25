
//-------ARRAYS
//               0  1  2  3  4  5
const numeros = [1, 2, 3, 4, 5, 6];

console.log( numeros[0] ) // 1
console.log( numeros[3] ) // 4

let resultado = numeros[1] + numeros[3]

console.log( resultado ) // 6

//      Recorremos array
for( let i = 0; i < 6; i++ ){
    alert(numeros[i])
}

// metodos->funciones y propiedades->variables de arrays

//  Length <- propiedad
console.log(numeros.length) // <- largo del array

for( let i = 0; i < numeros.length; i++ ){
    alert(numeros[i])
}
const array = ['Hola', 34, 'mensaje']
//  push() <-agregar un elemento al final de un array
array.push('otro dato')
console.log(array)

// unshift() <-agregar un elemento al inicio del array
array.unshift('inicio dato')
console.log(array)

// shift() <-eliminar el primer elemento del array
array.shift()
console.log(array)

// pop() <-eliminar el ultimo elemento del array
array.pop()
console.log(array)

//splice() <-eliminar uno o mas elementos de un array en cualquier posicion
//1° arg donde empieza a borrar 2° arg cantidad de elementos a borrar
const nombres =['Luis','Ana','Jose', 'Lucas','Maria','Leo']
console.log(nombres)
nombres.splice( 1, 1 )
console.log(nombres)

// join() <-  convierte un array a un string
// el argumento es con lo que concatena entre cada valor individual del array
console.log(nombres.join('/'))
console.log(nombres.join('.'))
console.log(nombres.join('\n'))

// concat()
const perros = ['firulais', 'pupy']
const gatos = ['mishi', 'nose']

const mascotas = perros.concat(gatos)

console.log(mascotas)

//slice()
const nombres2 =['Luis','Ana','Jose', 'Lucas','Maria','Leo']

const otroArray = nombres2.slice(1,4)

//indexOf()
console.log(nombres2.indexOf('Luis')) // 0
console.log(nombres2.indexOf('Jose')) // 2
console.log(nombres2.indexOf('Le'))   //-1

//includes()
console.log(nombres2.includes('Luis')) //true
console.log(nombres2.includes('Jose')) //true
console.log(nombres2.includes('Le'))   //false

//Ejemplo:

let nuevoUsuario = ''
do {
    if( nuevoUsuario != '' ){
        alert('el nombre de usuario ya existe, ingrese uno nuevo')
    }
    nuevoUsuario = prompt("Ingrese un nombre de usuairo: ")
} while ( nombres.includes(nuevoUsuario) );

nombres.push(nuevoUsuario)

alert("El nombre de susuario se ha creado con éxito! ")

//Reverse 

nombres.reverse()
console.log(nombres)