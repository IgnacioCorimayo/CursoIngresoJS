function mostrar()
{
   var importe1;
   var importe2;
   var importe3;
   var importe4;

   importe1 = prompt ("Ingrese el primer importe");
   importe1 = parseInt (importe1);

   importe2 = prompt ("Ingrese el segundo importe");
   importe2 = parseInt (importe2);

   importe3 = prompt ("Ingrese el tercer importe");
   importe3 = parseInt (importe3);

   importe4 = prompt ("Ingrese el cuarto importe");
   importe4 = parseInt (importe4);

   importeTotal = importe1 + importe2 + importe3 + importe4;


   if (importe1 > importe2 && importe1 > importe3 && importe1 > importe4)
   {
        mensaje = importe1;
   }
   else
   {
        if (importe2 > importe3 && importe2 > importe4 && importe2 > importe1)
        {
            mensaje = importe2;
        }
        else
        {
            if(importe3 > importe1 && importe3 > importe2 && importe3 > importe4)
            {
                mensaje = importe3;
            }
            else
            {
                if(importe4 > importe1 && importe4 > importe2 && importe4 > importe3)
                {
                    mensaje = importe4;
                }
                else
                {
                    mensaje = importe1;
                }
            }
        }
    }
   
    
    desc1 = importeTotal *10 / 100;
    
    desc2 = importeTotal *5 / 100;
    
    recar = importeTotal *15 / 100;


   if (importeTotal > 100) 
   {
        importeTotal = importeTotal - desc1;
   }
   else
   {
       if (importeTotal > 50)
       {
            importeTotal = importeTotal - desc2;
       }
       else
            importeTotal = importeTotal + recar;
   }

   alert ("Su importe final es de: " +importeTotal);
   alert ("El mayor número es: " +mensaje);
}
