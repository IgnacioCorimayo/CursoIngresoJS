/*Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10),
el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/

function mostrar()
{
    var nota;
    var sexo;
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
        nota = prompt ("Ingrese una nota");
        nota = parseInt (nota);

        while (nota < 0 || nota > 10)
        {
            nota = prompt ("Ingrese una nota");
            nota = parseInt (nota);
        }

        sexo = prompt ("Ingrese un sexo");

        while (sexo != "m" && sexo != "f")
        {
            sexo = prompt ("Ingrese un sexo");
        }
        
        /*b) La nota más baja y el sexo de esa persona.*/
        if (bandera == 0)
        {
            notaMinima = nota;
            sexoMinimo = sexo;
            bandera = 1;
        }
        else
        {   
            if (nota < notaMinima)
            {
                notaMinima = nota;
                sexoMinimo = sexo;
            }
        }

        /*c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/
        if (nota >= 6 && sexo == "m")
        {
            cantidadNotasVarones = cantidadNotasVarones + 1;
        }

        sumaNotas = sumaNotas + nota;

        cantidadAlumnos = cantidadAlumnos + 1; 
    }

    /*a) El promedio de las notas totales.*/
    promedioNotas = sumaNotas / cantidadAlumnos;

    
    console.log ("La suma de notas es: " +sumaNotas);
    console.log ("El promedio de notas es: "+promedioNotas);
    console.log ("La nota más baja es: " +notaMinima+ " y es de sexo: " +sexoMinimo);
    console.log ("La cantidad de varones con nota mayor o igual a 6 es: " +cantidadNotasVarones);

}
