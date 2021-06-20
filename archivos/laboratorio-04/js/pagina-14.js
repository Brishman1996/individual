'use strict'
function calcularBasico(num_h, cos_hr){
    return num_h*cos_hr;
}
function calcularBonificacion(sueb){
    return sueb*0.07;
}
function calcularDescuento(sueb){
    return sueb*0.05;
}
function calcularFinal(sueb, boni, desc){
    return sueb+boni-desc;
}

//Declarar procedimiento
function Calcular(){
    const txtNh = document.getElementById("txtNh");
    const txtCh = document.getElementById("txtCh");
    const txtSb = document.getElementById("txtSb");
    const txtBon = document.getElementById("txtBon");
    const txtDes = document.getElementById("txtDes");
    const txtSf = document.getElementById("txtSf");
    if(txtNh.value==""){
        alert("Ingresa el numero de horas: ");
        txtNh.focus();
    }else if(txtCh.value==""){
        alert("Ingresa el costo por hora: ");
        txtCh.focus();
    }else{
        //Declarando e inicializando variables
        var nh=0, ch=0, sb=0, bon=0, des=0, sf=0;
        //Capturando valores
        nh=parseFloat(txtNh.value);
        ch=parseFloat(txtCh.value);
        //Llamando a las funciones
        sb=calcularBasico(nh,ch);
        bon=calcularBonificacion(sb);
        des=calcularBonificacion(sb);
        sf=calcularFinal(sb,bon,des);

        //Mostrando resultados
        txtSb.value=sb;
        txtBon.value=bon;
        txtDes.value=des;
        txtSf.value=sb;
    }
}   