'use strict'

//Ejemplo 1 - Desarrollar una aplicacion que permitar ingresar 2 numeros
//y luego calcule las 4 operaciones basicas

function calcularSuma(n1,n2){
    return n1+n2;
}
function calcularResta(n1,n2){
    var r=0;
    r = n1-n2;
    return r;
}
function calcularMultiplicacion(n1,n2){
    return n1*n2;
}
function calcularDivision(n1,n2){
    var d = 0;
    d = n1/n2;
    return d;
}

//Declarando variables

var num1= 0, num2=0, sum=0, res=0, mul=0, div=0;

//Capturando valores
var num1 = parseFloat(prompt("Ingresa el numero 1: ", 0));
var num2 = parseFloat(prompt("Ingresa el numero 2: ", 0));

//Llamando a funciones para calcular
sum=calcularSuma(num1,num2);
res=calcularResta(num1,num2);
mul=calcularMultiplicacion(num1,num2);
div=calcularDivision(num1,num2);

//Mostrando resultados
document.write("La suma es "+sum+"<br>")
document.write("La resta es "+res+"<br>")
document.write("La multiplicacion es "+mul+"<br>")
document.write("La division es "+div+"<br>")