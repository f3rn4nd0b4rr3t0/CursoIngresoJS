//Enunciado:
//al presionar el botón pedir un número. Informar si el numero es PRIMO o no.

function mostrar() 
{
	var i;
	var numeroIngresado;
	var contadorNumerosprimos;


	numeroIngresado = parseInt(prompt("Ingrese un número"));

	for (i = 1; i <= numeroIngresado; i++) {
		if (numeroIngresado % i == 0) {
			contadorNumerosprimos++
			alert("Es número primo");
			break;
		}
		else {
			alert("No es número primo");
			break;
		}
	}
}