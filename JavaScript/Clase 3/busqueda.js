//higher order functions

let total = 0, count = 1;
while(count <= 10 ){
    total += count;
    count += 1;
}
console.log(total);

console.log(sum(range(1,10)));

//FOR EACH -> para recorrer
//recibe un callback o funcion anonima como parametro
const numeros = [1,2,3,4,5,6];

numeros.forEach( (num) => {console.log(num)} )

//arrays de objetos

const cursos =[
    {nombre:'JS', precio: 15000},
    {nombre:'ReactJS', precio: 10000},
    {nombre:'AngularJS', precio: 20000},
    {nombre:'Desarrollo web', precio: 30000}
]

cursos.forEach( (curso=>{
    console.log(curso.nombre)
    console.log(curso.precio)
}) )

const nombresCursos = []

cursos.forEach((curso) => {
    nombresCursos.push(curso.nombre)
})
console.log(nombresCursos)

//FIND
const numeros2 = [1,2,3,4,5];

const encontrado = numeros2.find(numero => numero > 3)
console.log(encontrado)

const nombres = ["Ana", "Ema", "Juan"];

const encontrado2 = nombres.find(nombre => nombre == "Ema")
const encontrado3 = nombres.find(nombre => nombre == "Alan")
console.log(encontrado2)
console.log(encontrado3)

//ARRAYS DE OBJETOS

const cursos2 =[
    {
        nombre:'JS',
        precio: 15000
    },
    {
        nombre:'REACT JS',
        precio:22000
    }
]
const resultado = cursos.find(curso=> curso.nombre == 'REACT JS')
const resultado2 = cursos.find(curso=> curso.nombre == 'DW')
console.log(resultado) //<- devuelve todo el objeto
console.log(resultado2) //<- undefine

//FILTER
//devuelve un nuevo array con todos los elementos coincidentes 
//si no hay coincidencias devuelve un array vacio
const numeros0 = [1,2,3,4,5,6];
const filtro1 = numeros0.filter(numero => numero < 3)
console.log(filtro1)

const nombres0 = ["Ana", "Ema", "Juan"];
const filtro2 = nombres0.filter(nombre => nombre.includes('n'))
console.log(filtro2)


const cursos0 =[
    {nombre:'JS', precio: 15000},
    {nombre:'ReactJS', precio: 10000},
    {nombre:'AngularJS', precio: 20000},
    {nombre:'Desarrollo web', precio: 30000}
]
const resultado3 = cursos0.filter(curso => curso.precio > 18000)
console.log(resultado3)

//SOME
console.log(cursos.some( curso => curso.nombre == 'JS')) //true
console.log(cursos.some( curso => curso.nombre == 'RJS')) //false

//MAP ->metodo transformador
//map nos devuelve otro array
const num =[1, 2, 3, 4, 5]
const porDos = numeros.map(numero => numero * 100)
const masCien = numeros.map(numero => numero + 100)

console.log(porDos)
console.log(masCien)

const nombres1 = ["Ana", "Ema", "Juan" , "Elia" ];
const lengths = nombres1.map( nombre => nombre.length )
console.log(lengths) //<- devuelve cuantos caracteres de los nombres

const nombres3 = cursos.map( curso => curso.nombre )
console.log(nombres)

const cursos3 =[
    {nombre:'JS', precio: 15000},
    {nombre:'ReactJS', precio: 10000},
    {nombre:'AngularJS', precio: 20000},
    {nombre:'Desarrollo web', precio: 30000}
]

const preciosActualizados = cursos.map(curso =>{
    return{
        nombre: curso.nombre,
        precio: curso.precio * 1.25
    }
})
console.log(preciosActualizados)
//un nuevo array de objetos

//REDUCE 
const _num =[1, 2, 3, 4, 5, 6]
const tot = _num.reduce((accumulador , numero) => accumulador + numero, 0)
console.log(tot)

const carrito =[
    {nombre:'zapatillas', precio: 150, cantidad:1},
    {nombre:'zapatos', precio: 200, cantidad:9},
    {nombre:'Bicicleta', precio: 300, cantidad:5}
]
const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad ,0) //<- 0 inicializo el accumulador
console.log(cantidadTotal)

//SORT

const numeros_ =[40, 1, 5, 200];
console.log(numeros_)
numeros_.sort((a,b) => a-b) //ordenar de menor a mayor
console.log(numeros_)
numeros_.sort((a,b) => b-a) //ordenar de mayor a menor
console.log(numeros_)

//OBJETO MATH
console.log(math.PI)

const cuotaPrestamo = 10000.36521831054

console.log(math.ceil(cuotaPrestamo))
console.log(math.floor(cuotaPrestamo))
console.log(math.round(cuotaPrestamo))

console.log(math.sqrt(9))
console.log(math.sqrt(-1))

console.log(math.random()) //entre 0 y 1
console.log(math.random()* 10) //entre 0 y 10
console.log(math.random()* 50) //entre 0 y 50

//DATE

console.log( new Date() )
const hoy = new Date("December 17, 2021")

console.log( hoy.toDateString() ) // Fri Dec 17 2021
console.log( hoy.toLocaleString() ) // 17/12/2021 00:00:00
console.log( hoy.toLocaleDateString() ) // 17/12/2021
console.log( hoy.toTimeString() ) // 00:00:00 GMT-0300 (hora estándar de Argentina)

