var productos = new Array();
var totalillo = 0 ;
var caca = 0;
var checked = 0;
let contador1 = 0;
let contador2 = 0;
let contador3 = 0;
let contador4 = 0;
let contador5 = 0;
let Result1 = 0;
let Result2 = 0;
let Result3 = 0;
let Result4 = 0;
let Result5 = 0;
//var miCanvas = document.getElementById("MiGrafica").getContext("2d");
      
    /*if (document.getElementById('cosako'.checked))
    {
        alert('checkbox1 esta seleccionado');
    }*/
function validaCheckbox(){
    //let pass = document.getElementById("caca").value;
    var checkbox0 = document.getElementById('cosako');
    checkbox0.addEventListener("change", validaCheckbox, false);
    {
        var checked = checkbox0.checked;
        if(checked){
            caca = caca + 130;
            //alert(caca);
            contador1 = contador1 + 1;
            document.getElementById("contador_1").value = contador1;
            document.getElementById("resultado1").value = contador1 * 130;
            Result1 = contador1 * 130;
        }
    }

    var checkbox1 = document.getElementById('Skyy');
    checkbox1.addEventListener("change", validaCheckbox, false);
    {
        var checked = checkbox1.checked;
        if(checked){
            caca = caca + 40;
            //alert(caca);
            contador2 = contador2 + 1;
            document.getElementById("contador_2").value = contador2;
            document.getElementById("resultado2").value = contador2 * 40;
            Result2 = contador2 * 40;
        }
    }
    
     var checkbox2 = document.getElementById('Kraken');
     checkbox2.addEventListener("change", validaCheckbox, false);
    {
        var checked = checkbox2.checked;
        if(checked){
            caca = caca + 250;
            //alert(caca);
            contador3 = contador3 + 1;
            document.getElementById("contador_3").value = contador3;
            document.getElementById("resultado3").value = contador3 * 250;
            Result3 = contador3 * 250;
        }
    }

    var checkbox3 = document.getElementById('Azul');
    checkbox3.addEventListener("change", validaCheckbox, false);
    {
        var checked = checkbox3.checked;
        if(checked){
            caca = caca + 50;
            //alert(caca);
            contador4 = contador4 + 1;
            document.getElementById("contador_4").value = contador4;
            document.getElementById("resultado4").value = contador4 * 50;
            Result4 = contador4 * 50;
        }
     }

    var checkbox4 = document.getElementById('XX');
    checkbox4.addEventListener("change", validaCheckbox, false);
    {
        var checked = checkbox4.checked;
        if(checked){
            caca = caca + 55;
            //alert(caca);
            contador5 = contador5 + 1;
            document.getElementById("contador_5").value = contador5;
            document.getElementById("resultado5").value = contador5 * 55;
            Result5 = contador5 * 55;
        }
    }
        
    alert("El total de los productos es: " + caca);
}
function graficacion(){
    var miCanvas = document.getElementById("MiGrafica").getContext("2d");
    if(mychart){
        mychart.clear();
        mychart.destroy();
    }
    var mychart = new Chart(miCanvas,{
        type: "bar",
        data: {
            labels: ['Kosaco' , 'Skyy','Kraken','Azul','kawuama'],
            datasets:[{
                label:"Resultados",
                data:[Result1,Result2,Result3,Result4,Result5],
                backgroundColor: [
                    "rgb(23, 255, 119)",
                    "rgb(77, 77, 255)",
                    "rgb(255, 51, 204)",
                    "rgb(153, 255, 102)",
                    "rgb(102, 255, 255)"
                ]
            }]
        },
        options:{
            scales:{
                yAxes:[{
                    ticks:{
                        beginAtZero:true,
                        responsive: true,
                        maintainAspectRatio: false,
                        }
                }]
            }
            
        }
    });
    
}
    

    

    