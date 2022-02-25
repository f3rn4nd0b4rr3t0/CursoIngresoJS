//Enunciado:
//al presionar el botón 
//repetir hasta que utilizamos 'BREAK'.

function mostrar() 
{

	var i;

	for (i = 0; i < 5; i++) {
		console.log(i);
		if (i == 4) {
			break;
		}
	}
}