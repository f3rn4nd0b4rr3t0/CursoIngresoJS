/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

function FahrenheitCentigrados () 
{
	var fahrenheit;
    var temperatura;
    var centigrados;
    const FAH = Math.FahrenheitCentigrados;
    
    fahrenheit = parseFloat (document. getElementById ("txtIdTemperatura"). value);
    temperatura = parseFloat (document. getElementById ("txtIdTemperatura"). value);
        
    fahrenheit = (temperatura * 1.8) + 32;

    centigrados = (FAH - 32) / 1.8;

    alert (`Son ${fahrenheit} centígrados`);
    
}


function CentigradosFahrenheit () 
{
	var centigrados;
    var temperatura;
    var fahrenheit;
    const C = Math.centigrados;

    centigrados = parseFloat (document. getElementById ("txtIdTemperatura"). value);
    temperatura = parseFloat (document. getElementById ("txtIdTemperatura"). value);

    centigrados = (temperatura - 32)  / 1.8;

    fahrenheit = (C * 1.8) + 32;
    
    alert (`Son ${centigrados} fahrenheit`);
}
