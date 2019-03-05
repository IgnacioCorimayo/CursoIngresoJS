/* Realizar el algoritmo que permita ingresar el nombre de un animal del zoológico,
el peso el cual debe ser entre 1 y 1000 y la temperatura del hábitat (entre -30 y 30) 
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares. 
b) El nombre y temperatura del animal más pesado 
c) La cantidad de animales que viven a menos de 0 grados. 
d) El promedio del peso de todos los animales.	
e) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.*/

function mostrar()
{
    var respuesta;
    var animal;
    var peso;
    var temperatura;
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
    var pesoMaximo2;
    var pesoMinimo2;

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

        //a) La cantidad de temperaturas pares.//
        if (temperatura % 2 == 0)
        {
            temperaturasPares = temperaturasPares + 1;
        }

        //b) El nombre y temperatura del animal más pesado. //
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
                animalMaximo = animal;
                temperaturaMaxima = temperatura;
            }            
        }
        
        //c) La cantidad de animales que viven a menos de 0 grados.//
        //e) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.//
        if (temperatura < 0)
        {
            cantidadTemperatura = cantidadTemperatura + 1;
            animalTemperaturaMenor = animal;
        
            if (banderaPeso2 == 0)
            {
                pesoMaximo2 = peso;
                pesoMinimo2 = peso;
                animalMaximo2 = animal;
                animalMinimo2 = animal;
                banderaPeso2 = 1;
            }
            else
            {
                if (peso > pesoMaximo2)
                {
                    pesoMaximo2 = peso;
                    animalMaximo2 = animal;
                }
                if (peso < pesoMinimo2)            
                {
                    pesoMinimo2 = peso;
                    animalMinimo2 = animal;
                }
            }
        }

        sumaPeso = sumaPeso + peso;
        cantidadPeso = cantidadPeso + 1;

        respuesta = prompt ("Ingrese no para salir");
    }

    //d) El promedio del peso de todos los animales.//
    promedio = sumaPeso / cantidadPeso;

    document.write ("La cantidad de temperaturas pares es: " + temperaturasPares);
    document.write ("El nombre y temperatura del animal más pesado son: " +animalMaximo+ " " + temperaturaMaxima+ " " +pesoMaximo);
    document.write ("La cantidad de animales que viven a menos de 0 grados es: " +cantidadTemperatura);
    document.write ("El promedio del peso de todos los animales es: " +promedio);
    document.write ("El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero son: " +pesoMaximo2+ " y " +pesoMinimo2);
}
