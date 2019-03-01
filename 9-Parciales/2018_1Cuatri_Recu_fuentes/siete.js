function mostrar()
{
    var velocidad;
    var combustible;
    var cantidadVehiculos;
    var bandera;


    cantidadVehiculos = 0;
    sumaVelocidad = 0;
    bandera = 0;

    while (cantidadVehiculos < 5)
    {           
        velocidad = prompt ("Ingrese una velocidad en kilómetros");
        velocidad = parseInt (velocidad);

        combustible = prompt ("Ingrese tipo de combustible: sólido (s) o liquido (l)");

       

        if (velocidad > 0 && velocidad < 250) 
        {
            switch(combustible)
            {
                case "s": 
                case "l":
                    cantidadVehiculos = cantidadVehiculos + 1;
                break;
            }

            sumaVelocidad = sumaVelocidad + velocidad;
        }
        else
        {  
            //velocidad = prompt ("Ingrese nuevamente una velocidad");
            //combustible = prompt ("Ingrese nuevamente un combustible");
        }  

        if (bandera == 0)
        {
            velocidadMinima = velocidad;
            bandera = 1;
        }
        else
        {
            if (velocidad < velocidadMinima)
            {
                velocidadMinima = velocidad;
                
            }
        }

    }     

    promedioVelocidad = sumaVelocidad / cantidadVehiculos; 

    console.log (sumaVelocidad);
    console.log (promedioVelocidad);
    console.log (velocidadMinima+"  "+combustible);
}
