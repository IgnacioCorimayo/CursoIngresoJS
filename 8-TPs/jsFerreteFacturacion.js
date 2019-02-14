/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var numero_uno, numero_dos, numero_tres, suma;

    numero_uno = document.getElementById ("PrecioUno").value;
    numero_dos = document.getElementById ("PrecioDos").value;
    numero_tres = document.getElementById ("PrecioTres").value;

    numero_uno = parseInt (numero_uno);
    numero_dos = parseInt (numero_dos);
    numero_tres = parseInt (numero_tres);

    suma = numero_uno + numero_dos + numero_tres;

    alert ("La suma es: " +suma);

}
function Promedio () 
{
	var numero_uno, numero_dos, numero_tres, promedio;
    
    numero_uno = document.getElementById ("PrecioUno").value;
    numero_dos = document.getElementById ("PrecioDos").value;
    numero_tres = document.getElementById ("PrecioTres").value;
    
    numero_uno = parseInt (numero_uno);
    numero_dos = parseInt (numero_dos);
    numero_tres = parseInt (numero_tres);

    promedio = (numero_uno + numero_dos + numero_tres) /3;

    alert ("El promedio es: " +promedio);
}
function PrecioFinal () 
{
	var numero_uno, numero_dos, numero_tres, promedio;
    
    numero_uno = document.getElementById ("PrecioUno").value;
    numero_dos = document.getElementById ("PrecioDos").value;
    numero_tres = document.getElementById ("PrecioTres").value;
    
    numero_uno = parseInt (numero_uno);
    numero_dos = parseInt (numero_dos);
    numero_tres = parseInt (numero_tres);

    suma = numero_uno + numero_dos + numero_tres;

    IVA = suma *21 /100;
    
    precio_final = suma + IVA;

    alert ("El precio final es: " +precio_final);

}