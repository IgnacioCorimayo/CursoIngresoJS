/*Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar)
hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de números pares. 
b) La cantidad de números impares. 
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados. 
e) La suma de todos los números negativos. 
f) El número y la letra del máximo y el mínimo.*/

function mostrar()
{
    var letra;
    var numero;
    var respuesta;
    var cantidadCeros;
    var cantidadPares;
    var cantidadImpares;
    var cantidadPositivos;
    var sumaPositivos;
    var sumaNegativos;
    var bandera;
    var numeroMaximo;
    var numeroMinimo;
    var letraMaxima;
    var letraMinima;
    
    respuesta = "si";
    cantidadCeros = 0;
    cantidadPares = 0;
    cantidadImpares = 0;
    cantidadPositivos = 0;
    sumaPositivos = 0;
    sumaNegativos = 0;
    bandera = 0;

    while (respuesta != "no")
    {
        letra = prompt ("Ingrese una letra");

        numero = prompt ("Ingrese un numero");
        numero = parseInt (numero);

        while (numero < -100 || numero > 100)
        {
            numero = prompt ("Ingrese un numero nuevamente");
            numero = parseInt (numero);
        }

        /*a) La cantidad de números pares. 
        b) La cantidad de números impares. 
        c) La cantidad de ceros.*/
        if (numero == 0)
        {
            cantidadCeros = cantidadCeros + 1;
        }
        else
        {
            if (numero % 2 == 0)
            {
                cantidadPares = cantidadPares + 1;
            }
            else
            {
                cantidadImpares = cantidadImpares + 1;
            }
        }    

        if (numero > 0)
        {
            cantidadPositivos = cantidadPositivos + 1;
            sumaPositivos = sumaPositivos + numero;
        }

        /*e) La suma de todos los números negativos.*/
        if (numero < 0)
        {
            sumaNegativos = sumaNegativos + numero;
        }
        
        /*f) El número y la letra del máximo y el mínimo.*/
        if (bandera == 0)
        {
            numeroMaximo = numero;
            letraMaxima = letra;
            numeroMinimo = numero;
            letraMinima = letra
            bandera = 1;
        }
        else
        {
            if (numero < numeroMinimo)
            {
                numeroMinimo = numero;
                letraMinima = letra;
            }
            
            if (numero > numeroMaximo)
            { 
                numeroMaximo = numero;
                letraMaxima = letra;
            }
        }
        
        respuesta = prompt ("Ingrese no para salir");
    }

    /*d) El promedio de todos los números positivos ingresados. */
    promedioPositivos = sumaPositivos / cantidadPositivos;

    document.write ("La cantidad de numeros pares es: " +cantidadPares);
    document.write ("La cantidad de numeros impares es: " +cantidadImpares);
    document.write ("La cantidad de ceros es: " +cantidadCeros);
    document.write ("El promedio de los numeros positivos es: " +promedioPositivos);
    document.write ("La suma de los numeros negativos es: " +sumaNegativos);
    document.write ("La letra y el numero maximo y minimo son : " +numeroMaximo+letraMaxima+ " y " +numeroMinimo+letraMinima);
}
