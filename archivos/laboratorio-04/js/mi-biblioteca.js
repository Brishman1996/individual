//delcarando variables
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtCor=document.getElementById("txtCor");
var rbMas=document.getElementById("rbMas");
var rbFem=document.getElementById("rbFem");
var rbOtr=document.getElementById("rbOtr");
var chkEst=document.getElementById("chkEst");

// Nombre
function ValidarNombre(){
    if(txtNom.value==""  ||  txtNom.value==null){
        error.style.display="block";
        error.innerHTML+="<li>por favor ingrese sus nombres</li>";
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
function ValidarCorreo(){
    if(txtCor.value==""  ||  txtCor.value==null){
        error.style.display="block";
        error.innerHTML+="<li>por favor ingrese su correo</li>";
    }else{
        error.style.display="none";
    }
}
// Sexo
function ValidarSexo(){
    if(rbMas.checked==false &&  rbFem.checked==false && rbOtr.checked==false){
        error.style.display="block";
        error.innerHTML+="<li>por favor seleccione su sexo</li>";
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
    ValidarCorreo();
    ValidarSexo();
    ValidarEstado();
}

function LlamarClase(m){
    error.style.display="block";
    error.innerHTML+="<li>"+m+"</li>"
}

function Registrar(){
    error.innerHTML="";
    if(txtNom.value=="" || txtNom.value==null){
        LlamarClase("Por favor ingresa tus nombres");
        LlamarClase("Por favor ingresa tus apellidos");
        LlamarClase("Por favor ingresa tus correo");
        LlamarClase("Por favor selecciona tu sexo");
        LlamarClase("Por favor selecciona el estado");
        txtNom.focus();
    }else if(txtApe.value=="" || txtApe.value==null){
        LlamarClase("Por favor ingresa tus apellidos");
        LlamarClase("Por favor ingresa tus correo");
        LlamarClase("Por favor selecciona tu sexo");
        LlamarClase("Por favor selecciona el estado");
    }else if((txtCor.value=="" || txtCor.value==null)){
        LlamarClase("Por favor ingresa tus correo");
        LlamarClase("Por favor selecciona tu sexo");
        LlamarClase("Por favor selecciona el estado");
    }else if(rbMas.checked==false && rbFem.checked==false && rbOtr.checked==false){
        LlamarClase("Por favor selecciona tu sexo");
        LlamarClase("Por favor selecciona el estado");
    }else if(chkEst.checked==false){
        LlamarClase("Porfavor selecciona el estado");
        chkEst.focus();
    }else{
        alert("Se registro correctamente");
        error.innerHTML
    }
}