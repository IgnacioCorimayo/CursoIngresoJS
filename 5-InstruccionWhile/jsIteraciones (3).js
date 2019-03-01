function mostrar()
{

var clave;
var contador;

clave = prompt("ingrese el número clave.");
contador = 1;

while (clave != "utn750")
{
    clave = prompt ("ingrese el número clave");
    contador = contador + 1;
}

alert ("Lo hiciste en : " +contador);

}//FIN DE LA FUNCIÓN
 