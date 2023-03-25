let btnsMenos , btnsSumar , spanCantidad, subtotales;

let ticket = Array(0);

const seccion = document.getElementById("cartAside");
let  buscar
const num = document.getElementById("cart_menu_num")

const actualizarCarrito = (event) =>{

    const id = event.target.getAttribute("data-id")
    buscar = productos.find( arr => arr.id == id )

    if( num.innerHTML == '0' ){
        num.style.display = 'block'
        num.innerHTML = `1`  
        ticket.push({id : buscar.id, cantidad: 1})
    }else{
        num.innerHTML = parseInt(num.innerHTML)+1
        const loEncontre = ticket.find(elemento => elemento.id == buscar.id )
        if (loEncontre == undefined){
            ticket.push({id : buscar.id, cantidad: 1})
        }else{
            const aca = ticket.indexOf(loEncontre)
            ticket[aca].cantidad++
            const cantidad = document.getElementById('cant')
            cantidad.innerHTML = parseInt(cantidad.innerHTML)+1
        }
    }

    imprimirCarrito(ticket, buscar, seccion)
    
    console.log(ticket)
    
}

const btnAdd = document.querySelectorAll('.btn-add');
btnAdd.forEach(btn => {
    btn.addEventListener('click',actualizarCarrito);
});

const imprimirCarrito = () =>{
    const contenedor = document.createElement("div");
    ticket.forEach(elemento =>{
        console.log(elemento)
        buscar = productos.find( arr => arr.id == elemento.id )
        contenedor.className = "shop-cart-items"
        contenedor.innerHTML += `
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4 side-img">
                    <img src="${buscar.imagen}" class="img-fluid rounded-start p-1">
                </div>
                <div class="col-md-8">
                    <div class="card-body p-0">
                        <h5 class="card-title">${buscar.nombre}</h5>
                        <p class="card-text">Cantidad: </p>
                        <div class="card-button">
                            <button type="button" class="btn btn-danger btn-menos" data-id="${buscar.id}" >-</button> 
                            <span class="cantidad" data-id="${buscar.id}" id="cant">${elemento.cantidad}</span>
                            <button type="button" class="btn btn-success btn-sumar" data-id="${buscar.id}">+</button>
                        </div>                        
                        <p class="subtotal">Subtotal: $ ${buscar.precio}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
        console.log("agrego al carrito"+buscar.nombre)
        seccion.innerHTML = "";
        seccion.appendChild(contenedor);   
    } )
    escuchar()
    actualizarTotales()
}

//--------------------------------------------------------------

let descuento = 0;

function actualizarTotales() {
    let total = 0;

    subtotales.forEach(subtotal => {
        total += parseFloat(subtotal.textContent.split('$ ')[1]);
    });

    let totalConDescuento = total - descuento;
    document.getElementById('shop-txt-desc').textContent = `- $ ${descuento}`;
    document.getElementById('shop-txt-total').textContent = `$ ${totalConDescuento}`;
}

function actualizarArticulo(id, cantidad) {
    let articulo = document.querySelector(`[data-id="${id}"]`).closest('.card');
    //let precio = parseFloat(articulo.querySelector('.card-body p').textContent.split('$ ')[1]);

    let precio = 2000
    let subtotal = articulo.querySelector('.card-body .subtotal');
    let cantidadSpan = articulo.querySelector('.cantidad');
    cantidadSpan.textContent = cantidad;
    console.log(cantidad)
    subtotal.textContent = `Subtotal: $ ${precio * cantidad}`;
}

const escuchar = () =>{

    btnsMenos = document.querySelectorAll('.btn-menos');
    btnsSumar = document.querySelectorAll('.btn-sumar');
    spanCantidad = document.querySelectorAll('.cantidad');
    subtotales = document.querySelectorAll('.card-body .subtotal');

    btnsMenos.forEach(btn => {

        btn.addEventListener('click', event => {
            let id = event.target.getAttribute('data-id');
            buscar = ticket.find( arr => arr.id == id )
            let acaEsta  = ticket.indexOf(buscar)

            spanCantidad.forEach( item =>{
                if(item.getAttribute('data-id') == id){
                    cantidad = parseInt(item.innerHTML);
                    cantidad--
                    //console.log("borramos"+cantidad)
                    if(item.innerHTML == '1'){
                        console.log("Borramos del carrito")

                        ticket.splice(acaEsta,1)

                        num.innerHTML = parseInt(num.innerHTML)-1
                        console.log(ticket)
                        seccion.innerHTML = ""
                        imprimirCarrito()

                    }else{
                        ticket[acaEsta].cantidad = cantidad 
                        num.innerHTML = parseInt(num.innerHTML)-1
                        seccion.innerHTML = ""
                        imprimirCarrito()
                        actualizarArticulo(id, cantidad);
                        actualizarTotales();
                    }
                    
                }
            } )
        });
        
    });
    
    btnsSumar.forEach(btn => { 
        
        btn.addEventListener('click', event => {
            let id = event.target.getAttribute('data-id');
            buscar = ticket.find( arr => arr.id == id )
            acaEsta = ticket.indexOf(buscar)

            spanCantidad.forEach( item =>{
                if(item.getAttribute('data-id') == id){
                    cantidad = parseInt(item.innerHTML);
                    cantidad++;
                    ticket[acaEsta].cantidad ++

                    seccion.innerHTML = ""
                    imprimirCarrito()
                    actualizarArticulo(id, cantidad);
                    actualizarTotales();
                }
            } )
           
        });
    });
}


const checkout = document.getElementById("checkout-btn")

addEventListener('click', event =>{
    localStorage.setItem("_TICKET", JSON.stringify(ticket));
});
