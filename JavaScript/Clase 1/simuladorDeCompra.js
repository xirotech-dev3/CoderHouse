//inicializar variables
let producto = ''
let precio = 0
let cantidad = 0
let precioTotal = 0
let seguirComprando = false

do {
    producto = prompt('¿Queres comprar shampoo, acondicionador o ambos?', 'Ej, ambos')
    cantidad = parseInt(prompt('¿Cuantos?'))

    switch (producto) {
        case 'shampoo':
            precio = 500
            break;
        case 'acondicionador':
            precio = 700
            break;
        case 'ambos':
            precio = 1200
            break;
        default:
            alert('El producto no se encuentra en el catalogo')
            precio = 0
            cantidad = 0
            break;
    }
    precioTotal += precio * cantidad

   seguirComprando = confirm('¿Queres seguir comprando?') 
} while (seguirComprando);

alert('El precio total de la compra es: '+precioTotal)