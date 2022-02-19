/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar() 
{
	var sexoIngresado;

	sexoIngresado = prompt("Ingrese f ó m");
	
	while (sexoIngresado !== "f" && sexoIngresado !=="F" && sexoIngresado !== "m" && sexoIngresado !=="M") {
		sexoIngresado = prompt("Volvé a ingresar f o m");
	}
	document.getElementById("txtIdSexo").value = sexoIngresado;
}