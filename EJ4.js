//Aca declaro las variables
var nombre = "Esteban Piazza";
var edad = 28;
var peso = 80.1;
var altura = 176;
var tienePrepaga = false;

var miNombre = "Julian Alvarado";
var miEdad = 17;
var miPeso = 56.5;
var miAltura = 180;

//Convertir altura a metros
var alturaEnMetros = altura /100;
var miAlturaEnMetros = miAltura/100;

function calcularIndiceMasaCorporal (peso,altura){
    let imc = peso / Math.pow(alturaEnMetros, 2);
    return imc 
}

function presentarDatos (nombre, edad, imc){
    let mensaje = nombre + " tiene " +  edad + " años y su indice de masa corporal es de " + indiceMasaCorporal
    console.log (mensaje)

    
}

//Indice de masa corporal
// Peso / (altura elevada al cuadrado)
var indiceMasaCorporal = calcularIndiceMasaCorporal(peso,alturaEnMetros);
var miIndiceMasaCorporal = calcularIndiceMasaCorporal(miPeso,miAlturaEnMetros);
var imc3 = calcularIndiceMasaCorporal(90,1.90)

console.log(presentarDatos(miNombre,miEdad,miIndiceMasaCorporal))
console.log( miNombre + " tiene " + miEdad + " años y su indice de masa corporal es de " + miIndiceMasaCorporal );

let variable = presentarDatos(nombre,edad,indiceMasaCorporal);

console.log(variable)


