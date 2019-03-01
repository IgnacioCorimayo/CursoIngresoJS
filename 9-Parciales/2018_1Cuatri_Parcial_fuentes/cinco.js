function mostrar()
{

    var planeta;

    planeta = prompt ("Ingrese el nombre de un planeta del Sistema Solar")

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
        case "urano":
        case "neptuno":
            mensaje = "Acá hace más frio";
        break;

        default:
            mensaje = "No es un planeta válido";
        break;
    }

    alert (mensaje);
}
