let zapatillaNike = new Producto("Nike Advance", 150, 1000);
let zapatillaAdidas = new Producto("Adidas Balance", 200, 4000);
let zapatillaLacoste = new Producto("Lacoste Urban", 250, 2000);
let zapatillaVans = new Producto("Vans Lost", 89, 3000);
let zapatillaNewBalance = new Producto("New Balance", 99, 6000);

let listaZapatillas = [zapatillaNike, zapatillaAdidas, zapatillaLacoste, zapatillaVans, zapatillaNewBalance];

let listaNombres = [];

for (const productos of listaZapatillas){
    if(productos.stock > 0){
        listaNombres.push(productos.nombre)
    } 
}

function Producto(nombre, precio, stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.restarStock = function(cantidad){ 
        this.stock -= cantidad
    }
}

let precioTotal = 0;

alert("Bienvendio a Net Shoes, estos son nuestros productos: \n - " + listaNombres.join(" \n - "))

function calcularPrecio(cantidad, precio){
    precioTotal += (cantidad * precio)
}

function calcularStock(cantidad, stock, precio){
    if(cantidad <= stock){
        calcularPrecio(cantidad, precio)
    }
    else{
        alert("Lo sentimos, de ese producto solo tenemos este stock: " + stock)
    }
}

function totalCompra(){
    if(precioTotal != 0){
        alert("El precio total es: $" + precioTotal)
    }
}

let zapatillas = ["nike advance","adidas balance","lacoste urban","vans lost","new balance" ]

let cantidadCompra = prompt("Que cantidad de productos desea comprar?: ");

function comprobarCompra(v_comprobarCompra){
    for(let i = 0; i < v_comprobarCompra; i = i + 1){
        let zapatillaCompra = prompt("Ingrese que Zapatilla desea comprar: \n " + zapatillas[0] + " \n " + zapatillas[1] + " \n " + zapatillas[2] + " \n " + zapatillas[3] + " \n " + zapatillas[4])

    if(zapatillaCompra.toLowerCase() == zapatillas[0]){
        let cantidadZapatillaNike = prompt("Ingrese cuantas " + zapatillaNike.nombre + " desea comprar: ")
        calcularStock(cantidadZapatillaNike, zapatillaNike.stock, zapatillaNike.precio)
        zapatillaNike.restarStock(cantidadZapatillaNike)
    }
    else if(zapatillaCompra.toLowerCase() == zapatillas[1]){
        let cantidadZapatillaAdidas = prompt("Ingrese cuantas " + zapatillaAdidas.nombre + " desea comprar: ")
        calcularStock(cantidadZapatillaAdidas, zapatillaAdidas.stock, zapatillaAdidas.precio)
        zapatillaAdidas.restarStock(cantidadZapatillaAdidas)
    }
    else if(zapatillaCompra.toLowerCase() == zapatillas[2]){
        let cantidadZapatillaLacoste = prompt("Ingrese cuantas " + zapatillaLacoste.nombre + " desea comprar: ")
        calcularStock(cantidadZapatillaLacoste, zapatillaLacoste.stock, zapatillaLacoste.precio)
        zapatillaLacoste.restarStock(cantidadZapatillaLacoste)
    }
    else if(zapatillaCompra.toLowerCase() == zapatillas[3]){
        let cantidadZapatillaVans = prompt("Ingrese cuantas " + zapatillaVans.nombre + " desea comprar: ")
        calcularStock(cantidadZapatillaVans, zapatillaVans.stock, zapatillaVans.precio)
        zapatillaVans.restarStock(cantidadZapatillaVans)
    }
    else if(zapatillaCompra.toLowerCase() == zapatillas[4]){
        let cantidadZapatillaNewBalance = prompt("Ingrese cuantas " + zapatillaNewBalance.nombre + " desea comprar: ")
        calcularStock(cantidadZapatillaNewBalance, zapatillaNewBalance.stock, zapatillaNewBalance.precio)
        zapatillaNewBalance.restarStock(cantidadZapatillaNewBalance)
    }
    }
}

comprobarCompra(cantidadCompra);
totalCompra();
calcularPrecio();
