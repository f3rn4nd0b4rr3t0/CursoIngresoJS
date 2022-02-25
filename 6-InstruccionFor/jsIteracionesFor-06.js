//Enunciado:
//al presionar el botón pedir un número. 
//mostrar los numeros pares desde el 1 al número ingresado, 
//y mostrar la cantidad de numeros pares encontrados.

function mostrar() 
{
	var i;
	var numeroIngresado;
	var contadoNumerosPares;

	numeroIngresado = parseInt(prompt("Ingrese un número"));

	for (i = 1; i <= numeroIngresado; i++) {
		if (i % 2 == 0) {
			contadoNumerosPares++;
			console.log(i);
		}
	}
}