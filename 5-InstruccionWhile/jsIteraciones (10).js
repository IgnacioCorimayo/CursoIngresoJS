function mostrar()
{
	var respuesta;
	var sumaPositivo;
	var sumaNegativo;
	var numeroIngresado;
	var cantidadPositivos;
	var cantidadNegativos;
	var cantidadCeros;
	var cantidadPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaNumeros;

	// declarar variables
	
	respuesta='si';

	sumaNegativo = 0;
	sumaPositivo = 0;

	cantidadPositivos = 0;
	cantidadNegativos = 0;
	cantidadCeros = 0;
	cantidadPares = 0;
	promedioPositivos = 0;
	promedioNegativos = 0;
	diferenciaNumeros = 0;

	while(respuesta!='no')
	{
		numeroIngresado = prompt ("Ingrese un numero");
		numeroIngresado = parseInt (numeroIngresado);

		if (numeroIngresado < 0)
		{
			sumaNegativo = sumaNegativo + numeroIngresado;

			cantidadNegativos = cantidadNegativos + 1;
		}

		if (numeroIngresado > 0)
		{
			sumaPositivo = sumaPositivo + numeroIngresado;
		
			cantidadPositivos = cantidadPositivos + 1;
		}

		if (numeroIngresado == 0)
		{
			cantidadCeros = cantidadCeros + 1; 
		}

		if (numeroIngresado % 2 == 0 && numeroIngresado != 0)
		{
			cantidadPares = cantidadPares + 1;
		}

		respuesta = prompt ("Ingrese no para salir");
	}

	
	promedioPositivos = sumaPositivo / cantidadPositivos;
	promedioNegativos = sumaNegativo / cantidadNegativos;
	diferenciaNumeros = sumaPositivo + sumaNegativo;

	console.log ("La suma de negativos es: " +sumaNegativo);
	console.log ("La suma de positivos es: " +sumaPositivo);
	console.log ("La cantidad de positivos es: " +cantidadPositivos);
	console.log ("La cantidad de negativos es: " +cantidadNegativos);
	console.log ("La cantidad de ceros es: " +cantidadCeros);
	console.log ("La cantidad de numeros pares es: " +cantidadPares);
	console.log ("El promedio de los numeros positivos es: " +promedioPositivos);
	console.log ("El promedio de los numeros negativos es: " +promedioNegativos);
	console.log ("La diferencia entre positivos y negativos es: " +diferenciaNumeros);

}//FIN DE LA FUNCIÓN