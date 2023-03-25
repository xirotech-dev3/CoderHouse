class Ticket{
    constructor(cantidad,pais,tribuna, nombre,apellido,edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = parseInt(edad)
        this.cantidad = parseInt(cantidad)
        this.pais = pais
        this.tribuna = tribuna
        this.precio = 0
    }
    calcularTotal(_precio, _cantidad) {
        this.precio = _precio * _cantidad
    }
}
class Circuito{
    constructor(pais,tribuna, precio, diaInicio, diaFinal, mes){
        this.pais = pais
        this.tribuna = tribuna
        this.precio = precio
        this.diaInicio = diaInicio
        this.diaFinal = diaFinal
        this.mes = mes
    }
    presentacion(){
        alert("El gran premio de "+this.pais+" se realiza de las fechas "+this.diaInicio+" - "+this.diaFinal+" "+this.mes)
    }

}
const monaco = new Circuito('Monaco','Bajada del casino', 4000,25,28,"mayo")
const brasil = new Circuito('Brasil','Calle de Boxes', 1500, 03, 05, "noviembre")
const japon = new Circuito('Japon','Curva Spoon', 2500, 22, 24, "septiembre" )


let verificacion = false
let nombre = "", apellido = "", edad = 0

do {
    nombre = prompt("Ingrese su nombre: ")
    apellido = prompt("Ingrese su apellido: ")
    edad = prompt("Ingrese su edad: ", "Debe ser mayor de 18 años")

    if( nombre == "" || apellido == ""){
        alert("Faltan datos")
        continue
    }else if( edad < 18 ){
        alert("Debe ser mayor de edad para comprar tickets")
        continue
    }
    alert("Bienvenido a f1.tickets "+nombre+" "+apellido)
    verificacion = false

}while (verificacion);

function comprarTickets(nombre,apellido,edad){

    let circuito = prompt("¿De que gran premio quiere comprar tickets?", "Ej: 'Monaco','Brasil','Japon' ")
    let cantidad = 0
    let ticket = new Ticket(0,"","","","",0  )

    switch (circuito.toUpperCase()) {
        case brasil.pais.toUpperCase():
                brasil.presentacion()
                if ( confirm("Las tribunas disponibles son: "+brasil.tribuna+"Con un precio de: "+brasil.precio)){
                    cantidad = prompt(" ¿Cuantas entradas desea comprar? ")
                    ticket.nombre = nombre
                    ticket.apellido = apellido
                    ticket.edad = edad
                    ticket.cantidad = cantidad
                    ticket.pais = brasil.pais
                    ticket.tribuna = brasil.tribuna
                    ticket.calcularTotal(brasil.precio,cantidad) 
                }
            break;

            case monaco.pais.toUpperCase():
                monaco.presentacion()
                if ( confirm("Las tribunas disponibles son: "+monaco.tribuna+"Con un precio de: "+monaco.precio)){
                    cantidad = prompt(" ¿Cuantas entradas desea comprar? ")
                    ticket.nombre = nombre
                    ticket.apellido = apellido
                    ticket.edad = edad
                    ticket.cantidad = cantidad
                    ticket.pais = monaco.pais
                    ticket.tribuna = monaco.tribuna
                    ticket.calcularTotal(monaco.precio,cantidad) 
                }
            break;

            case japon.pais.toUpperCase():
                japon.presentacion()
                if ( confirm("Las tribunas disponibles son: "+japon.tribuna+"Con un precio de: "+japon.precio)){
                    cantidad = prompt(" ¿Cuantas entradas desea comprar? ")
                    ticket.nombre = nombre
                    ticket.apellido = apellido
                    ticket.edad = edad
                    ticket.cantidad = cantidad
                    ticket.pais = japon.pais
                    ticket.tribuna = japon.tribuna
                    ticket.calcularTotal(japon.precio,cantidad) 
                }
            break;
    
        default:
            alert("No se encontro el pais solicitado")
            break;
    }

    alert("El valor total del ticket es de "+ticket.precio)
}

comprarTickets(nombre,apellido,edad)
