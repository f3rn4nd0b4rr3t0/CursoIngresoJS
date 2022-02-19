// Enunciado:
// Al seleccionar un destino informar 
// si hace FRIO o 
// CALOR en ese destino

function mostrar() 
{
	var destino;
	destino = document.getElementById("txtIdDestino").value;

	switch (destino) {
		case "Cataratas":
		case "Mar del plata":
			alert("Hace calor");
			break;
		case "Bariloche":
		case "Ushuaia":
			alert("Hace frío");
			break;
		default:
			break;
	}
}