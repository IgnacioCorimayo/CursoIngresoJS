/*Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y
100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
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
    var cantidadPares
    var cantidadImpares;
    var cantidadCeros;
    var sumaPositivos;
    var cantidadPositivos;
    var promedioPositivos;
    var sumaNegativos;
    var bandera;
    var numeroMaximo;
    var numeroMinimo;
    var letraMaxima;
    var letraMinima;

    respuesta = "si";

    cantidadPares = 0;
    cantidadImpares = 0;
    cantidadCeros = 0;
    sumaPositivos = 0;
    cantidadPositivos = 0;
    sumaNegativos = 0;
    bandera = 0;

    while (respuesta != "no")
    {
    
        letra = prompt ("Ingrese una letra");

        numero = prompt ("Ingrese un numero");
        numero = parseInt (numero);
     
        while (numero < -100 || numero > 100)
        {
            numero = prompt ("Ingrese un numero");
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
            if(numero % 2 == 0)
            {
                cantidadPares = cantidadPares + 1;
            }
            else
            {
                 cantidadImpares = cantidadImpares + 1;
            }
        }

        /*d) El promedio de todos los números positivos ingresados.*/
        /*e) La suma de todos los números negativos.*/
        if (numero > 0)
        {
            sumaPositivos = sumaPositivos + numero;
            cantidadPositivos = cantidadPositivos + 1;
        }
        else
        {
            sumaNegativos = sumaNegativos + numero;
        }

        /*f) El número y la letra del máximo y el mínimo.*/
        if (bandera == 0)
        {
            numeroMaximo = numero;
            letraMaxima = letra;
            numeroMinimo = numero;
            letraMinima = letra;
            bandera = 1;
        }
        else
        {
            if (numero > numeroMaximo)
            {
                numeroMaximo = numero;
                letraMaxima = letra;
            }
            if (numero < numeroMinimo)
            {
                numeroMinimo = numero;
                letraMinima = letra;
            }    
        }

        respuesta = prompt ("Ingrese no para salir");
    }

    promedioPositivos = sumaPositivos / cantidadPositivos;

    console.log ("La cantidad de números pares es: " +cantidadPares);
    console.log ("La cantidad de números impares es: " +cantidadImpares);
    console.log ("La cantidad de ceros es: " +cantidadCeros);
    console.log ("El promedio de los números positivos es: " +promedioPositivos);
    console.log ("La suma de números negativos es: " +sumaNegativos);
    console.log ("El numero y la letra del maximo es : " +numeroMaximo+ " y " +letraMaxima+ " y del minimo es: " +numeroMinimo+ " y " +letraMinima);
}
