/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */

function mostrar() 
{
	var numeroIngresado;
	var sumaNegativos = 0;
	var sumaPositivos = 0;
	var cantidadPositivos = 0;
	var cantidadNegativos = 0;
	var cantidadCeros = 0;
	var cantididadPares = 0;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;
	var respuesta;
	var flagNegativo = 0;
	
	do {
		numeroIngresado = parseInt(prompt("Ingrese numero:  "));

		if (numeroIngresado == 0) {
			cantidadCeros++;
		}
		else if (numeroIngresado < 0) {
			sumaNegativos += numeroIngresado;
			cantidadNegativos++;
		}
		else if (numeroIngresado > 0){
			sumaPositivos += numeroIngresado;
			cantidadPositivos++;
		}
		if (numeroIngresado % 2 == 0) {
			cantididadPares ++;
		}
		respuesta = prompt("Desea otro agregar otro numero?: (SI/NO)").toLowerCase();
	}
	while (respuesta == "si");
	
	promedioPositivos = sumaPositivos / cantidadPositivos;
			
	if (flagNegativo == 0) {
		promedioNegativos = sumaNegativos / cantidadNegativos;
	}

	diferencia = sumaPositivos + sumaNegativos;
	
	document.write("Cantidad de ceros: " + cantidadCeros + "<br>");
	document.write("Suma de negativos: " + sumaNegativos + "<br>");
	document.write("Suma de positivos: " + sumaPositivos + "<br>");
	document.write("Cantidad de negativos: " + cantidadNegativos + "<br>");
	document.write("Cantidad de positivos: " + cantidadPositivos + "<br>");
	document.write("Cantidad de numeros pares:" + cantididadPares + "<br>");
	document.write("Promedio de negativos: " + promedioNegativos + "<br>");
	if (isNaN(promedioPositivos)) {
		document.write("Promedio de Positivos: " + promedioPositivos + "<br>");
	}
	document.write("Diferencia de positivos y negativos: " + diferencia);
}