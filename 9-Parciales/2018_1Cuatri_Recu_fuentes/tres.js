function mostrar()
{
    /*
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
    */

    var precio_inicial, cantidad_amigos, precio_final, propina, cantidad_a_pagar;
    
    precio_inicial = prompt ("Ingrese el precio de la cuenta");
    precio_inicial = parseInt (precio);

    cantidad_amigos = prompt ("Ingrese la cantidad de amigos");
    cantidad_amigos = parseInt (cantidad_amigos);
    
    propina = precio *10 /100;
    precio_inicial = precio_inicial + propina;

    iva = precio_inicial *21 /100;
    precio_final = precio_final - iva;

    cantidad_a_pagar = precio / cantidad_amigos;

    alert ("El precio inial era de: " +precio_inicial+ " mas la propina " +propina+   " y la cantidad que debe pagar cada uno es " + cantidad_a_pagar);
}
