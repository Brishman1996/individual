'use strict'

var nom="", cont=0;

nom=prompt("Ingresa tu nombre:");

while(cont<5){
    document.write("Hola como estas "+nom+"<br>");
    cont++;
}
document.write("<hr>");

do{
    document.write("Hola como estas "+nom+"<br>");
    cont++;
}while(cont<5);
document.write("<hr>");

for(cont=0; cont<5; cont++){
    document.write("Hola como estas "+nom+"<br>");
}
document.write("<hr>");
document.write("<hr>");

//Ejemplo 2

var cont=0, can=0;

can=parseInt(prompt("Ingresa la cantidad de numeros:",0));

while(cont<can){
    document.write(cont+"<br>");
    cont++;
}
document.write("<hr>");

cont=0;
do{
    document.write(cont+"<br>");
    cont++;
}while(cont<can);

document.write("<hr>");

for(cont=0;cont<can;cont++){
    document.write(cont+"<br>");
}
document.write("<hr>");
document.write("<hr>");

//Ejemplo 3 
var cont=0, can=0, sum=0;
can=parseInt(prompt("Ingresa la cantidad de numeros"));

while(cont<can){
    document.write(cont+"<br>")
    sum=+sum+cont;
    cont++;
}
document.write("La suma es: "+sum);
document.write("<hr>");

cont=0
sum=0

do{
    document.write(cont+"<br>");
        sum=sum+cont;
}while(cont<can);
document.write("La suma es: "+sum);
document.write("<hr>");

sum=0;
for(cont=0;cont<can;cont++){
    document.write(cont+"<br>");
    sum=sum+cont;
}
document.write("La suma es: "+sum);
document.write("<hr>");
document.write("<hr>");

//Ejemplo 4

var cont=0, can= 0, cum=0;

can=parseInt(prompt("Ingresa la cantidad de numeros:"));
num=parseInt(prompt("Ingresa el numero de la tabla:"));

while(cont<can){
    document.write(cont+" X "+num+" = "+(cont*num)+"<br>");
    cont++;
}
document.write("<hr>");

cont=0;

do{
    document.write(cont+" X "+num+" = "+(cont*num)+"<br>");
    cont++;
}while(cont<can);
document.write("<hr>");


for(cont=0;cont<can;cont++){
    document.write(cont+" X "+num+" = "+(cont*num)+"<br>");
    document.write("<hr>");
    document.write("<hr>");
}