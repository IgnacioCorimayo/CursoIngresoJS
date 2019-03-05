/*Al presionar el botón pedir números hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.*/

function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numero;

	contador = 0;
	acumulador=0;
	respuesta='si';

	while (respuesta != "no")
	{
		numero = prompt ("Ingrese un numero");
		numero = parseInt (numero);

		acumulador = acumulador + numero;
	
		contador = contador + 1;
	
		respuesta = prompt ("Ingrese no para salir");
	}

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador/contador;

}//FIN DE LA FUNCIÓN