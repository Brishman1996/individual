'use strict'
window.onload = function () {
    console.log("hola mundo");


    function registrar(idRegistro){
            var db = database.ref("nuevaTabla/"+idRegistro);
            //var nuevaTabla = db.push();
            //le paso los campos y valores que tendra la tabla
            db.set({
                nombre: "nom",
                apellido: "ape",
                correo: "cor",
            });
    }
}

//Creamos tabla si no existiera
