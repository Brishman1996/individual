'use strict'

function mostrarMensaje(ed){
    var m="";
    if(ed>=18){
        m="Eres mayor de edad";
    }else{
        m="Eres menor de edad";
    }
    return m;
}

//creamos un procedimiento para mostrar el mensaje
function mostrar(){
   //declaramos variables
    const txtEdad=document.getElementById("txtEdad");
    const txtMen=document.getElementById("txtMen");
    //validando controles
    if(txtEdad.value==""){
        alert("Ingresa tu edad");
        txtEdad.focus();
    }else{
        //declarando e inicializando variables
        var edad=0, men="";
        //capturando valores
        edad=parseFloat(txtEdad.value);
        //llamamos a la funcion para mostrar el mensaje
        men=mostrarMensaje(edad);
        //mostrando resultados
        txtMen.value=men;
    }
}