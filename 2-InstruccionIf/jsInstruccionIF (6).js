function mostrar()
{
//tomo la edad  

    var edad;

    edad = document.getElementById ("edad").value;
    edad = parseInt (edad);

    if (edad <13){
        alert ("Es un niño");
    }    
    else {
        if (edad <= 17){
            alert ("Es un adolescente")
        }
        else {
            alert ("Es mayor de edad")
        }
    }


}//FIN DE LA FUNCIÓN