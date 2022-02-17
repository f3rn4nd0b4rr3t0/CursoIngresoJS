/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */

function CalcularPrecio()
 {
    const PRECIO_LAMPARITA = 35;
    var cantidadLamparitas;
    var descuento;
    var precioTotal;
    var marca;
    var precioDescuento;
    var iiBB;


    cantidadLamparitas = document.getElementById("txtIdCantidad").value;
    cantidadLamparitas = parseFloat(cantidadLamparitas);

    marca = document.getElementById("Marca");

    if (cantidadLamparitas >= 6) {
        descuento = 50;
    }
    if (cantidadLamparitas == 5) {
        if (marca == "AgentinaLuz") {
            descuento = 40;
        }
        else  
        {
            descuento = 30;
        }
    }
    if (cantidadLamparitas == 4) {
        if (marca == "AgentinaLuz" && marca == "FelipeLamparas") {
            descuento = 25;
        }
        if (marca == "JeLuz" && marca == "HazIluminacion" && marca == "Osram") {
            descuento = 20;
        }
    }
    if (cantidadLamparitas == 3) {
        if (marca == "AgentinaLuz") {
            descuento = 15;
        }
        if (marca == "FelipeLamparas") {
            descuento = 10;
        }
        else {
            descuento = 5;
        }
    }
    else {
        descuento = 0;
    }

    precioTotal = cantidadLamparitas * PRECIO_LAMPARITA;
    descuento = precioTotal * descuento / 100;
    precioDescuento = precioTotal - descuento;

    if (precioDescuento > 120) {
        iiBB = precioDescuento * 10 / 100;
        precioTotal = descuento + iiBB;
        alert(`Usted pago $${iiBB} de IIBB`);
    }
    document.getElementById("txtIdprecioDescuento").value = "$" + precioTotal.toFixed(2);
}
