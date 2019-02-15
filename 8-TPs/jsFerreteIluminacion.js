/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{

    var cant_lamp, descuento, precio, precio_descuento;

    precio = 35;

    cant_lamp = document.getElementById ("Cantidad").value;
    cant_lamp = parseInt (cant_lamp);

    marc_lamp = document.getElementById ("Marca").value;

    precio = precio * cant_lamp;

 	if (cant_lamp >= 6){
        descuento = precio *50 /100;
        precio_descuento = precio - descuento;
        document.getElementById ("precioDescuento").value = precio_descuento;
    }
    else {
        if (cant_lamp == 5 && marc_lamp == "ArgentinaLuz"){
            descuento = precio *40 /100;
            precio_descuento = precio - descuento;
            document.getElementById ("precioDescuento").value = precio_descuento;
        }
        else{
            if (cant_lamp == 5 && marc_lamp != "ArgentinaLuz"){
                descuento = precio *30 /100;
                precio_descuento = precio - descuento;
                document.getElementById ("precioDescuento").value = precio_descuento;
            }
            else{
                if[cant_lamp == 4 && (marc_lamp "ArgentinaLuz" || "FelipeLamparas" )]

            }
        }


    }



     
}
