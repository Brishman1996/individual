'use strict'

var bas=0, alt=0, area=0, men="";

bas=parseFloat(prompt("Ingrese la base del triangulo: "));
alt=parseFloat(prompt("Ingrese la altura del triangulo: "));

area=(bas*alt)/2;

if(area>50){
    men="Es un triangulo grande";
}else{
    men="Es un triangulo pequeño";
}

alert("El area del triangulo es: "+area);
alert(men);

//ejemplo 2

var pre=0, can=0, sbt=0, des=0, igv=0, tot=0, com="";

pre=parseFloat(prompt("Ingrese el precio del producto: "));
can=parseFloat(prompt("Ingrese la cantidad a comprar: "));
com=prompt("Ingrese el tipo de comprobante [f]Factura o [b]Boleta");

sbt=pre*can;

if(sbt>1000){
    des=sbt*0.05;
}else{
    des=sbt*0.02;
}

if(com=="f"){
    igv=sbt*0.18;
}else{
    igv=0;
}
tot=sbt-des+igv;

document.write("El subtotal es: "+sbt+"<br>");
document.write("El descuento es: "+des+"<br>");
document.write("El igv es: "+igv+"<br>");
document.write("El total es: "+tot+"<br>");
document.write("<hr>");

