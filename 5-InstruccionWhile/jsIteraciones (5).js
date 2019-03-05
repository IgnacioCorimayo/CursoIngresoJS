/*Al presionar el botón pedir un sexo 'f' para femenino, 'm' para masculino.*/

function mostrar()
{
    var sexo;

    sexo = prompt ("Ingrese un sexo según: f (femenino) o m (masculino)");

    while (sexo != "f" && sexo != "m")
    {   
        sexo = prompt ("Ingrese un sexo correcto");    
    }

    document.getElementById("sexo").value = sexo;

}//FIN DE LA FUNCIÓN