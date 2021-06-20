'use strict'

var n1=0, n2=0, n3=0, prom=0, men="";

n1=parseFloat(prompt("Ingrese la nota 1: ",0));
n2=parseFloat(prompt("Ingrese la nota 2: ",0));
n3=parseFloat(prompt("Ingrese la nota 3: ",0));

prom=(n1+n2+n3)/3;

if(prom>13){
    men="Aprobado";
}

alert("El promedio es: "+prom);
alert(men);

//ejemplo 2

var sb=0, bon=0, des=0, sf=0, cat=0;

sb=parseFloat(prompt("Ingrese el sueldo basico: "));
cat=parseFloat(prompt("Ingrese la categoria: "));

if(cat==3){
    bon=sb*0.07;
    des=sb*0.03;
}
sf=sb+bon-des;

document.write("El sueldo basico es: "+sb+"<br>");
document.write("La bonificación es: "+bon+"<br>");
document.write("El descuento es: "+des+"<br>");
document.write("El sueldo final es: "+sf+"<br>");
document.write("<hr>");