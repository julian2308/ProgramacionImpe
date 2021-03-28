/* function puedeSubir (altura, vieneAcompaniado){
    if (altura > 1.40 && altura <2){
        return true;
    } else if (altura < 1.40 && vieneAcompaniado === true) {
        return true;
    } else if (altura < 1.20){
        return false;
    }
}

console.log(puedeSubir (1.15,false)); */

/*function puedeSubirMejorado (altura, vieneAcompaniado){
    if (altura > 1.40 && altura <2){
        return true;
    } else if (altura > 1.20 && altura < 1.40 && vieneAcompaniado === true && altura > 1.2) {
        return true;
    } else {
        return false
    }
}

console.log(puedeSubirMejorado (1.50,false));*/
 /*function puedeSubirFinal (altura, vieneAcompaniado, estaPenalizado){
    if (estaPenalizado === true){
        return false;
    }
    else {
    if (altura > 1.40 && altura <2){
        return true;
    } else if (altura > 1.20 && altura < 1.40 && vieneAcompaniado === true && altura > 1.2) {
        return true;
    } else {
        return false
    }
}
}

console.log(puedeSubirMejorado (1.50,false)); */

function jugar (dado){
    switch (dado) {
        case "lunes":
            console.log ("Tirarse a la pileta")
            break;
        case "martes":
            console.log ("Corre un kilometro")    
            break;
        case "miercoles":
            console.log ("Ande en bici")
            break;
        case "jueves":
            console.log ("Partida de lolcito")
            break;
        default:
            console.log("Hace lo que quieras")
            break;
    }
}

jugar ("jueves")
