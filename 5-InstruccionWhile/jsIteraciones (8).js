/*Al presionar el botón pedir números hasta que el usuario quiera, sumar los que son positivos 
y multiplicar los negativos.*/

function mostrar()
{
	var respuesta;
	var numero;
	var sumaPositivos

	respuesta = "si";
	sumaPositivos = 0;
	multiplicacionNegativos = 1;

	while (respuesta != "no")
	{
		numero = prompt ("Ingrese un número");
		numero = parseInt (numero);

		if (numero > 0)
		{
			sumaPositivos = sumaPositivos + numero;
		}
		else
		{
			multiplicacionNegativos = multiplicacionNegativos * numero;
		}

		respuesta = prompt ("Ingrese no para salir");
	}

	document.getElementById ("suma").value = sumaPositivos;
	document.getElementById ("producto").value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN