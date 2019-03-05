/*Al presionar el botón pedir la CLAVE (ayuda: es utn750)*/


function mostrar()
{
    var clave;
    var contador;

    clave = prompt ("Ingrese la clave.");
    contador = 1;

    while (clave != "utn750")
    {
        clave = prompt ("Ingrese la clave nuevamente");
        contador = contador + 1;
    }

    alert ("Lo hiciste en : " +contador);

}//FIN DE LA FUNCIÓN
 


var clave;
