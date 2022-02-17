//Enunciado:
//al seleccionar un mes informar.
//si estamos en Invierno: "Abrigate que hace frio."
//si aún no llego el Invierno: "Falta para el invierno."
//si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
//ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
//Curso de ingreso UTN FRA

function mostrar() 
{

	var mesDelAño;

	mesDelAño = document.getElementById("txtIdMes").value;

	switch (mesDelAño) {
		case "Febrero":
		alert("Tiene 28 días");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
		alert("Tiene 30 días");
			break;
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
		alert("Tiene 31 días");
			break; 
	}
}