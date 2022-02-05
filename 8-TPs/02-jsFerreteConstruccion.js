/*2.	Para el departamento de Construcción:
A.	mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.*/
function Rectangulo () // A. mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
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
function Circulo () // B. mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
{
	var radio;
    var perimetro;
    var cantidadAlambre;
    
    
    radio =  parseFloat(document.getElementById("txtIdRadio").value);

    perimetro = 3.14 * 2 *  radio;
    
    cantidadAlambre = perimetro * 3;
    
    alert (cantidadAlambre.toFixed (2));
}
function Materiales () // C. Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
{
    var largo;
    var ancho;
    var area;
    var bolsasCemento; 2
    var bolsasCal; 3
    var totalCemento;
    var totalCal;
    var contrapiso;
    
    largo = document.getElementById("txtIdLargo") . value;
    ancho = document.getElementById("txtIdAncho") . value;
    
    largo = parseFloat (largo);
    ancho = parseFloat (ancho);
    
    area = largo * ancho;

    totalCemento = area * bolsasCemento;
    
    totalCal = area * bolsasCal;

    contrapiso =  totalCal + totalCemento;


    alert (contrapiso)
}