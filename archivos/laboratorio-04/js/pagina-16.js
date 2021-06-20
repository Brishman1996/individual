'use strict'

//declarando funciones
function CalcularBasico(){
    return numh*cosh;
}

function CalculaBonificacion(cate, sueb) {
    var b=0;
    if(cate=="a"){
        b=sueb*0.03;
    }else if(cate=="b"){
        b=sueb*0.05;
    }else if(cate=="c"){
        b=sueb*0.07;
    }else if(cate=="d"){
        b=sueb*0.09;
    }
    return b;
}

function CalcularDescuento(sueb){
    return sueb*0.5;
}

function CalculoFinal(sueb,boni,desc){
    return sueb+boni-desc;
}   

//creamos un procedimiento para calcular
function Calcular() {
    var txtNh=document.getElementById("txtNh");
    var txtCh=document.getElementById("txtCh");
    var txtSb=document.getElementById("txtSb");
    var rbA=document.getElementById("rbA");
    var rbB=document.getElementById("rbB");
    var rbC=document.getElementById("rbC");
    var rbD=document.getElementById("rbD");
    var txtBon=document.getElementById("txtBon");
    var chkTar=document.getElementById("chkTar");
    var txtDes=document.getElementById("txtDes");
    var txtSf=document.getElementById("txtSf");
}

//validando el ingreso de datos
var very = checked==false;

if(txtNh.value==""){
    alert("Ingrese el numero de horas");
    txtNh.focus();
}else if(txtCh.value==""){
    alert("Ingrese el costo por hora");
    txtCh.focus();
}else if(rbA.very && rbB.very && rbC.very && rbD.very){
    alert("Seleccione una categoria");
    rbA.focus();
}else{
    //declarando e inicializando variables
    var nh=0, ch=0, sb=0, bon=0, des=0, sf=0;
    //capturando valores
    nh = parseFloat(txtNh.value);
    ch=parseFloat(txtCh.value);
    //llamando a las funciones para las operaciones
    sb=CalcularBasico(nh,ch);
    if(rbA.checked){
        bon = CalcularBonificacion("a", sb);
    }else if(rbB.checked) {
        bon = CalcularBonificacion("b", sb);
    }
}
