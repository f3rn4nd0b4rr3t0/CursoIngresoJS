//Enunciado:
//una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final
//en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%
//en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%
//en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento

function mostrar()
{
	const PRECIO_BASE = 15000;
	var destinoIngresado = document.getElementById("txtIdDestino").value;
	var estacionIngresada = document.getElementById("txtIdEstacion").value;
	var importeFinal;
	var porcentaje;
	// var descuento = 0;
	// var aumento = 0;

	switch(estacionIngresada) {
		case "Invierno":
			switch(destinoIngresado) {
				case "Bariloche":
					porcentaje = 20;
					//aumento = 20;
					break;
				case "Cataratas":
				case "Cordoba":
					porcentaje = -10;
					//descuento = 10;
					break;
				case "Mar del plata":
					porcentaje = -20;
					//descuento = 20;
					break;
			}
			break;
		case "Verano":
			switch(destinoIngresado) {
				case "Bariloche":
					porcentaje = -20;
					//descuento = 20;
					break;
				case "Cataratas":
				case "Cordoba":
					porcentaje = 10;
					//aumento = 10;
					break;
				case "Mar del plata":
					porcentaje = 20;	
					//aumento = 20;
					break;
			}
			break;
		case "Otoño":
		case "Primavera":
			switch(destinoIngresado) {
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					porcentaje = 10;
					//aumento = 10;
					break;
				case "Cordoba":
					porcentaje = 0;
					break;
			}
			break;
	}

	// switch(aumento)
	// {
	// 	case 0:
	// 	case 10:
	// 	case 20:
	// 		importeFinal = PRECIO_BASE + PRECIO_BASE * aumento/100;
	// 		break;
	// }
	
	// switch(descuento)
	// {
	// 	case 10:
	// 	case 20:
	// 		importeFinal = PRECIO_BASE - PRECIO_BASE * descuento/100;
	// 		break;
	// }
	
	porcentaje = PRECIO_BASE * porcentaje / 100;
	importeFinal = PRECIO_BASE + porcentaje;

	alert(`Precio final: $${importeFinal.toFixed(2)}`);

}//FIN DE LA FUNCIÓN

