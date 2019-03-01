function mostrar()
{
    var notaIngresada;
    var sexo;
    var cantidadAlumnos;
    var sumaNotas

    cantidadAlumnos = 0

    while (cantidadAlumnos < 5)
    {
               
        notaIngresada = prompt ("Ingrese una nota");
        notaIngresada = parseInt (notaIngresada);
        
       
        if (notaIngresada > 0 && notaIngresada < 10)
        {
            sumaNotas = sumaNotas + notaIngresada
        }
        else
        {
            notaIngresada = prompt ("Ingrese una nota entre 0 y 10");
        }

        sexoIngresado = prompt ("Ingrese sexo");

        if (sexoIngresado != "m" || sexoIngresado != "f")
        {
            
        }

        cantidadAlumnos = cantidadAlumnos + 1;

    }
    
}
