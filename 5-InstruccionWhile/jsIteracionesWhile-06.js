//Enunciado:
//Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.

function mostrar() 
{
	var numeroIngresado;
	var contador;
	var suma;
	var promedio;

	contador = 0;
	suma = 0;

	while (contador < 5) 
	{
	numeroIngresado = parseInt(prompt("Ingrese un número:"));	
	suma = suma + numeroIngresado;
	contador = contador + 1;
	}
	promedio = suma / contador;

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio" ).value = promedio;
}