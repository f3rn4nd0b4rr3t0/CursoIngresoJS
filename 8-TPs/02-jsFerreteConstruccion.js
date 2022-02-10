/*2.	Para el departamento de Construcción:
A.	mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.*/

// A. mostrar la cantidad de alambre a comprar  
// si se ingresara el largo y el ancho de un terreno rectangular y 
// se debe alambra con tres hilos de alambre.
function Rectangulo () 
{
    var largo;
    var ancho;
    var perimetro;
    var cantidadAlambre;
      
    largo = document.getElementById ("txtIdLargo") . value ;
    ancho = document.getElementById ("txtIdAncho") . value ;
    
    largo = parseFloat (largo) ;
    ancho = parseFloat (ancho) ;
    
    perimetro = largo * 2 + ancho * 2;
    
    cantidadAlambre = perimetro * 3;
    
    alert (cantidadAlambre.toFixed (2));
}

// // B. mostrar la cantidad de alambre a comprar  
// si se ingresara el radio  de un terreno circular y 
// se debe alambra con tres hilos de alambre.
function Circulo () 
{
	var radio;
    var perimetro;
    var cantidadAlambre;
    const PI = 3.14;
    
    radio =  parseFloat(document.getElementById("txtIdRadio").value);

    perimetro = PI * 2 *  radio;
    
    cantidadAlambre = perimetro * 3;
    
    alert (cantidadAlambre.toFixed (2));
}

// C. Para hacer un contrapiso de 1m x 1m se necesitan 
// 2 bolsas de cemento y 3 de cal, 
//debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
function Materiales () 
{
    var largo;
    var ancho;
    var area;
    const bolsasCemento = 2;
    const bolsasCal = 3;
    var totalCemento;
    var totalCal;
    
    
    largo = document.getElementById("txtIdLargo") . value;
    ancho = document.getElementById("txtIdAncho") . value;
    
    largo = parseFloat (largo);
    ancho = parseFloat (ancho);
    
    area = largo * ancho;

    totalCemento = area * bolsasCemento;
    totalCal = area * bolsasCal;

    alert (`Se necetian ${totalCemento} de cemento y ${totalCal}  de cal`);
}