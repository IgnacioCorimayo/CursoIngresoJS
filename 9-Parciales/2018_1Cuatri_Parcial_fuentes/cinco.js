/*Pedir el ingreso de un planeta del sistema solar 
Si es la tierra mostrar "acá vivimos". 
Si está más cerca del sol, "acá hace más calor". 
Si está más lejos del sol, "acá hace más frio". 
Si no es un planeta valido informarlo. 
Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).*/

function mostrar()
{
    var planeta;

    planeta = prompt ("Ingrese el nombre de de un planeta del Sistema Solar");

    switch (planeta)
    {
        case "tierra":
            mensaje = "Acá vivimos";
        break;
        
        case "mercurio":
        case "venus":
            mensaje = "Acá hace más calor";
        break;
        
        case "marte":
        case "júpiter":
        case "saturno":
        case "neptuno":
        case "urano":
            mensaje = "Acá hace más frio";
        break;
        
        default:
            mensaje = "Ingrese un planeta correcto";
        break;
    }

    alert (mensaje);
}


