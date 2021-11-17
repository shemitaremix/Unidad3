var num1 = 10;
var num2 = 10;
var total = 0;
var operacioncita ;
var operacion = prompt("Favor de ingresae la operacion");


switch(operacion)
{
    case 'suma':
        suma ();
    break;
    case 'resta':
        resta (); 
    break;
    case 'multiplicacion':
        multiplicacion ();
    break;
    case 'division':
        division();
    break;
     
}
alert("El resultado de la operación es " +operacioncita + "el resultado: "+  total);


function suma()
{
   total =  num1 + num1;
   operacioncita = "suma";
}

function resta()
{
   total =  num1 - num1;
   operacioncita = "resta";
}
function multiplicacion()
{
   total =  num1 * num1;
   operacioncita = "multiplicacion";
}
function division()
{
   total =  num1 % num1;
   operacioncita = "division";
}
