function mostrar()
{
    var precio, descuento, porcentaje_descuento, precio_con_descuento, precio_final, IVA;

    precio = prompt ("Ingrese el precio");
    precio = parseInt (precio);

    porcentaje_descuento = prompt ("Ingrese el porcentaje de descuento");
    porcentaje_descuento = parseInt (porcentaje_descuento);
    
    descuento = precio *porcentaje_descuento /100;
    precio_con_descuento = precio - descuento;
    
    IVA = precio_con_descuento * 21 / 100;

    alert ("El descuento en dinero es: " +descuento+ ", el precio con el descuento es: " + precio_con_descuento+ " y el IVA es: " +IVA);
    
    precio_final = precio_con_descuento + IVA;
    document.getElementById ("elPrecioFinal").value = ("El precio final es: " +precio_final);
}
