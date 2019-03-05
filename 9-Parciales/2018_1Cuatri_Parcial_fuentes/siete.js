function mostrar()
{
    var notaIngresada;
    var sexoIngresado;
    var cantidadAlumnos;
    var sumaNotas;
    var promedioNotas;
    var bandera;
    var cantidadNotasVarones;

    cantidadAlumnos = 0;
    sumaNotas = 0;
    promedioNotas = 0;
    bandera = 0;
    cantidadNotasVarones = 0;

    while (cantidadAlumnos < 5)
    {
        notaIngresada = prompt ("Ingrese una nota");
        notaIngresada = parseInt (notaIngresada);

        while (notaIngresada < 0 || notaIngresada > 10)
        {
            notaIngresada = prompt ("Ingrese una nota");
            notaIngresada = parseInt (notaIngresada);
        }

        sexoIngresado = prompt ("Ingrese un sexo");

        while (sexoIngresado != "m" && sexoIngresado != "f")
        {
            sexoIngresado = prompt ("Ingrese un sexo");
        }

        if (notaIngresada >= 6 && sexoIngresado == "m")
        {
            cantidadNotasVarones = cantidadNotasVarones + 1;
        }

        sumaNotas = sumaNotas + notaIngresada;

        if (bandera == 0)
        {
            notaMinima = notaIngresada;
            sexoMinimo = sexoIngresado;
            bandera = 1;
        }
        else
        {   
            if (notaIngresada < notaMinima)
            {
                notaMinima = notaIngresada;
                sexoMinimo = sexoIngresado;
            }
        }

        cantidadAlumnos = cantidadAlumnos + 1;
        
    }

    promedioNotas = sumaNotas / cantidadAlumnos;

    
    console.log ("La suma de notas es: " +sumaNotas);
    console.log ("El promedio de notas es: "+promedioNotas);
    console.log ("La nota más baja es: " +notaMinima+ " y es de sexo: " +sexoMinimo);
    console.log ("La cantidad de varones con nota mayor o igual a 6 es: " +cantidadNotasVarones);

}
