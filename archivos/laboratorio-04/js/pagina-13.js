'use strict'
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
function Calcular(){
    if(document.getElementById("txtN1").value==""){
        alert("Ingresa el numero 1");
        document.getElementById("txtN1").focus();
    }else if(document.getElementById("txtN2").value==""){
        alert("Ingresa el numero 2");
        document.getElementById("txtN2").focus();
    }else{

    var num1= 0, num2=0, sum=0, res=0, mul=0, div=0;

    //Capturando valores
    var num1 = parseFloat(document.getElementById("txtN1").value);
    var num2 = parseFloat(document.getElementById("txtN2").value);

    //Llamando a funciones para calcular
    sum=calcularSuma(num1,num2);
    res=calcularResta(num1,num2);
    mul=calcularMultiplicacion(num1,num2);
    div=calcularDivision(num1,num2);

    //Asignar valor input
    document.getElementById("txtSum").value=sum;
    document.getElementById("txtRes").value=res;
    document.getElementById("txtMul").value=mul;
    document.getElementById("txtDiv").value=div;
    }
}