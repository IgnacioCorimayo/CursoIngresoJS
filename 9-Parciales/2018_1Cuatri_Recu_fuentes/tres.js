function mostrar()
{
    var precio, descuento, porcentaje_descuento, precio_final;

    precio = prompt ("Ingrese el precio");
    precio = parseInt (precio);

    porcentaje_descuento = prompt ("Ingrese el porcentaje de descuento");
    porcentaje_descuento = parseInt (porcentaje_descuento);
    
    descuento = precio *porcentaje_descuento /100;
    alert ("El descuento en dinero es: " +descuento);

    precio_final = precio - descuento;
    alert ("El precio con el descuento es: " + precio_final);
}
