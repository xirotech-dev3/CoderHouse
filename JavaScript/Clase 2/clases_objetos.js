//  OBJETO LITERAL

const persona1 = {
    nombre: "Homero",
    edad : 39,
    calle: "Av .Siempreviva 742"
//propiedad:valor
}

//como acceder a las propiedades:
console.log(persona1.nombre)
console.log(persona1.edad)
console.log(persona1.calle)

console.log(persona1['nombre'])
console.log(persona1['edad'])
console.log(persona1['calle'])

//asignarle nuevos valores al objeto literal

persona1.nombre = 'Marge'
persona1.edad = 36

console.log(persona1)

//  FUNCIONES CONSTRUCTORAS

function Persona(_nombre, _edad, _calle){
    this.nombre = _nombre
    this.edad = _edad
    this.calle = _calle;
}
//creo el objeto
let persona2 = new Persona('Agustin', 39,'Calle falsa 123')
console.log(persona2)

//metodos personalizados
function PersonaNuevo(_nombre,_edad,_calle){
    this.nombre = _nombre
    this.edad = _edad
    this.calle = _calle;

    this.hablar = function(){
        alert('Hola soy '+this.nombre)
    }
}
let persona3 = new PersonaNuevo('Agustin', 39,'Calle falsa 123')
persona3.hablar()

//  OPERADOR "IN" Y "FOR IN"
console.log('nombre' in persona3) //true
console.log('origen' in persona3) //false

// recorrer todas las propiedades del objeto perona3
for( const propiedades in persona3 ){
    console.log(propiedades)
    console.log(persona3[propiedades])
}
console.table(persona3)

//--------------------CLASES------------------------------

class PersonaClass{
    constructor(nombre, edad, calle){
        this.nombre = nombre
        this.edad = edad
        this.calle = calle;
    }
    hablar(){
        console.log('hola soy clase: '+this.nombre)
    }
}
const persona4 = new PersonaClass('Agustin', 22, 'calle falsa 123')

persona4.hablar()
//04:23:28
