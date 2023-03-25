//ARRAYS DE OBJETOS

const objeto1 = {id : 1, producto :'Arroz'};
const array = [objeto1, {id: 2, producto: 'Fideo'}];
array.push({ id:3, producto: 'Pan'});

const productos0 = [    //<- array de objetos
    {id: 1 , nombre: 'Arroz' , precio: 200},
    {id: 2 , nombre: 'Fideo' , precio: 300},
    {id: 3 , nombre: 'Harina', precio: 400},
    {id: 4 , nombre: 'Pan   ', precio: 500}
]

//------FOR....ON
for( const producto of productos){
    console.log(producto.id)
    console.log(producto.nombre)
}

//ejemplo aplicado

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre.toUpperCase();
        this.precio = Number(precio);
        this.vendido = false;
    }

    sumarIva(){
        this.precio = this,precio * 1.21
    }
    vender(){
        this.vendido = true
    }
}
const productos = []

const producto1 = new Producto('Arroz' , 123)
const producto2 = new Producto('Fideo' , 204)
const producto3 = new Producto('Harina', 600)

productos.push( producto1, producto2 , producto3)
console.log(productos)

for( const producto0 of productos){
    producto0.sumarIva()
}
console.log(productos)