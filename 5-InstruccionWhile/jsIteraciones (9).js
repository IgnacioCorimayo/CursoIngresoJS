/*Al presionar el botón pedir números hasta que el usuario quiera, mostrar el número máximo
y el número mínimo ingresado.*/

function mostrar()
{
	var respuesta;
	var numero;
	var bandera;
	var numeroMaximo;
	var numeroMinimo

	respuesta = "si";
	bandera = 0;
	
	while (respuesta != "no")
	{
		numero = prompt ("Ingrese un número");
		numero = parseInt (numero);

		if (bandera == 0)
		{
			numeroMinimo = numero;
			numeroMaximo = numero;
			bandera = 1;
		}
		else
		{
			if (numero < numeroMinimo)
			{
				numeroMinimo = numero;
			}

			if (numero > numeroMaximo)
			{
				numeroMaximo = numero;
			}
		}
		respuesta = prompt ("Ingrese no para salir");
	}
	
	document.getElementById ("maximo").value = numeroMaximo;
	document.getElementById ("minimo").value = numeroMinimo;

}//FIN DE LA FUNCIÓN