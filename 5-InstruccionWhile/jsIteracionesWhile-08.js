/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numero;

	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta="si";

	while (respuesta == "si") 
	{
		numero = parseInt(prompt("Ingrese un número:"));
		if (numero >=0) {
			sumaPositivos = sumaPositivos + numero;
		}
		else {
			multiplicacionNegativos = multiplicacionNegativos * numero;
			}
		respuesta = prompt("Quiere seguir ingresando números? (SI/NO)").toLowerCase();
	}
	document.getElementById ("txtIdSuma").value = sumaPositivos;
	document.getElementById ("txtIdProducto").value = multiplicacionNegativos;
}