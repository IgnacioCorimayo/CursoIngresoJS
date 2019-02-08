function mostrar()
{
    var precio, descuento, porcentaje_descuento, precio_final;

    precio = prompt ("Ingrese el precio");
    porcentaje_descuento = prompt ("Ingrese el porcentaje de descuento");

    descuento = precio *porcentaje_descuento/100;
    precio_final = precio - descuento;

    document.getElementById("elPrecioFinal").value = precio_final;

}
