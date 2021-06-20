'use strict'

window.onload = function () {
    var contenido = document.getElementsByClassName("cabecera");
    var html = contenido[0].outerHTML;
    localStorage.setItem('indice',html);
    console.log(localStorage['indice']);

};
