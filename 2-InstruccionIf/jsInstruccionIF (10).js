function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var nota;
	nota = Math.floor (Math.random ()*(11-1))+1;

	alert ("Su nota es " +nota);

	if (nota == 9 || nota == 10){
		alert ("Excelente");
	}
	else{
		if (nota >= 4){
			alert ("Aprobó");
		}
		else{
			alert ("Vamos, la próxima se puede");
		}
	}

}//FIN DE LA FUNCIÓN