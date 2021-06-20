'use strict'

function CalcularBasico(numh, cosh) {
    return numh * cosh;
}
function CalcularBonificacion(cate, sueb) {
    var b = 0;
    if (cate == "a") {
        b = sueb * 0.03;
    } else if (cate == "b") {
        b = sueb * 0.05
    } else if (cate == "c") {
        b = sueb * 0.07
    } else if (cate == "d") {
        b = sueb * 0.09;
    }
    return b;
}

function CalcularDescuento(sueb) {
    return sueb * 0.05;
}
function CalcularFinal(sueb, boni, desc) {
    return sueb + boni - desc;
}

function Calcular() {

    var txtNh = document.getElementById("txtNh");
    var cboArea = document.getElementById("cboArea");
    var txtSb = document.getElementById("txtSb");
    var rbA = document.getElementById("rbA");
    var rbB = document.getElementById("rbB");
    var rbC = document.getElementById("rbC");
    var rbD = document.getElementById("rbD");
    var txtBon = document.getElementById("txtBon");
    var chkTar = document.getElementById("chkTar");
    var txtDes = document.getElementById("txtDes");
    var txtSf = document.getElementById("txtSf");

    if (txtNh.value == "") {
        alert("Ingrese el numero de horas");
        txtNh.focus();
    } else if (cboArea.selectedIndex == 0) {
        alert("Seleccione el area");
        cboArea.focus();
    } else if (rbA.checked == false && rbB.checked == false && rbC.checked == false && rbD.checked == false) {
        alert("Seleccione una categoria");
        rbA.focus();
    } else {
        var nh = 0, ch = 0, sb = 0, bon = 0, des = 0, sf = 0;

        nh = parseFloat(txtNh.value);

        var indice = cboArea.selectedIndex;
        switch (indice) {
            case 1: ch = 15;
                break;
            case 2: ch = 18;
                break;
            case 3: ch = 16;
                break;
            case 4: ch = 12;
                break;
            case 5: ch = 10;
                break;
            case 6: ch = 13;
                break;
            default: ch = 0;
                break;
        }
        sb = CalcularBasico(nh, ch);
        if (rbA.checked) {
            bon = CalcularBonificacion("a", sb);
        } else if (rbB.checked) {
            bon = CalcularBonificacion("b", sb);
        } else if (rbC.checked) {
            bon = CalcularBonificacion("c", sb);
        } else if (rbD.checked) {
            bon = CalcularBonificacion("d", sb);
        } else {
            bon = 0;
        }
        if(chkTar.checked){
            des=CalcularDescuento(sb);
        }else{
            des=0;
        }
        sf = CalcularFinal(sb, bon, des);

        txtSb.value = sb;
        txtBon.value = bon;
        txtDes.value = des;
        txtSf.value = sf;
    }
}