
/*************************************************************************************************************

Al presionar el botón pedir  números  hasta que el USUARIO QUIERA e informar la suma acumulada y el promedio.

*************************************************************************************************************/

function mostrar() 
{
	var numeroIngresado;
	var contador;
	var acumulador;
	var promedio;
	var respuesta = "si";

	acumulador = 0;
	contador = 0;

	while (respuesta == "si") {
		numeroIngresado = parseInt(prompt("Ingrese un número"));
		acumulador = acumulador + numeroIngresado;
		contador = contador + 1;
		respuesta = prompt("Agregar otro número: (SI/NO)").toLowerCase();
	}
	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
}
