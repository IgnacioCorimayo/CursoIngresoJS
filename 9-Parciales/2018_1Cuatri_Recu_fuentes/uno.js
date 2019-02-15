
function mostrar()
{
    /*var base, altura, superficie, perimetro;

    base = prompt ("Ingrese la base");
    altura = prompt ("Ingrese la altura");

    superficie = base *altura /2;
    perimetro = base *3;

    alert ("La superficie es: " +superficie+ " y el perimetro es: " +perimetro);*/

    var mascota_1, mascota_2, peso_1, peso_2, peso_total;

    mascota_1 = prompt ("Ingrese el nombre de su primer mascota");
    mascota_2 = prompt ("Ingrese el nombre de su segunda mascota");

    peso_1 = prompt ("Ingrese el peso de su primer mascota");
    peso_1 = parseInt (peso_1);

    peso_2 = prompt ("Ingrese el peso de su segunda mascota");
    peso_2 = parseInt (peso_2);

    peso_total = peso_1 + peso_2;

    alert ("Tenes dos mascotas " +mascota_1+ " y " +mascota_2+ ", que pesan " +peso_1+ " y " +peso_2+ " kilos, la suma de los kilos es " +peso_total);

}
