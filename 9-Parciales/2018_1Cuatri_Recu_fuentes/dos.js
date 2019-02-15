function mostrar()
{
    /*var nombre, localidad;
    
    nombre = document.getElementById ("elNombre").value;
    localidad = document.getElementById ("laLocalidad").value;
    
    alert ("Usted es " +nombre+ " y vive en la localidad de " + localidad);*/

    var compra, descuento, precio_descuento, iva, precio_final;

    compra = prompt ("Ingrese el valor de su compra");
    compra = parseInt (compra);

    descuento = compra *10 /100;
    precio_descuento = compra - descuento;

    iva = precio_descuento *21 /100;

    precio_final = precio_descuento + iva;

    alert ("Tu compra es de $" +compra+ " tenes un descuento del 10 % queda en $" +precio_descuento+ ", mas el iva es $" +precio_final);

}
