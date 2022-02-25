/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() 
{
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	var flag;

	flag = 0;

	respuesta = "si";

	do {
		numeroIngresado = parseInt(prompt("Ingrese un numero"));

		if (flag == 0 || numeroIngresado > numeroMaximo) {
			numeroMaximo = numeroIngresado;
		}
		if (flag == 0 || numeroIngresado < numeroMinimo) {
			numeroMinimo = numeroIngresado;
			flag = 1;
		}
		respuesta = prompt("Desea ingresar otro numero? (SI/NO)").toLowerCase();
	} while (respuesta == "si");

	document.getElementById("txtIdMaximo").value = "Maximo:" + numeroMaximo;
	document.getElementById("txtIdMinimo").value = "Minimo:" + numeroMinimo;
}