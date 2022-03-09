/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso() 
{
	var edadIngresada;
	var sexoIngresado;
	var estadoCivilIngresado;
	var sueldoBruto;
	var numeroLegajo;
	var nacionalidad;

	edadIngresada = parseInt(prompt("Ingrese su edad (entre 18 y 90)"));
	while (edadIngresada < 18 || edadIngresada > 90) {
	}
	sexoIngresado = prompt("Ingrese letra correspondiente a sexo: (m) para masculino / (f) para femenino").toLocaleLowerCase();
	while (sexoIngresado != "m" && sexoIngresado != "f") {
		sexoIngresado = prompt("Error: Reingrese letra sexo correspondiente: (m) para masculino / (f) para femenino");
	}
	estadoCivilIngresado = parseInt(prompt("Ingrese numero correspondiente a estado civil: (1) soltero / (2) casado / (3) divorciado / (4) viudos"));
	while (estadoCivilIngresado < 1 || estadoCivilIngresado > 4) {
		estadoCivilIngresado = parseInt(prompt("Error: Reingrese numero correspondiente a estado civi: (1) soltero / (2) casado / (3) divorciado / (4) viudos"));
	}
	sueldoBruto = parseInt(prompt("Ingrese sueldo mayor a 8000"));
	while (sueldoBruto < 8000) {
		sueldoBruto = parseInt(prompt("Error: Reingrese sueldo mayor a 8000"));
	}
	numeroLegajo = parseInt(prompt("Ingrese numero legajo de 4 cifras sin ceros a la izquierda"));
	while (numeroLegajo < 1000 || numeroLegajo > 9999) {
		numeroLegajo = parseInt(prompt("Error: Reingrese numero legajo valido (desde 1000 hasta 9999)"));
	}
	nacionalidad = prompt("Ingrese letra de nacionalidad correspondiente: (a) Argentino || (e) Extranjero || (n) Nacionalizado").toLocaleLowerCase();
	while (nacionalidad != "a" && nacionalidad != "e" && nacionalidad != "n") {
		nacionalidad = prompt("Error: Reingrese letra de nacionalidad correspondiente: (a) Argentino || (e) Extranjero || (n) Nacionalizado")
	}
	document.getElementById("txtIdEdad").value = edadIngresada;
	document.getElementById("txtIdSexo").value = sexoIngresado;
	document.getElementById("txtIdEstadoCivil").value = estadoCivilIngresado;
	document.getElementById("txtIdSueldo").value = sueldoBruto;
	document.getElementById("txtIdLegajo").value = numeroLegajo;
	document.getElementById("txtIdNacionalidad").value = nacionalidad;
}
