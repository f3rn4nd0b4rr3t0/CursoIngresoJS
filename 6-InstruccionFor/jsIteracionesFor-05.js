//Enunciado:
//al presionar el botón repetir el pedido de número 
//hasta que ingresemos el 9.

function mostrar() 
{
	var numero;

	for (var i = 0; ;) {
		numero = parseInt(prompt("Ingrese un número"));
		if (numero == 9) {
			break;
		}
	}
}