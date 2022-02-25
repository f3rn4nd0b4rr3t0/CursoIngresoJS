//Enunciado:
//al presionar el botón pedir la cantidad de veces 
//que quiero repetir el mensaje "Hola UTN FRA"

function mostrar()
{

		var i;
		var repeticiones;

		repeticiones = parseInt(prompt("Ingrese el número de repeticiones"));

		for (i = 0; i < repeticiones; i++){
			alert ("Hola UTN FRA")
		}
}