/*Pedir dos números y mostrar el resultado: Si son iguales los muestro concatenados. 
Si el primero es mayor, los resto, de lo contrario los sumo. 
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje "la suma es xxx y supero el 10".*/


function mostrar()
{
    var numero1;
    var numero2;
    var resultado;

    numero1 = prompt ("Ingrese el primer número");
    numero1 = parseInt (numero1);

    numero2 = prompt ("Ingrese el segundo número");
    numero2 = parseInt (numero2);

    if (numero1 == numero2)
    {
        alert (numero1+""+numero2);
    }
    else
    {
        if (numero1 > numero2)
        { 
            alert (numero1 - numero2);
        }
        else
        {
            suma = numero1 + numero2;
            alert (suma);
            
            if (suma > 10)
            {
                alert ("La suma es " +suma+ " y supero el 10");     
            }
        }
    }
}

    
   