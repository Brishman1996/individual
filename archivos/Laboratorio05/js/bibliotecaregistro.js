var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtCor=document.getElementById("txtCor");
var btnRegistrar=document.getElementById("btnRegistrar");

function MostrarRegistro(){
    var Listaregistro=Mostrar();
    var tbody=document.querySelector("#tbRegistro tbody");
    tbody.innerHTML="";
    for(var i=0;i<Listaregistro.length;i++){
        var fila=tbody.insertRow(i);

        var titulonom=fila.insertCell(0);
        var tituloape=fila.insertCell(1);
        var titulocor=fila.insertCell(2);

        titulonom.innerHTML=Listaregistro[i].nombre;
        tituloape.innerHTML=Listaregistro[i].apellido;
        titulocor.innerHTML=Listaregistro[i].correo;
        tbody.appendChild(fila);

    }
}

function RegistrarDatos(){
    var nom=txtNom.value;
    var ape=txtApe.value;
    var cor=txtCor.value;

    Registrar(nom, ape, cor)
    MostrarRegistro();
}

// function Mensaje(){
//     alert("Hola");
// }

// btnRegistrar.addEventListener("click",Mensaje);

btnRegistrar.addEventListener("click", RegistrarDatos);

