function mostrar()
{
    var cant_libros, precio_libros;

    cant_libros = prompt ("Ingrese la cantidad de libros a comprar");
    cant_libros = parseInt (cant_libros);

    precio_libros = prompt ("Ingrese el precio de los libros")
    precio_libros = parseInt (precio_libros);
    

    if (cant_libros > 2 && precio_libros > 2000){

        descuento = precio_libros *10 /100;
        precio_libros = precio_libros - descuento;
    }
    else {
        (cant_libros < 2)
    }        

    if (precio_libros > 2000){
        descuento = precio_libros *15 /100;
        precio_libros = precio_libros - descuento
    }

}
