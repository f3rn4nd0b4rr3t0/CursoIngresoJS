/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/

function mostrar()
{
var claveIngresada;

claveIngresada = prompt("Ingrese número de clave");

while(claveIngresada != "utn750")
{
	claveIngresada = prompt("Ingrese número de clave");
}
alert("BIEVENIDO!!!");
}