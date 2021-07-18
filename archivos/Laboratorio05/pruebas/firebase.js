export function importarScript(nombre) {
    var s = document.createElement("script");
    //agrendando enlace a script
    s.src = nombre;
    document.querySelector("head").appendChild(s);
    console.log("importo correctamente el archivo de firebase");
}
