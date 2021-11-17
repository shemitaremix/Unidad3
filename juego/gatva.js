var bandera = false;
var turno = 0;
var tab = new Array();
window.onload = function(){
    var iniciar = document.getElementById("iniciar");
    iniciar.addEventListener("click",comenzar);
}
function comenzar(){
    bandera = true;
    var jugador1 = document.getElementById("jugador1");
    var jugador2 = document.getElementById("jugador2");
    if(jugador1.value==""){  
        alert("ingrese el nombre del primer juador");
        jugador1.focus();
    } else{
        if(jugador2.value==""){
            alert("Ingrese el nombre del segundo jugador")
            jugador2.focus();
        }else{
            tab[0] = document.getElementById("b0");
            tab[1] = document.getElementById("b1");
            tab[2] = document.getElementById("b2");
            tab[3] = document.getElementById("b3");
            tab[4] = document.getElementById("b4");
            tab[5] = document.getElementById("b5");
            tab[6] = document.getElementById("b6");
            tab[7] = document.getElementById("b7");
            tab[8] = document.getElementById("b8");
            for(var i=0;i<9;i++){
               tab[i].className = "botonInicial"; 
               tab[i].value = "I";
            }
            turno = 1;
            document.getElementById("turnojugador").innerHTML = "Adelante Jugador " + jugador1.value;
        }
    }
}
function colocar(boton){
    if(bandera==true){
        if(turno==1 && boton.value == "I")
        {
            turno = 2;
            document.getElementById("turnojugador").innerHTML = "Adelante jugador " + jugador2.value;
            boton.value = "x";
            boton.className = "botonJugador1";
        }else{
            if(turno==2 && boton.value=="I"){
                turno = 1;
                document.getElementById("turnojugador").innerHTML = "Adelante jugador " + jugador1.value;
                boton.value = "o";
                boton.className = "botonJugador2";
            }
        }
    
    }
    revisar();
}
function revisar(){
    if((tab[0].value == "x" && tab[1].value=="x" && tab[2].value == "x")
    || (tab[3].value == "x" && tab[4].value=="x" && tab[5].value == "x")
    || (tab[6].value == "x" && tab[7].value=="x" && tab[8].value == "x")
    || (tab[0].value == "x" && tab[3].value=="x" && tab[6].value == "x")
    || (tab[1].value == "x" && tab[4].value=="x" && tab[7].value == "x")
    || (tab[2].value == "x" && tab[5].value=="x" && tab[8].value == "x")
    || (tab[0].value == "x" && tab[4].value=="x" && tab[8].value == "x")
    || (tab[2].value == "x" && tab[4].value=="x" && tab[6].value == "x")
    ){
        alert("Felicidades ganaste jugador " + jugador1.value);
        bandera = false;
    }
    if((tab[0].value == "o" && tab[1].value=="o" && tab[2].value == "o")
    || (tab[3].value == "o" && tab[4].value=="o" && tab[5].value == "o")
    || (tab[6].value == "o" && tab[7].value=="o" && tab[8].value == "o")
    || (tab[0].value == "o" && tab[3].value=="o" && tab[6].value == "o")
    || (tab[1].value == "o" && tab[4].value=="o" && tab[7].value == "o")
    || (tab[2].value == "o" && tab[5].value=="o" && tab[8].value == "o")
    || (tab[0].value == "o" && tab[4].value=="o" && tab[8].value == "o")
    || (tab[2].value == "o" && tab[4].value=="o" && tab[6].value == "o")
    ){
        alert("Felicidades ganaste jugador " + jugador2.value);
        bandera = false;
    }
}