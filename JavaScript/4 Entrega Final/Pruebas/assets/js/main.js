
localStorage.setItem("_TICKET", JSON.stringify(new Ticket("", "", 0)));

//-------------FUNCIONES
const imprimirCircuitos = (arrCircuitos) =>{

    const seccion = document.getElementById("container_circuitos")

    arrCircuitos.forEach(circuito => {
        const contenedor = document.createElement("div");

        contenedor.className = "circuito "+circuito.pais
        contenedor.innerHTML += `
            <hr>
            <h3 class="nombrePais"> Pais: ${circuito.pais}</h3>
            <div class="detalleCircuito">
                <p>  Fecha:  ${circuito.diaInicio} - ${circuito.diafinaliz}   ${circuito.mes}</p>
                <p>  Tribuna: ${circuito.tribuna}  </p> 
                <p>  Precio por los 3 dias: <b>$ ${circuito.precio}</b> </p>
            </div>
            <hr>
        `;
        seccion.appendChild(contenedor);
    });

}

const ingreseDatos = () =>{
    const comprar = document.getElementById("container_comprar")
    comprar.style.display = 'none'

    const seccion = document.getElementById("ticket")
    seccion.style.display = 'none'

    const form = document.getElementById("formulario")
    form.addEventListener("submit", validarDatos)
}

function validarDatos( evento ){
    let ticket = JSON.parse(localStorage.getItem("_TICKET"));
    evento.preventDefault();

    let formulario = evento.target

    let nombre = formulario.children[1].value , 
    apellido = formulario.children[3].value, 
    edad = parseInt(formulario.children[6].value) , 
    email= formulario.children[9].value

    if( nombre == "" || apellido == "" || email == ""){
        const error = document.getElementById("error nombre")
        error.innerHTML = "Faltan datos"
        error.style.color = 'red'
        return
    }else if( isNaN(edad) || edad < 18){
        const error = document.getElementById("error edad")
        error.innerHTML = "Debe ser mayor de 18 años para comprar tickets"
        error.style.color = 'red'
        return
    } 
 
    const form = document.getElementById("container_formulario")
    form.style.display = 'none'

    const ingreso = document.getElementById("ingresar")
    ingreso.innerHTML = "Estas son las carreras disponibles: "

    const hola = document.getElementById("hola")
    hola.innerHTML = "Bienvenido a F1 Tickets <strong>"+nombre+" "+apellido+"</strong>"

    ticket.nombre= nombre
    ticket.apellido = apellido
    ticket.edad = edad
    ticket.email = email

    localStorage.setItem("_TICKET", JSON.stringify(ticket));

    const comprar = document.getElementById("container_comprar")
    comprar.style.display = ''

    imprimirCircuitos(circuitos)
    comprarTicket()
}

const comprarTicket = () =>{
    const compra1 = document.getElementById("circuito")
    compra1.onchange = () =>{
        validarCompra( compra1 )
    }

}

function validarCompra( compra1 ){
    let ticket = JSON.parse(localStorage.getItem("_TICKET"));
    let esta = -1 
    let sigo = false

    do {
        
        esta = circuitos.find( arr => arr.pais == compra1.value.toUpperCase() )
        if ( esta != undefined ){
                ticket.circuito = esta.pais
                ticket.tribuna  = esta.tribuna
                ticket.importe  = esta.precio
                ticket.cantidad = 1
                ticket.subtotal = esta.precio * 1
                sigo = false
        }else{
            alert("No encontramos la carrera que busca ")
            sigo = true
        }
    } while (sigo);
    console.log(ticket)
    ticket.subtotal = ticket.importe * ticket.cantidad
    ticket.total =  ticket.subtotal
    ticket.codigo = 0
    ticket.descuentos = ticket.subtotal * (0 / 100)
    ticket.total  = ticket.total - ticket.descuentos

    localStorage.setItem("_TICKET", JSON.stringify(ticket));

    const comprar = document.getElementById("container_comprar")
    comprar.style.display = 'none'

    const seccion = document.getElementById("ticket")
    seccion.style.display = ''
    imprimirTicket()
}

function imprimirTicket(){
    const seccion = document.getElementById("ticket")

    const ticket = JSON.parse(localStorage.getItem("_TICKET"))

    //console.log(ticket.value.nombre)
    const hoy = new Date()
    seccion.innerHTML = `
        <hr>
        <h2>-----F1 Tickets--- </h2> 
        <p>Nombre: ${ticket.nombre}  ${ticket.apellido}</p> 
        <p>Email: ${ticket.email} </p>
        <p>Fecha y hora de carga: ${hoy.toLocaleString()}</p> 
        <p>Circuito: ${ticket.circuito}</p> 
        <p>Tribuna: ${ticket.tribuna}</p> 
        <p>Cantidad:  ${ticket.cantidad}</p>
        <p>Precio:  ${ticket.importe}  </p> 
        <p>Subtotal: ${ticket.subtotal}  </p>
        <p>Total: ${ticket.total}</p>
        <hr>
    `;
}

//-----------DECLARAR
ingreseDatos()  
