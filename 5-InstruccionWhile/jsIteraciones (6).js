/*Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.*/

function mostrar()
{
	var numero;
	var cantidadNumeros;
	var suma;
	var promedio;

	suma = 0;
	cantidadNumeros = 0;

	while (cantidadNumeros < 5)
	{
		numero = prompt ("Ingrese un numero");
		numero = parseInt (numero);

		suma = suma + numero;

		cantidadNumeros = cantidadNumeros + 1;
	}

	promedio = suma / cantidadNumeros;

	document.getElementById ("suma").value = suma;
	document.getElementById ("promedio").value = promedio;
	
}//FIN DE LA FUNCIÓN