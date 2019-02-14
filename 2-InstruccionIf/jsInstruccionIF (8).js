function mostrar()
{
//tomo la edad  

    var edad, estado_civil;

    edad = document.getElementById ("edad").value;
    edad = parseInt (edad);

    estado_civil = document.getElementById ("estadoCivil").value;

    if (edad < 18 && estado_civil != "Soltero"){

    }

    else{ 
        if (edad >= 18 && estado_civil == "Soltero")
        {
            alert ("Es soltero y no es menor de edad");
        }	
    }

}//FIN DE LA FUNCIÓN