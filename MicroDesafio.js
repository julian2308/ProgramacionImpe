let a = 2
let b = 8

function suma (numero1,numero2){
    let suma = numero1 + numero2;
    return suma
}
console.log(suma(a,b))

function resta (numero1,numero2){
    let resta = numero1 - numero2;
    return resta
}
console.log(resta(a,b))

function multiplicacion (numero1,numero2){
    let multiplicacion = numero1 * numero2
    return multiplicacion
}
console.log(multiplicacion(a,b))

function division (numero1,numero2){
    let division = numero1 / numero2
    return division
}
console.log(division(a,b))

let nombreJugador;
let golesJugador = 0;
let precioEnDolares = 0;
function hacerGol (){
    golesJugador++;
    console.log("Goooooooool!");
    precioEnDolares = precioEnDolares + 10000;
}

hacerGol();
hacerGol();
console.log(precioEnDolares)
console.log(golesJugador)
hacerGol();
hacerGol();
console.log(golesJugador)
hacerGol();
console.log(precioEnDolares)
console.log(golesJugador)

//Una funcion expresada es una funcion dentro de una variable. Para poder usar una funcion expreseda esta debio haber sido declarada antes, de lo contrario no correra
//let resta = function (numero1,nuevoNombre){
    //return numero1 - numero2;
//}

  

