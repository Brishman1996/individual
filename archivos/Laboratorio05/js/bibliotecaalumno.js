var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtDni=document.getElementById("txtDni");
var cboCur=document.getElementById("cboCur");
var rbM=document.getElementById("rbM");
var rbT=document.getElementById("rbT");
var rbN=document.getElementById("rbN");
var chkEst=document.getElementById("chkEst");
var btnRegistrar=document.getElementById("btnRegistrar");

function MostrarAlumno(){
    var Listaalumno=Mostrar();
    var tbody=document.querySelector("#tbAlumno tbody");
    tbody.innerHTML="";
    for(var i=0;i<Listaalumno.length;i++){
        var fila=tbody.insertRow(i);

        var titulonom=fila.insertCell(0);
        var tituloape=fila.insertCell(1);
        var titulodni=fila.insertCell(2);
        var titulocur=fila.insertCell(3);
        var titulotur=fila.insertCell(4);
        var tituloest=fila.insertCell(5);

        titulonom.innerHTML=Listaalumno[i].nombre;
        tituloape.innerHTML=Listaalumno[i].apellidos;
        titulodni.innerHTML=Listaalumno[i].dni;
        titulocur.innerHTML=Listaalumno[i].curso;
        titulotur.innerHTML=Listaalumno[i].turno;
        tituloest.innerHTML=Listaalumno[i].estado;
        tbody.appendChild(fila);
    }
}

function RegistrarAlumno(){
    var nom=txtNom.value;
    var ape=txtApe.value;
    var dni=txtDni.value;
    var cur="";
    var indice=cboCurso.selectedIndex;
    switch(indice){
        case 1:
            cur="Diseño web";
            break;
        case 2:
            cur="Base de datos"
            break;
        case 3:
            cur="Programacion java"
            break;
        default:
            cur="";
            break;     
    }
    var turnoAlum = "";
    if(rbM.checked!==false){
        turnoAlum ="Mañana";
    }else if(rbN.checked!==false){
        turnoAlum = "Noche";
    }else if(rbT.checked!==false){
        turnoAlum = "Tardes";
    }else{
        turnoAlum ="";
    }
    // var estadoAlum = "";
    // if (chkEst.checked!==undefined) {
    //     estadoAlum="Habilitado";
    // }

    Registrar(nom,ape,dni,cur,turnoAlum,estadoAlum="Habilitado");
    MostrarAlumno();
}

// function Mensaje(){
//     alert("Hola");
// }

// btnRegistrar.addEventListener("click",Mensaje);

btnRegistrar.addEventListener("click", RegistrarAlumno);