//-----------CLASS
class Ticket{
    constructor(nombre,apellido,edad){
        this.nombre = nombre
        this.apellido = apellido
        this.email = ""
        this.edad = parseInt(edad)
        this.circuito = ""
        this.tribuna = ""
        this.cantidad = 0
        this.importe = 0 //precio entrada
        this.subtotal = 0 //precio entrada * cantidad
        this.descuentos = 0
        this.codigo = ""
        this.total = 0
    }
    calcularDescuento(descuento, codigo){
        this.codigo = codigo
        this.descuentos = this.subtotal * (descuento / 100)
        console.log(this.total - this.descuentos)
        this.total  = this.total - this.descuentos
    }
    calcularSubtotal( ){
        this.subtotal = this.importe * this.cantidad
        this.total =  this.subtotal
    }
    imprimirTicket(){
        const hoy = new Date()
        alert("-----F1 Tickets--- \n Nombre: "+this.nombre+" "+this.apellido+"\n Email: "+this.email+" \n"+hoy.toLocaleString()+"\n Circuito: "+this.circuito+"\n Tribuna: "+this.tribuna+"\n Cantidad:  "+this.cantidad+"\n Precio:  "+this.importe+"  \n Subtotal: "+this.subtotal+"  \nDescuentos: "+this.codigo+"-----"+this.descuentos+"  \nTotal: "+this.total )
    }

}
let ticket = new Ticket("", "", 0)

//--------ARRAYS
let descuentos = ["OFF10%","OFF15%" ,"DESC20%"]
let descuentos_val =[10 , 15 ,20]

const circuitos = [
    {pais: 'MEXICO', tribuna: "Foro Sol",precio: 2500, diaInicio: 26 ,diafinaliz: 29 , mes: "OCT"  },
    {pais: 'MONACO', tribuna: "Bajada del casino", precio: 9000, diaInicio: 25,diafinaliz:28 , mes:"MAY" },
    {pais: 'BRASIL', tribuna: "Calle de Boxes", precio: 3000, diaInicio:03 ,diafinaliz: 05, mes: "NOV"},
    {pais: 'JAPON',  tribuna: "Curva Spoon", precio: 4500, diaInicio: 22,diafinaliz: 24 , mes:"SEP" }
]

//-------------FUNCIONES
const inicio = (ticket) => {

    let verificacion = false
    let nombre = "", apellido = "", edad = 0, _check ,email

    do {
        nombre = prompt("Ingrese su nombre: ")
        apellido = prompt("Ingrese su apellido: ")
        edad = prompt(" Ingrese su edad: ", "Debe ser mayor de 18 años") 
        _check = parseInt(edad)

        if( nombre == "" || apellido == ""){
            alert("Faltan datos")
            continue
        }else if( isNaN(_check) || _check < 18){
            alert(" Debe ser mayor de 18 años para comprar tickets ")
            continue
        } 
        email = prompt(" Ingrese su mail: ", " example@email.com ")
        alert("Bienvenido a F1 Tickets "+nombre+" "+apellido)
        verificacion = false

    }while (verificacion);
    
    ticket.nombre= nombre
    ticket.apellido = apellido
    ticket.edad = _check
    ticket.email = email
}
const comprar = (ticket, circuitos) =>{
    let _circuito , _cantidad = 0 , esta = -1 
    let sigo = false

    do {
        _circuito = prompt("¿De que gran premio quiere comprar tickets?", "Ej: 'Mexico','Monaco','Brasil','Japon' ")

        esta = circuitos.find( arr => arr.pais == _circuito.toUpperCase() )
        console.log(esta)
        if ( esta != undefined ){
            alert("El gran premio de "+esta.pais+" se realiza de las fechas "+esta.diaInicio+" - "+esta.diafinaliz+" "+esta.mes)
            if ( confirm("Las tribunas disponibles son: "+esta.tribuna+" Con un precio de: "+esta.precio)){
                _cantidad = prompt(" ¿Cuantas entradas desea comprar? ")
                if( isNaN(parseInt(_cantidad)) ){
                    sigo = true
                    continue
                }
                ticket.circuito = esta.pais
                ticket.tribuna = esta.tribuna
                ticket.importe = esta.precio
                ticket.cantidad = parseInt(_cantidad)
                ticket.subtotal = esta.precio * parseInt(_cantidad)
                sigo = false
            }
        }else{
            alert("No encontramos la carrera que busca,  ")
            sigo = true
        }
    } while (sigo);

}
const descuento = ( ticket, descuentos, descuentos_val ) => {

    if( !confirm("¿Tenes un codigo de descuento?") ){
        return
    }

    let codigo = prompt("Ingrese su codigo de descuento:")
    let esta = descuentos.indexOf(codigo.toUpperCase())

    if ( esta != -1 ){
        //escuento, codigo
        ticket.calcularDescuento(descuentos_val[esta] , descuentos[esta])
        console.log(ticket)
        descuentos.splice( esta, 1 )
        descuentos_val.splice( esta, 1 )
    }
}

//-----------DECLARAR
inicio(ticket)
comprar(ticket, circuitos)
ticket.calcularSubtotal()
descuento(ticket, descuentos, descuentos_val)
ticket.imprimirTicket()
