/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () // A  Ingresar tres precios de productos y mostrar la suma de los mismos.
{
var precioUno;
var precioDos;
var precioTres;
var suma;

precioUno = document. getElementById ("txtIdPrecioUno") . value ; 
precioDos = document. getElementById ("txtIdPrecioDos") . value ;
precioTres = document. getElementById ("txtIdPrecioTres") . value ; 

precioUno = parseFloat (precioUno);
precioDos = parseFloat (precioDos);
precioTres = parseFloat (precioTres);

suma = precioUno + precioDos + precioTres;

alert (suma .toFixed(2));
}


function Promedio () // B  Ingresar tres precios de productos y mostrar el promedio de los mismos.
{
	var precioUno;
    var precioDos;
    var precioTres;
    var promedio;

    precioUno = document. getElementById ("txtIdPrecioUno") . value ; 
    precioDos = document. getElementById ("txtIdPrecioDos") . value ;
    precioTres = document. getElementById ("txtIdPrecioTres") . value ; 
    
    precioUno = parseFloat (precioUno);
    precioDos = parseFloat (precioDos);
    precioTres = parseFloat (precioTres);
    
   promedio = (precioUno + precioDos + precioTres) / 3;
    
   alert (promedio .toFixed (2));
}


function PrecioFinal () // C  ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
{
    var precioUno;
    var precioDos;
    var precioTres;
    var suma;
    var iva;
    var PrecioFinal;

    precioUno = document. getElementById ("txtIdPrecioUno") . value ; 
    precioDos = document. getElementById ("txtIdPrecioDos") . value ;
    precioTres = document. getElementById ("txtIdPrecioTres") . value ; 
    
    precioUno = parseFloat (precioUno);
    precioDos = parseFloat (precioDos);
    precioTres = parseFloat (precioTres);
    
    suma = (precioUno + precioDos + precioTres) ;

    iva = suma * 21 / 100;

    PrecioFinal = suma + iva;
    
    
    alert (PrecioFinal .toFixed (2));
}