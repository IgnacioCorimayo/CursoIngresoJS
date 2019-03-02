function mostrar()
{
    var marca;
    var peso;
    var temperatura;
    var respuesta;
    var temperaturasPares;
    var banderaTemperatura;
    var pesoMaximo;
    var marcaMaxima;
    var cantidadTemperaturas;
    var promedio;
    var sumaPeso;
    var cantidadPeso;

    respuesta = "si";
    temperaturasPares = 0;
    banderaTemperatura = 0;
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
        temperatura = parseFloat (temperatura);

        while (temperatura < -30 || temperatura > 30)
        {
            temperatura = prompt ("Ingrese temperatura")
            temperatura = parseFloat (temperatura);
        }

        if (temperatura % 2 == 0)
        {
            temperaturasPares = temperaturasPares + 1;
        }

        if (banderaTemperatura == 0)
        {
            pesoMaximo = peso;
            marcaMaxima = marca;

            banderaTemperatura = 1;
        }
        else
        {
            if (peso > pesoMaximo)
            {
                pesoMaximo = peso;
                marcaMaxima = marca;
            }
        }

        if (temperatura < 0)
        {
            cantidadTemperaturas = cantidadTemperaturas + 1;
        }
    
        sumaPeso = sumaPeso + peso;
        cantidadPeso = cantidadPeso + 1;

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
    document.write ("La marca del producto más pesado es: " +marcaMáxima+ " y su peso es: " +pesoMaximo);
    document.write ("Las temperaturas menores a 0º son: " +cantidadTemperaturas);
    document.write ("El promedio es: " +promedio);
    document.write ("El peso máximo es: " +maximoPeso+ " y el peso minimo es: " +minimoPeso);
}
