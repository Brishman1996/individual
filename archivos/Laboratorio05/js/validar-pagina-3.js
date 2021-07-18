//Seleccionar DOM

var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtDni=document.getElementById("txtDni");
var cboCurso=document.getElementById("cboCurso");
var rbM=document.getElementById("rbM");
var rbT=document.getElementById("rbT");
var rbN=document.getElementById("rbN");
var chkEst=document.getElementById("chkEst");

////
var error = document.querySelector('#error');

//FUNCIONES DE VALIDACION
function validacionTxt(inputTxt,mensajeValid){    
    if(inputTxt.value=="" || inputTxt.value==null){
        error.style.display='block';
        error.innerHTML+="<li>"+mensajeValid+"</li>";
    }else{
        return error.style.display='none';
    }
}

function validacionSelect(inputSelect,mensajeValid){
    if(inputSelect.selectedIndex==-1 || inputSelect.selectedIndex==""){
        error.style.display='block';
        error.innerHTML+="<li>"+mensajeValid+"</li>";
    }else{
        return error.style.display='none';
    }
}

function validacionRadio(inputRadio,mensajeValid){
    if(inputRadio.checked==false){
        error.style.display='block';
        error.innerHTML+="<li>"+mensajeValid+"</li>";
    }else{
        return error.style.display='none';
    }
}

//////

//Funcion general de validacion
function validacionGeneral(){
    error.innerHTML="";
    validacionTxt(txtNom,"Por favor ingrese sus nombres");
    validacionTxt(txtApe,"Por favor ingrese sus apellidos");
    validacionTxt(txtDni,"Por favor ingrese su DNI");
    validacionSelect(cboCurso,"Selecciona un curso");
    validacionRadio(rbM,"Selecciona un turno");
    validacionRadio(rbT,"Selecciona un turno");
    validacionRadio(rbN,"Selecciona un turno");
    validacionRadio(chkEst,"Por favor selecciones un estado");
}

//Llamar clase
function LlamarClase(m){	
    error.style.display="block";
    error.innerHTML+="<li>"+m+"</li>"
}

//Accion del boton
function ValidarCampos() {
    error.innerHTML="";
    if(txtNom.value=="" || txtNom.value==null){
        LlamarClase("Por favor ingresa tus nombres");
        LlamarClase("Por favor ingresa tus apellidos");
        LlamarClase("Por favor ingresa tu DNI");
        LlamarClase("Por favor selecciona un curso");
        LlamarClase("Por favor selecciona un turno");
        LlamarClase("Por favor selecciona el estado");
        txtNom.focus();
    }else if(txtApe.value=="" || txtApe.value==null){
        LlamarClase("Por favor ingresa tus apellidos");
        LlamarClase("Por favor ingresa tu DNI");
        LlamarClase("Por favor selecciona un curso");
        LlamarClase("Por favor selecciona un turno");
        LlamarClase("Por favor selecciona el estado");
    }else if(txtDni.value=="" || txtDni.value==null){
        LlamarClase("Por favor ingresa tu DNI");
        LlamarClase("Por favor selecciona un curso");
        LlamarClase("Por favor selecciona un turno");
        LlamarClase("Por favor selecciona el estado");
    }else if (cboCurso.selectedIndex==-1 || cboCurso.selectedIndex=="") {
        LlamarClase("Por favor selecciona un curso");
        LlamarClase("Por favor selecciona un turno");
        LlamarClase("Por favor selecciona el estado");
    }else if(rbM.checked==false && rbN.checked==false && rbT.checked==false){
        LlamarClase("Por favor selecciona un turno");
        LlamarClase("Por favor selecciona el estado");
    }else if(chkEst.checked==false){
        LlamarClase("Porfavor selecciona el estado");
        chkEst.focus();
    }else{
        alert("Se registro correctamente");
        error.innerHTML;    
    }
}