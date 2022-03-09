/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/

function mostrar()
{	
	var nombreIngresad;
	var edadIngresada;

	nombreIngresad = document. getElementById ("txtIdNombre") . value;
	edadIngresada = document. getElementById ("txtIdEdad") . value;

		alert(" Usted se llama " + nombreIngresad + " y tiene " + edadIngresada + " años ");
}

