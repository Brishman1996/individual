'use strict'
// variables para los controles
var txtNom = document.getElementById("txtNom");
var txtApe = document.getElementById("txtApe");
var txtMail = document.getElementById("txtMail");
var btnRegistrar = document.getElementById("btnRegistrar");

//Creamos procedimiento para buscar
function Buscar(codigo) {
    //seleccionamos la tabla que se quiere buscar
    var db = database.ref().child('registro');
    db.once("value", function (snapshot){
        snapshot.forEach(function (data){
            //declaramos una variable para obtener el ID(KEY) de la tabla
            var key = data.key;
            //verificar si el codigo es igual al ID de la tabla
            if (key == codigo) {
                //declaramos variables para capturar los datos
                var cod = key;
                var nom = data.val().nombre;
                var ape = data.val().apellido;
                var cor = data.val().correo;
                //le asiganamos los valores a los controles
                txtCod.value = cod;
                txtNom.value = nom;
                txtApe.value = ape;
                txtCor.value = cor;
            }
        });
    })
}
//Creamos un procedimiento para mostrar los datos de la tabla
function Mostrar() {
    //declaramos una variable para contar el numero de filas
    var i = 0;
    //Selecciono el tbody de la tabla donde voy a mostrar la informacion
    var tbody = document.querySelector('#tbRegistro');
    tbody.innerHTML = "";

    //Seleccionamos la tabla que se quiere mostrar

    var db = database.ref().child('registro');
    db.once('value', function (snapshot) {
        if (snapshot.exists()) {
            snapshot.forEach(function (data) {
                var cod = data.key;
                var nom = data.val().nombre;
                var ape = data.val().apellido;
                var cor = data.val().correo;
                //declaramos una variable para las filas
                var fila = tbody.insertRow(i);
                //declaramos variables para los titulos
                var titulonom = fila.insertCell(0);
                var tituloape = fila.insertCell(1);
                var titulocor = fila.insertCell(2);
                var tituloact = fila.insertCell(3);
                var titulobor = fila.insertCell(4);
                //agregamos los valores
                titulonom.innerHTML = nom;
                tituloape.innerHTML = ape;
                titulocor.innerHTML = cor;
                tituloact.innerHTML =
                    "<a href='#' onclick=Buscar('" + cod + "')>Seleccionar</a>";
                titulobor.innerHTML =
                    "<a href='#' onclick=Eliminar('" + cod + "')>Seleccionar</a>";
                tbody.appendChild(fila);
                i++;
            });
        }
    });

}
//Llamamos una funcion Mostrar cuando carga la pagina
window.onload = Mostrar;

//creamos el procedimiento para limpiar
function Limpiar() {
    txtNom.value = "";
    txtApe.value = "";
    txtMail.value = "";
    txtNom.focus();
}

//creamos el procedimiento para registrar
function Registrar() {
    if (txtNom.value == "" || txtNom.value == null) {
        alert("Ingrese sus nombres");
        txtNom.focus();
    } else if (txtApe.value == "" || txtApe.value == null) {
        alert("Ingrese sus apellidos");
        txtApe.focus();
    } else if (txtMail.value == "" || txtMail.value
        == null) {
        alert("Ingrese su correo");
        txtMail.focus();
    } else {
        //capturando valores
        var nom = txtNom.value;
        var ape = txtApe.value;
        var cor = txtMail.value;

        //llamando a la funcion para registrar en firebase
        //writeuserData(nom, ape, cor);
        //Creamos tabla si no existiera
        var db = database.ref("registro");
        //Asignamos a la tabla que ha sido creada
        var registros = db.push();
        //le paso los campos y valores que tendra la tabla
        registros.set({
            nombre: nom,
            apellido: ape,
            correo: cor,
        });
        alert("Se registro el dato");
        //Llamamos a la funcion limpiar
        Limpiar();
        Mostrar();
    }
}
//creamos el procedimiento buscar
//creamos el procedimiento para actualizar
function Actualizar() {
    var cod = txtCod.value;
    var nom = txtNom.value;
    var ape = txtApe.value;
    var cor = txtMail.value;

    //selecionamos la tabla que queremos actualizar con el codigo del registro
    var db = database.ref("registro/" + cod);
    //Le asignamos los valores que se van actualizar
    db.update({
        nombre: nom,
        apellidos: ape,
        correo: cor,
    });
    alert("Se actualizo el dato");
    //llamamos el procedimiento Limpiar
    Limpiar();
    //llamamos el procedimiento Mostrar
    Mostrar();
}
//creamos el procedimiento para eliminar
function Eliminar(codigo){
    //pregutamos si se quiere  eliminar el registro
    var result = confirm("¿Estas seguro que quieres eliminar el registro");
    //Evalumos la respuesta
    if (result){
        //creamos una variable para el codigo
    var cod = codigo;
    var db = database.ref("registro/"+cod).remove();
    alert("Se elimino el dato");
    }
}

//asignamos el procedimiento al boton
btnRegistrar.addEventListener('click', Registrar);
btnRegistrar.addEventListener('click', Actualizar);