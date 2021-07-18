var alumno=[];
function Registrar(nomalumno,apealumno,dnialumno,curalumno,turalumno,estalumno){
    var NuevoAlumno={
        nombre:nomalumno,
        apellidos:apealumno,
        dni:dnialumno,
        curso:curalumno,
        turno:turalumno,
        est:estalumno
    };
    alumno.push(NuevoAlumno);
}

function Mostrar(){
    return alumno;
}