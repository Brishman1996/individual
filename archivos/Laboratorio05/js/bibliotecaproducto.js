var txtNom=document.getElementById("txtNom");
var cboCategoria=document.getElementById("cboCategoria");
var txtPre=document.getElementById("txtPre");
var txtCan=document.getElementById("txtCan");
var btnRegistrar=document.getElementById("btnRegistrar");

function MostrarProducto(){
    var Listaproducto=Mostrar();
    var tbody=document.querySelector("#tbProducto tbody");
    tbody.innerHTML="";
    for(var i=0;i<Listaproducto.length;i++){
        var fila=tbody.insertRow(i);

        var titulonom=fila.insertCell(0);
        var titulocat=fila.insertCell(1);
        var titulopre=fila.insertCell(2);
        var titulocan=fila.insertCell(3);

        titulonom.innerHTML=Listaproducto[i].nombre;
        titulocat.innerHTML=Listaproducto[i].cantidad;
        titulopre.innerHTML=Listaproducto[i].precio;
        titulocan.innerHTML=Listaproducto[i].cantidad;
        tbody.appendChild(fila);

    }
}

function RegistrarProducto(){
    var nom=txtNom.value;
    var cat="";
    var indice=cboCategoria.selectedIndex;
    switch(indice){
        case 1:
            cat="Entrenamiento";
            break;
        case 2:
            cat="Tecnologia"
            break;
        case 3:
            cat="Linea Blanca"
            break;
        default:
            cat="";
            break;     
    }

    var pre=txtPre.value;
    var can=txtCan.value;

    Registrar(nom,cat,pre,can)
    MostrarProducto();
}

// function Mensaje(){
//     alert("Hola");
// }

// btnRegistrar.addEventListener("click",Mensaje);

btnRegistrar.addEventListener("click", RegistrarProducto);