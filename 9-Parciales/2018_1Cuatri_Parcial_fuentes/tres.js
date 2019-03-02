/*Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.*/

function mostrar()
{
   var precio;
   var porcentajeDescuento;
   var descuento;
   var precioFinal;

   precio = prompt ("Ingrese el precio");
   precio = parseFloat (precio);

   porcentajeDescuento = prompt ("Ingrese el porcentaje de descuento");
   porcentajeDescuento = parseInt (porcentajeDescuento);

   descuento = precio * porcentajeDescuento /100;
   
   precioFinal = precio - descuento;

   document.getElementById ("elPrecioFinal").value = precioFinal;

}
