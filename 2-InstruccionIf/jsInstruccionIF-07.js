//FERNANDO BARRETO NOCHE (F)
//Ejercicio 02 V3 A+B+C+D+E+F+G+H+I+J

//.Ejercicio 07 BIS V3(Realizar en los archivos  del ejercicio 07 del IF)
//además de los datos ya ingresados , solicitar el nombre .
//si es menor de 13 , , mostrar el mensaje “feliz día”.
//Si es adolescente el mensaje es “usted es adolexcente”)
//si tiene 17 años además mostrar el mensaje “último año!!!”
//Si es mayor de edad mostrar el mensaje “tienes edad de laburar”.
//si tiene 33 años , además mostrar el mensaje “como cristo”
//si tiene más de 60 años, además mostrar el mensaje “A jubilarse”.
//si tiene 88, además mostrar el mensaje “lindo número''
//si la edad es par , además mostrar , “sos par!!”.
//si se llama ‘Violeta’ y es adolescente , sumar el mensaje ‘como un color!!’
//si se llama ‘Ricardo’ y es un menor a 13 , sumar el mensaje ‘muy chiquito para ese nombre’
//si se llama ‘Alfredo’ y esta para jubilarse , sumar el mensaje ‘como el de 	QUEEN’.
//Si no es menor de 13 y está casado , además mostrar el mensaje ‘casada quiere casa’.
//Si sos soltero y mayor de edad y no tienes edad para jubilarse , sumar el mensaje ‘a salir ‘
//Si sos divorciado y sos adolescente, además mostrar ‘toda una vida por delante’

//****************************************************************************************************/

function mostrar() 
{
	let edad;
	let mensaje;
	let nombre;
	let estadoCivil;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	estadoCivil = document.getElementById("estadoCivil").value;

	nombre = prompt("Ingrese su nombre");

	mensaje = edad;

	{
		if (edad < 13) {
			mensaje = "Feliz dia";
			if (nombre == "Ricardo") {
				mensaje = "sos muy chiquito para ese nombre";
			}
		}
		else if (edad < 18) {
			mensaje = "usted es adolescente";
		} if (nombre == "Violeta") {
			mensaje = mensaje + "; como un color";
		} if (estadoCivil == "Divorciado") {
			mensaje = mensaje + "; toda una vida por delante";
		} if (edad == 17) {
			mensaje = mensaje + "; es el último año!!!";
		}
		if (edad >= 18) {
			mensaje = "tenes edad de laburar";
			if (estadoCivil == "Casado") {
				mensaje = mensaje + "; casada quiere casa"
			}
			else (estadoCivil == "soltero")
			{
				mensaje = mensaje + "; a salir"
			}
		}
		if (edad == 33) {
			mensaje = mensaje + "; como Cristo";
		}
		if (edad >= 60) {
			mensaje = "a jubilarse";
			if (nombre == "Alfredo") {
				mensaje = mensaje + "; como el de QUEEN"
			}
		}
		if (edad >= 88) {
			mensaje = " lindo número";
		}
		if (edad % 2 == 0) {
			mensaje = mensaje + " y sos par";
		}
	}
	alert(`${nombre} ${mensaje}`);
}