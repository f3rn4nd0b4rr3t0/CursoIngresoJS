//Enunciado:
//al presionar el botón pedir un número. 
//mostrar los numeros divisores desde el 1 al número ingresado, 
//y mostrar la cantidad de numeros divisores encontrados.

function mostrar() 
{
	var i;
	var numeroIngresado;
	var contadorDivisores;

	numeroIngresado = parseInt(prompt("Ingrese un número:"));

	for (i = 1; i <= numeroIngresado; i++) {
		if (numeroIngresado % i == 0) {
			contadorDivisores++;
			console.log(i);
		}
	}
}