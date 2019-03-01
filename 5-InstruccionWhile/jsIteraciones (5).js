function mostrar()
{

var sexo;

sexo = prompt ("Ingrese f o m");

while (sexo != "f" || sexo != "m")
{
    sexo = prompt ("Ingrese f o m");    
}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN