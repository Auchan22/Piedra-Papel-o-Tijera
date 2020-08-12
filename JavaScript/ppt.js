console.log("Conectado");

/*let us = "Juan";
let vs = "Pedro";

let ush = Math.floor(Math.random()*6)+1;
let vsh = Math.floor(Math.random()*6)+1;

let hyo = "";
let hel = "";

switch (ush) {
    case 1:
        hyo = "Tijera";
    break;
    
    case 2:
        hyo = "Papel";
    break;

    case 3:
        hyo = "Piedra";
    break;

    case 4:
        hyo = "Tijera";
    break;
        
    case 5:
        hyo = "Papel";
    break;
        
    case 6:
        hyo = "Piedra";
    break;

    default:
        hyo = "No elegiste nada";
    break;
}

switch (vsh) {
    case 1:
        hel = "Piedra";
    break;

    case 2:
        hel = "Tijera";
    break;

    case 3:
        hel = "Papel";
    break;

    case 4:
        hel = "Piedra";
    break;

    case 5:
        hel = "Tijera";
    break;

    case 6:
        hel = "Papel";
    break;

    default:
        hel = "No elegiste nada";
    break;
}
var r = ""
if(hyo < hel){
    r = "Vos perdiste";
}else{
    r = "Vos ganaste";
}


let resultado = "Vos sos: " + us + " Y tu enemigo es: " + vs + " Vos elegiste: " + hyo + " Y el: " + hel + ". Y vos: " + r ;


document.getElementById("Resultado").innerHTML = resultado;*/

let user_v = 0;
let cpu_v = 0;

const Result = document.querySelector(".result ");
const userscore = document.getElementById("user-v");
const cpuscore = document.getElementById("cpu-v");
const Tablero = document.querySelector(".tablero");
const Piedra = document.getElementById("pi");
const Papel = document.getElementById("pa");
const Tijera = document.getElementById("ti");
let startbtn = document.getElementById("start");
let reiniciarbtn = document.getElementById("restart");

function EleccionCpu(){
    const opciones = ["pi", "pa", "ti"];
    const aleatorio = Math.floor(Math.random()*3);
    const eleccion = opciones[aleatorio];
    return eleccion;
}

function convertir(opcionL){
    if(opcionL == "pi"){
        return "Piedra";
    } else if(opcionL == "pa"){
        return "Papel";
    }else{
        return "Tijera";
    }
}

function ganar(opcionUser, opcionCpu){
    user_v++;
    userscore.innerHTML = user_v;
    Result.innerHTML = "El usuario ganó con la eleccion: " + convertir(opcionUser) + ", frente a la eleccion de la I.A, que fue: " + convertir(opcionCpu) + "."
    const eleccionuser = document.getElementById(opcionUser);
    const eleccioncpu = document.getElementById(opcionCpu);
    eleccionuser.classList.add("gano");
    eleccioncpu.classList.add("perdio");
    setTimeout(function(){
        eleccionuser.classList.remove("gano");
        eleccioncpu.classList.remove("perdio");
    }, 1000);
}

function perder(opcionUser, opcionCpu){
    cpu_v++;
    cpuscore.innerHTML = cpu_v;
    Result.innerHTML = "La I.A ganó con la eleccion: " + convertir(opcionCpu) + ", frente a la eleccion del Usuario, que fue: " + convertir(opcionUser) + "."
    const eleccionuser = document.getElementById(opcionUser);
    const eleccioncpu = document.getElementById(opcionCpu);
    eleccionuser.classList.add("perdio");
    eleccioncpu.classList.add("gano");
    setTimeout(function(){
        eleccionuser.classList.remove("perdio");
        eleccioncpu.classList.remove("gano");
    }, 1000);
}

function empate(opcionUser, opcionCpu){
    Result.innerHTML = "Hubo un empate, ambos eligieron: " +convertir(opcionUser)+ ".";
    const eleccionuser = document.getElementById(opcionUser);
    eleccionuser.classList.add("empate");
    setTimeout(function(){
        eleccionuser.classList.remove("empate");
    }, 1000);
}

function juego(opcion){
    const eleccionCpu = EleccionCpu();
    const eleccionUser = opcion;

    startbtn.style.display = "none";
    reiniciarbtn.style.visibility = "visible";

    switch(eleccionUser+eleccionCpu){
        case "piti":
        case "tipa":
        case "papi":
            ganar(eleccionUser, eleccionCpu);
        break;

        case "tipi":
        case "pati":
        case "pipa":
            perder(eleccionUser, eleccionCpu);
        break;

        case "titi":
        case "papa":
        case "pipi":
            empate(eleccionUser, eleccionCpu);
        break;
    }
}

function reiniciar(){
    user_v = 0;
    cpu_v = 0;
    userscore.innerHTML = user_v;
    cpuscore.innerHTML = cpu_v;

    reiniciarbtn.style.visibility = "hidden";
    startbtn.style.display = "block";
    Result.innerHTML = "";
}



function principal(){
    Piedra.addEventListener("click", () => juego("pi"));
    Papel.addEventListener("click", () => juego("pa"));
    Tijera.addEventListener("click", () => juego("ti"));
}
principal();

