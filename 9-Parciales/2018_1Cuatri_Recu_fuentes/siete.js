function mostrar()
{
    var nota;
    var sexo;
    var cantidadAlumnos;
    var sumaNotas;
    var bandera;
    var cantidadNotasVarones;

    cantidadAlumnos = 0;
    sumaNotas = 0;
    bandera = 0;
    cantidadNotasVarones = 0;

    while (cantidadAlumnos < 5)
    {  
        nota = prompt ("Ingrese una nota");
        nota = parseFloat (nota);

        while (nota < 0 || nota > 10)
        {
            nota = prompt ("Ingrese una nota nuevamente");
            nota = parseFloat (nota);
        }

        sexo = prompt ("Ingrese un sexo");

        while (sexo != "f" && sexo != "m")
        {
            sexo = prompt ("Ingrese un sexo nuevamente");
        }

        sumaNotas = sumaNotas + nota;

        if (bandera == 0)
        {
            notaBaja = nota;
            sexoBaja = sexo;
            bandera = 1;
        }
        else
        {
            if (nota < notaBaja)
            {
                notaBaja = nota;
                sexoBaja = sexo;
            }
        }
        cantidadAlumnos = cantidadAlumnos +1;

        if (nota >= 6 && sexo == "m")
        {
            cantidadNotasVarones = cantidadNotasVarones + 1;
        }

    }

    promedioNotas = sumaNotas / cantidadAlumnos;

    console.log ("El promedio de notas es: " +promedioNotas);
    console.log ("La nota más baja es: " +notaBaja+ " y es de sexo: " +sexoBaja);
    console. log ("La cantidad de varones con notas mayores o igual a 6 es: " +cantidadNotasVarones);
}
