//declaro arrays

let nombre = prompt ("Ingrese su nombre de usuario")

if (nombre == "") {
    alert ("A usted no se le a asignado un nombre de usuario")
} else {
    alert ("Su nuevo nombre de usuario es: " + nombre)
}

do {
    celular = prompt("Hola " + nombre + ", ingrese su numero telefonico por favor");
} while (isNaN(celular));

let direccion = prompt ("Hola " + nombre + ", ingrese donde quiere que entregemos su pedido porfavor")

alert ("Perfecto  " + nombre + ", su pedido sera realizado en la direcion " + direccion + " y cuando arrive su pedido se le llamara a su numero celular " +celular)

//declaro bucle para la edad

do{numero = parseInt(prompt("Muy bien, a continuación ingrese su edad (tiene que ser mayor de edad para poder ingresar)"))}
while (numero < 18 || numero >100 || isNaN (numero))

alert ("oprima aceptar para dirigirse a la compra")

//declaro variable para los productos

let precio= 0;
let produc = "Pizzas";
let productos = "algo";
do{
    productos = parseInt(prompt ("Elige unas de las siguientes Pizzas colocando su número (todas nuestras pizzas estan elaboradas en hornos de barro):\n1) Triple (salsa de tomate y muzzarella 3000$) \n2) Real (salsa de tomate ,muzzarella y morrones 3400$) \n3) Real con jamon (Salsa de tomate ,jamon ,muzzarella y morrones 3400$) \n4) La pizza de di gilma (salsa de tomate , cebolla ,muzzarella ,morrones ,perejil y oregano 3800$) \n5) Cuatriple (salsa de tomate y doble muzzarella 3400$) \n6) Jamon (salsa de tomate ,muzzarella y jamon 3600$) \n7) Panceta (salsa de tomate ,muzzarella ,panceta y cebolla de verdeo 3800$) \n8) Provolone (Salsa de tomate ,muzzarella y provolone 3800$) \n9) Anchoas (Salsa de tomate y anchoas 3400$) \n10) Roquefort (Salsa de tomate , muzzarella y roquefort 3600$"));
} while (productos < 1 || productos > 10 || isNaN(productos))

switch (productos) {
    case 1:
        precio = 3000;
        produc = "Triple";
        break;

    case 2:
        precio = 3400;
        produc = "Real";
        break;

    case 3:
        precio = 3800;
        produc = "Real con jamon";
        break;

    case 4:
        precio = 3800;
        produc = "La pizza di gilma";
        break;

    case 5:
        precio = 3400;
        produc = "Cuatriple";
        break;

    case 6:
        precio = 3600;
        produc = "Jamon";
        break;

    case 7:
        precio = 3800;
        produc = "Panceta";
        break;

    case 8:
        precio = 3800;
        produc = "Provolone";
        break;

    case 9:
        precio = 3400;
        produc = "Anchoas"
        break;

    case 10:
        precio = 3600;
        produc = "Roquefort"
        break;
}

//declaro variable para la cantidad

let unidades;

do{
    unidades = parseInt( prompt("cuantas unidades del " + produc + " va a comprar?"))
}while(unidades < 1 || isNaN(unidades))

let resultado = 0

function multiplicar ( precio, cantidad) {
    resultado = precio * cantidad
}

function mostrar (mensaje){
    alert ("Usted añadio al carrito " + unidades + " " + produc + ". El total a pagar es de $" + mensaje + ".")
}

multiplicar(precio, unidades);
mostrar(resultado)

let filtro = "algo"

let resultadoFinal = "algo"

let final = "algo"

let unidadesAccesorios;

let acces;

alert("su resultado con iva incluido hasta el momento es de $" + resultado * 1.21)

const extras = [
    {
        nombre: "cocacola",
        precio: 750
    },

    {
        nombre: "pepsi",
        precio: 750
    },

    {
        nombre: "sprite",
        precio: 750
    },

    {
        nombre: "7up",
        precio: 750
    },

    {
        nombre: "mirinda",
        precio: 750
    },

    {
        nombre: "fanta",
        precio: 750
    } 
]

let compras = prompt ("Le gustaría comprar alguna bebida? ponga *si* para proceder")

if (compras === "si") {

    do {
        filtro = prompt("Ingrese el nombre de la bebida que desea comprar:\n1) cocacola\n2) pepsi\n3) sprite\n4) 7up\n5) mirinda\n6) fanta");
    } while (filtro !== "cocacola" && filtro !== "pepsi" && filtro !== "sprite" && filtro !== "7up" && filtro !== "mirinda" && filtro !== "fanta");

    
    //unidadesAccesorios = prompt ('cuantas unidades desearia comprar ?.')

    const resultadoFinal = extras . find((item) => item . nombre === filtro);
    
    alert("usted eligio comprar" + resultadoFinal. nombre);

    unidadesAccesorios = parseInt(prompt("cuantas unidades de " + resultadoFinal . nombre + "desea?"))

    //calcular el precio de los elementos adicionales seleccionados
    
    let totalPrecioExtra = resultadoFinal . precio * unidadesAccesorios;

    alert("su precio en bebidas es de  $ " + totalPrecioExtra + " . y su precio final de compra es de $ " +( resultado + totalPrecioExtra + precio));
    
    do {
        final = prompt("Ingrese el nombre del producto a comprar:\n1) " + resultadoFinal[0] . nombre + "\n2) " + resultadoFinal[1] . nombre + "\n3) " + resultadoFinal[2] . nombre);
    } while (final !== resultadoFinal[0] . nombre && final !== resultadoFinal[1] . nombre && final !== resultadoFinal[2] . nombre);
    
    //Calcular el precio de los elementos adicionales seleccionados
    let precioExtra = resultadoFinal. find((item) => item . nombre === final) . precio;
    let = precioExtra * unidadesAccesorios;
    
    alert("Su precio en bebidas es de $" + totalPrecioExtra + ". Y su precio final de compra es de $" + (resultado + totalPrecioExtra));
    
    if (iva == 1) {
        //let montoIva = (resultado + totalPrecioExtra) * 0.21;
        let precioTotalConIva = (resultado + totalPrecioExtra) * 1.21;
        alert("Su IVA es de $" + montoIva);
        alert("Y su precio final con el IVA sumado es de $" + precioTotalConIva);
    } else {
        alert("Vale...");
    }
//resultadoFinal.forEach((filtro=>{prompt(filtro.nombre)}))

//do{
//    final = prompt("Ingrese el nombre del producto a comprar:\n1)" + resultadoFinal[0] . nombre + "\n2)" + resultadoFinal[1] . nombre + "\n3)" + resultadoFinal[2] . nombre )
//}while (final != resultadoFinal[0] . nombre && final != resultadoFinal[1] . nombre && final != resultadoFinal[2] . nombre)


//do{
//    unidadesAccesorios = parseInt( prompt("cuantas unidades desea va a comprar?"))
//}while(unidadesAccesorios < 1 || isNaN(unidadesAccesorios))

/*
switch (final) {
    case "cocacola":
        precioGaseosas = 750;
        break;
    case "pepsi":
        precioGaseosas = 750;
        break;
    case "sprite":
        precioGaseosas = 750;
        break;
    case "7up":
        precioGaseosas = 750;
        break;
    case "mirinda":
        precioGaseosas = 750;
        break;
    case "fanta":
        precioGaseosas = 750;
        break;
}
*/

acces = alert("Su precio en bebidas es de $" + precioGaseosas * unidadesAccesorios + ". Y su precio final de compra es de $" + (resultado + (precioAccesorio * unidadesAccesorios)))

//calcular iva

let iva = prompt ("Bien, ingrese 1 para calcular el iva de la compra")

const arrayuno= [resultado + (precioAccesorio * unidadesAccesorios)]

const arraydos= [0.21]

const arraytres= [1.21]


if (iva == 1){
    alert("Su iva es de $" + arrayuno * arraydos)
    alert("Y su precio final con el iva sumado es de $" + arrayuno * arraytres)
} else {
    alert("Vale...")
}



} else {
    alert("Gracias por su compra su pedido llegara en 30 minutos a la direccion "+direccion)
}

//consologueamos todos los datos 

console.log("Su nombre es " + nombre)
console.log("Su mail es " + mail)
console.log("Su edad es de " + numero)
console.log("Usted a comprado " + unidades + " unidades del " + produc + " y " + unidadesAccesorios + " de " + final)