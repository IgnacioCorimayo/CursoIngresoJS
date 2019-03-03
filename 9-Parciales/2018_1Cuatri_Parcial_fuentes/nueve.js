function mostrar()
{
    var marca;
    var peso;
    var temperatura;
    var respuesta;
    var temperaturasPares;
    var banderaMarca;
    var pesoMaximo;
    var marcaMaxima;
    var cantidadTemperaturas;
    var promedio;
    var sumaPeso;
    var cantidadPeso;

    respuesta = "si";
    temperaturasPares = 0;
    banderaMarca = 0;
    banderaPeso = 0;
    cantidadTemperaturas = 0;
    sumaPeso = 0;
    cantidadPeso = 0;

    while (respuesta != "no")
    {
        marca = prompt ("Ingrese marca");

        peso = prompt ("Ingrese peso");
        peso = parseFloat (peso);

        while (peso < 1 || peso > 100)
        {
            peso = prompt ("Ingrese peso");
            peso = parseFloat (peso);
        }

        temperatura = prompt ("Ingrese temperatura")
        temperatura = parseInt (temperatura);

        while (temperatura < -30 || temperatura > 30)
        {
            temperatura = prompt ("Ingrese temperatura")
            temperatura = parseInt (temperatura);
        }

        // a) Cantidad de temperaturas pares //
        if (temperatura % 2 == 0)
        {
            temperaturasPares = temperaturasPares + 1;
        }

        // b) La marca del producto más pesado //
        if (banderaMarca == 0)
        {
            pesoMaximo = peso;
            marcaMaxima = marca;

        banderaMarca = 1;
        }
        else
        {
            if (peso > pesoMaximo)
            {
                pesoMaximo = peso;
                marcaMaxima = marca;
            }
        }

        // c) La cantidad de productos que se conservan a menos de 0 grados //
        if (temperatura < 0)
        {
            cantidadTemperaturas = cantidadTemperaturas + 1;
        }
    
        // d) El promedio del peso de todos los productos //
        sumaPeso = sumaPeso + peso;
        cantidadPeso = cantidadPeso + 1;

        // e) El peso máximo y el mínimo //
        if (banderaPeso == 0)
        {
            maximoPeso = peso;
            minimoPeso = peso;
            banderaPeso = 1;
        }
        else
        {
            if (peso > maximoPeso)
            {
                maximoPeso = peso;
            }
            if (peso < minimoPeso)
            {
                minimoPeso = peso;
            }
        }


        respuesta = prompt ("Ingrese no para salir");
   
    }

    promedio = sumaPeso / cantidadPeso;

    document.write ("La cantidad de temperaturas pares es: " +temperaturasPares);

    document.write ("La marca del producto más pesado es: " +marcaMaxima+ " y su peso es: " +pesoMaximo);
    
    document.write ("Las temperaturas menores a 0º son: " +cantidadTemperaturas);

    document.write ("El promedio es de los pesos es: " +promedio);

    document.write ("El peso máximo es: " +maximoPeso+ " y el peso minimo es: " +minimoPeso);
}
