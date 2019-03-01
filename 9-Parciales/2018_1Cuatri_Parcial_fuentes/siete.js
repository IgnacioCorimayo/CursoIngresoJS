function mostrar()
{

   var notaIngresada;
    var sexoIngresado;
    var cantidadAlumnos;

    cantidadAlumnos = 0;
    
    while (cantidadAlumnos < 5)
    {
    
    notaIngresada = prompt ("Ingrese una nota");
    notaIngresada = parseInt (notaIngresada);

        if (notaIngresada > 0 && notaIngresada < 10)
        {
            sumaNotas = sumaNotas + notaIngresada; 
            cantidadAlumnos = cantidadAlumnos + 1;
        }
        else
        {
            notaIngresada = prompt ("Ingrese nuevamente una nota entre 0 y 10"); 
        }

        if (sexoIngresado)
    sexoIngresado = prompt ("Ingrese un sexo");

    }


}
