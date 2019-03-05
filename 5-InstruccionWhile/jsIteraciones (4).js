/*Al presionar el botón pedir un número entre 0 y 9 inclusive.*/

function mostrar()
{
	var numero
	
	numero = prompt("Ingrese un número entre 0 y 9.");
	numero = parseInt (numero);

	while (numero < 0 || numero > 9)
	{
		numero = prompt("Ingrese un número entre 0 y 9.");
		numero = parseInt (numero);
	}
	
	document.getElementById ("Numero").value = numero;

}//FIN DE LA FUNCIÓN