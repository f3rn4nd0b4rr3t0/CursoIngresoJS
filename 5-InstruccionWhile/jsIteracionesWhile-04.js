/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;

	numeroIngresado = prompt("Ingrese un número entre 0 y 9");

	while (!(numeroIngresado >= 0 && numeroIngresado <= 9)) {
		numeroIngresado = prompt("Ingrese un número entre 0 y 9");
	}
	alert("Ha ingresado un número correcto");
	document.getElementById("txtIdNumero").value = numeroIngresado;
}