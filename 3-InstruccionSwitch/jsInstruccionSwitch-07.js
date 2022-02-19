// Enunciado:
// Al selecionar un destino, 
// indicar el punto cardinal de nuestro pais en donde se encuentra 
// Norte, Sur, Este u Oeste

function mostrar() 
{
	var destinoIngresado;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch (destinoIngresado) {
		case "Bariloche":
			alert("Bariloche está al oeste");
			break;
		case "Cataratas":
			alert("Cataratas está al norte");
			break;
		case "Mar del plata":
			alert("Mar del plata está al este");
			break;
		case "Ushuaia":
			alert("Ushuaia está al sur");
			break;
	}
}