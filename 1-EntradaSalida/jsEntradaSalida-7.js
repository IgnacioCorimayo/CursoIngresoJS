/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{	
    var numero_uno;
    var numero_dos;
    var resultado;
    
    numero_uno = document.getElementById("numeroUno").value;
    numero_dos = document.getElementById("numeroDos").value;
        
    numero_uno = parseInt (numero_uno);
    numero_dos = parseInt (numero_dos);
    resultado = numero_uno + numero_dos;
    
    alert ("La suma es: " +resultado);
}

function restar()
{
    var numero_uno;
    var numero_dos;
    var resultado;
    
    numero_uno = document.getElementById("numeroUno").value;
    numero_dos = document.getElementById("numeroDos").value;
        
    numero_uno = parseInt (numero_uno);
    numero_dos = parseInt (numero_dos);
    resultado = numero_uno - numero_dos;
    
    alert ("La resta es: " +resultado);
}

function multiplicar()
{ 
    var numero_uno;
    var numero_dos;
    var resultado;
    
    numero_uno = document.getElementById("numeroUno").value;
    numero_dos = document.getElementById("numeroDos").value;
        
    numero_uno = parseInt (numero_uno);
    numero_dos = parseInt (numero_dos);
    resultado = numero_uno * numero_dos;

    alert ("La multiplicaciòn es: "+resultado); 
}

function dividir()
{
    var numero_uno;
    var numero_dos;
    var resultado;
    
    numero_uno = document.getElementById("numeroUno").value;
    numero_dos = document.getElementById("numeroDos").value;
        
    numero_uno = parseInt (numero_uno);
    numero_dos = parseInt (numero_dos);
    resultado = numero_uno / numero_dos;
    
    alert ("La división es: "+resultado);
}