//delcarando variables
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtDni=document.getElementById("txtDni");
var cboCur=document.getElementById("cboCur");

var rbM=document.getElementById("rbM");
var rbT=document.getElementById("rbT");
var rbN=document.getElementById("rbN");

var chkEst=document.getElementById("chkEst");

function ValidarNombre(){
    if(txtNom.value==""  ||  txtNom.value==null){
        error.style.display="block";
        error.innerHTML+="<li>por favor ingrese sus Nombres</li>";
    }else{
        error.style.display="none";
    }
}

// Apellido
function ValidarApellido(){
    if(txtApe.value==""  ||  txtApe.value==null){
        error.style.display="block";
        error.innerHTML+="<li>por favor ingrese sus Apellidos</li>";
    }else{
        error.style.display="none";
    }
}
// correo
function ValidarDni(){
    if(txtDni.value==""  ||  txtDni.value==null){
        error.style.display="block";
        error.innerHTML+="<li>por favor ingrese su Dni</li>";
    }else{
        error.style.display="none";
    }
}
function ValidarCurso(){
    if(txtCur.value==""  ||  txtCur.value==null){
        error.style.display="block";
        error.innerHTML+="<li>por favor ingrese su curso</li>";
    }else{
        error.style.display="none";
    }
}
// turno
function ValidarTurno(){
    if(rbM.checked==false &&  rbT.checked==false && rbN.checked==false){
        error.style.display="block";
        error.innerHTML+="<li>por favor seleccione su Turno</li>";
    }else{
        error.style.display="none";
    }
}

// estado
function ValidarEstado(){
    if(chkEst.checked==false){
        error.style.display="block";
        error.innerHTML+="<li>por favor seleccione un estado</li>";
    }else{
        error.style.display="none";
    }
}
//creamos function
function Validar(){
    error.innerHTML="";
    ValidarNombre();
    ValidarApellido();
    ValidarDni();
    ValidarCurso();
    ValidarTurno();
    ValidarEstado();
}

function LlamarClase(m){
    error.style.display="block";
    error.innerHTML+="<li>"+m+"</li>"
}

function Registrar(){
    error.innerHTML="";
    if(txtNom.value=="" || txtNom.value==null){
        LlamarClase("Por favor ingresa tus Nombres");
        LlamarClase("Por favor ingresa tus Apellidos");
        LlamarClase("Por favor ingresa tu Dni");
        LlamarClase("Por favor ingresa tu curso");
        LlamarClase("Por favor selecciona tu turno");
        LlamarClase("Por favor selecciona el estado");
        txtNom.focus();
    }else if(txtApe.value=="" || txtApe.value==null){
        LlamarClase("Por favor ingresa tus Apellidos");
        LlamarClase("Por favor ingresa tu Dni");
        LlamarClase("Por favor ingresa tu Curso");
        LlamarClase("Por favor selecciona tu Turno");
        LlamarClase("Por favor selecciona el estado");
    }else if(txtCur.value=="" || txtCur.value==null){
        LlamarClase("Por favor ingresa tu Dni");
        LlamarClase("Por favor ingresa tu Curso");
        LlamarClase("Por favor selecciona tu Turno");
        LlamarClase("Por favor selecciona el estado");
    }else if(txtTur.value=="" || txtTur.value==null){
        LlamarClase("Por favor ingresa tu Curso");
        LlamarClase("Por favor selecciona tu Turno");
        LlamarClase("Por favor selecciona el estado");
    }else if(rbM.checked==false && rbT.checked==false && rbN.checked==false){
        LlamarClase("Por favor selecciona tu Turno");
        LlamarClase("Por favor selecciona el estado");
    }else if(chkEst.checked==false){
        LlamarClase("Porfavor selecciona el estado");
        chkEst.focus();
    }else{
        alert("Se registro correctamente");
        error.innerHTML
    }
}