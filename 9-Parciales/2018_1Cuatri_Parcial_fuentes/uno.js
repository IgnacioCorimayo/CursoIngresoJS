/*Realizar el algoritmo que pida el ancho y el largo de un rectángulo por prompt y que muestre el
perímetro por alert.*/

function mostrar()
{
    var largo;
    var ancho;

    largo = prompt ("Ingrese el largo");
    largo = parseInt (largo);

    ancho = prompt ("Ingrese el ancho");
    ancho = parseInt (ancho);

    perimetro = largo *2 + ancho *2;

    alert ("El perimetro es: " +perimetro);
}
