/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperatura_f; temperatura_c;
    
    temperatura_f = document.getElementById ("Temperatura").value;
    temperatura_f = parseInt (temperatura_f);

    temperatura_c = (temperatura_f - 32) / 1.8;

    alert (temperatura_f + " Fahrenheit son " +temperatura_c+ " centígrados");
}

function CentigradosFahrenheit () 
{
	
}
