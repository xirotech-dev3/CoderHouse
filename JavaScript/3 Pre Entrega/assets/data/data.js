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
        this.total  = this.total - this.descuentos
    }
    calcularSubtotal( ){
        this.subtotal = this.importe * this.cantidad
        this.total =  this.subtotal
    }
}

//--------ARRAYS
let descuentos     = ["OFF10%","OFF15%" ,"DESC20%"]
let descuentos_val = [10 , 15 ,20]

const circuitos = [
    {
        pais: 'MEXICO', 
        tribuna: "Foro Sol",          
        precio: 2500, 
        diaInicio: 26, 
        diafinaliz: 29, 
        mes: "OCT" 
    },
    {
        pais: 'MONACO', 
        tribuna: "Bajada del casino", 
        precio: 9000, 
        diaInicio: 25, 
        diafinaliz: 28, 
        mes: "MAY" 
    },
    {
        pais: 'BRASIL', 
        tribuna: "Calle de Boxes",    
        precio: 3000, 
        diaInicio: 03, 
        diafinaliz: 05, 
        mes: "NOV" 
    },
    {
        pais: 'JAPON' , 
        tribuna: "Curva Spoon",       
        precio: 4500, 
        diaInicio: 22, 
        diafinaliz: 24, 
        mes: "SEP" 
    }
]