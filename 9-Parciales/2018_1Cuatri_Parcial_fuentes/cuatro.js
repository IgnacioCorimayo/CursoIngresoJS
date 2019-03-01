function mostrar()
{
    var numero1;
    var numero2;

    numero1 = prompt ("Ingrese el primer número");
    numero1 = parseInt (numero1);

    numero2 = prompt ("Ingrese el segundo número");
    numero2 = parseInt (numero2);

    if (numero1 == numero2)
    {
        mensaje = numero1+""+numero2;

    }
    else 
    {
        if (numero1 > numero2)
        {
            operación = numero1 - numero2;
            mensaje = operación;
        }
        else
        {
            operación = numero1 + numero2;

            if (operación > 10)
            {
                mensaje = "La suma es: " +operación+ " y supero el 10";
            }
            else{
                mensaje = operación; 
            }
        }
    }
    
    alert (mensaje);

}

