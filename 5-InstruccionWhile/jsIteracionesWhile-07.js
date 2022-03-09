
function mostrar() 
{
	var nombre;
    var edad;
    var peso;
    var altura;
    var flagedadJugadorMasAlto = 0;
    var edadJugadorMasAlto;
    var alturaMayor;
    var flagJugadorMenosPesado = 0;
    var nombreJugadorMenosPesado;
    var pesoJugadorMenosPesado;
    var pesoDelEquipo = 0;
    var cantidadJugadores = 0;
    var promedioPesoEquipo;
    var jugadoresEdad13Y15Altura165Y179 = 0;

    for (var i = 1; i <= 11; i++) {
        nombre = prompt("Ingrese nombre: ").toLowerCase();

        do {
            edad = parseInt(prompt("Ingrese edad: (entre 12 y 17)"));
        } while (edad < 12 || edad > 17);

        peso = parseFloat(prompt("Ingrese peso: "));

        altura = parseFloat(prompt("Ingrese altura: "));

        if(flagedadJugadorMasAlto == 0){
            edadJugadorMasAlto = edad;
            alturaMayor = altura;
            flagedadJugadorMasAlto = 1;
        }
        else if (alturaMayor < altura) {
            edadJugadorMasAlto = edad;
            alturaMayor = altura;
        }

        if(flagJugadorMenosPesado == 0){
            nombreJugadorMenosPesado = nombre;
            pesoJugadorMenosPesado = peso;
            flagJugadorMenosPesado = 1;
        }
        else if (pesoJugadorMenosPesado > peso) {
            nombreJugadorMenosPesado = nombre;
            pesoJugadorMenosPesado = peso;
        }

        pesoDelEquipo += peso;
        cantidadJugadores++;

        if ((edad > 13 || edad < 15) && (altura > 1.65 || altura < 1.79)) {
            jugadoresEdad13Y15Altura165Y179++;
        }
        
    }

    promedioPesoEquipo = pesoDelEquipo / cantidadJugadores;

	
}