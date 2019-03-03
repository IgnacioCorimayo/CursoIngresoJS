function mostrar()
{
    var respuesta;
    var animal;
    var peso;
    var temperaturasPares;
    var banderaPeso;
    var animalMaximo;
    var temperaturaMaxima;
    var pesoMaximo;
    var cantidadTemperatura;
    var animalTemperaturaMenor;
    var sumaPeso;
    var cantidadPeso;
    var banderaPeso2;

    respuesta = "si";
    temperaturasPares = 0;
    banderaPeso = 0;
    cantidadTemperatura = 0;
    sumaPeso = 0;
    cantidadPeso = 0;
    banderaPeso2 = 0;

    while (respuesta != "no")
    {
        animal = prompt ("Ingrese el nombre del animal");

        peso = prompt ("Ingrese el peso del animal");
        peso = parseInt (peso);

        while (peso < 1 || peso > 1000)
        {
            peso = prompt ("Ingrese el peso nuevamente");
            peso = parseInt (peso);


        }

        temperatura = prompt ("Ingrese la temperatura del habitat");

        while (temperatura < -30 || temperatura > 30)
        {
            temperatura = prompt ("Ingrese la temperatura nuevamente");
        }

        if (temperatura % 2 == 0)
        {
            temperaturasPares = temperaturasPares + 1;
        }

        
        if (banderaPeso == 0)
        {
            pesoMaximo = peso;
            animalMaximo = animal;
            temperaturaMaxima = temperatura;
            banderaPeso = 1;
        }
        else
        {
            if (peso > pesoMaximo)
            {
                pesoMaximo = peso;
                animalMaximo = nombre;
                temperaturaMaxima = temperatura;
            }            
        }
        
        if (temperatura < 0)
        {
            cantidadTemperatura = cantidadTemperatura + 1;
            animalTemperaturaMenor = animal;
        
            if (banderaPeso2 == 0)
            {
                pesoMaximo2 = peso;
                pesoMinimo2 = peso;
                banderaPeso2 = 1;
            }
            else
            {
                if (peso > pesoMaximo)
                {
                    pesoMaximo2 = peso;
                    temperaturaMaxima2 = temperatura;
                }
                if (peso < pesoMinimo)            
                {
                    pesoMinimo2 = peso;
                    temperaturaMinima2 = temperatura;
                }
            }
        }

        sumaPeso = sumaPeso + peso;
        cantidadPeso = cantidadPeso + 1;

        respuesta = prompt ("Ingrese no para salir");
    }

    promedio = sumaPeso / cantidadPeso;

    document.write ("La cantidad de temperaturas pares es: " + temperaturasPares);
    document.write ("El nombre y temperatura del animal más pesado son: " +animalMaximo+ " " + temperaturaMaxima+ " " +pesoMaximo);
    document.write ("La cantidad de animales que viven a menos de 0 grados es: " +cantidadTemperatura);
    document.write ("El promedio del peso de todos los animales es: " +promedio);
    document.write ("El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero son: " +pesoMaximo2, +pesoMinimo2);
}
