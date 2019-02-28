function mostrar()
{

	var contador;
	var positivo;
	var negativo;
	var contadorDeVueltas;
	var respuesta;
	var queresContinuar;

	contador = 0;
	positivo = 0;
	negativo = 1;
	respuesta='si';
	
	queresContinuar = 'si';
	while (queresContinuar != 'no')
	{
		queresContinuar = prompt ("para salir ingrese no");
	}	

	contadorDeVueltas = 0;
	while (contadorDeVueltas < 5)
	{
		contadorDeVueltas = contadorDeVueltas + 1;
	}

	var contadorAlumnos;
	var edad;
	contadorAlumnos = 0;

	while (contadorAlumnos < 100)
	{
		edad == prompt ("Ingrese edad");
		edad = parseInt;

		if (edad == 66)
		{
			break;
		}
			
		contadorAlumnos = contadorAlumnos + 1;
	}

	if (contadorAlumnos == 100)
	{
		alert ("")
	}
	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;



}//FIN DE LA FUNCIÓN