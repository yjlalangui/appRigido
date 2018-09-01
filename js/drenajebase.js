var interpo = function(a, b, c, d, e) {
    return (d + (((c - a) * (e - d)) / (b - a)));
}

function filtercoefdrenm2() {
    var drenporcent = parseFloat($('#phum').val())
    var drencalidad = $("#drenbase option:selected").text()

    $('#tab-drena').css('background-color', "");
    $('#Excelente').css('background-color', "");
    $('#Buena').css('background-color', "");
    $('#Aceptable').css('background-color', "");
    $('#Pobre').css('background-color', "");
    $('#Muypobre').css('background-color', "");
    $('.01').css('background-color', "");
    $('.15').css('background-color', "");
    $('.525').css('background-color', "");
    $('.25').css('background-color', "");

    if ((drencalidad == "Excelente (2 horas)")) {
        $('#Excelente').css('background-color', "#c0e4fc");
        if ((0 <= drenporcent) && (drenporcent <= 1)) {
            $('.01').css('background-color', "#c0e4fc");
            $('#tab-drena #Excelente .01').css('background-color', "#008ED1");
            var m21 = interpo(0, 1, drenporcent, 1.4, 1.35)
            $("#m2").val(m21.toFixed(3));
            document.getElementById("p15").innerHTML = "m2" + " = " + "1.40" + " + " + "(" + "(" + "(" + drenporcent.toFixed(2) + " - " + "0" + ")" + " x " + "(" + "1.35" + " - " + "1.40" + ")" + ")" + " / " + "(" + "1.00" + " - " + " 0 " + ")" + ")";
            document.getElementById("p16").innerHTML = "m2" + " = " + m21.toFixed(3);
        } else if ((1 < drenporcent) && (drenporcent <= 5)) {
            $('.15').css('background-color', "#c0e4fc");
            $('#tab-drena #Excelente .15').css('background-color', "#008ED1");
            var m22 = interpo(1, 5, drenporcent, 1.35, 1.30)
            $("#m2").val(m22.toFixed(3));
            document.getElementById("p15").innerHTML = "m2" + " = " + "1.35" + " + " + "(" + "(" + "(" + drenporcent.toFixed(2) + " - " + "1.00" + ")" + " x " + "(" + "1.30" + " - " + "1.35" + ")" + ")" + " / " + "(" + "5.00" + " - " + " 1.00 " + ")" + ")";
            document.getElementById("p16").innerHTML = "m2" + " = " + m22.toFixed(3);
        } else if ((5 < drenporcent) && (drenporcent <= 25)) {
            $('.525').css('background-color', "#c0e4fc");
            $('#tab-drena #Excelente .525').css('background-color', "#008ED1");
            var m23 = interpo(5, 25, drenporcent, 1.30, 1.20)
            $("#m2").val(m23.toFixed(3));
            document.getElementById("p15").innerHTML = "m2" + " = " + "1.30" + " + " + "(" + "(" + "(" + drenporcent.toFixed(2) + " - " + "5.00" + ")" + " x " + "(" + "1.20" + " - " + "1.30" + ")" + ")" + " / " + "(" + "25.00" + " - " + " 5.00 " + ")" + ")";
            document.getElementById("p16").innerHTML = "m2" + " = " + m23.toFixed(3);
        } else if ((25 < drenporcent)) {
            $('.25').css('background-color', "#c0e4fc");
            $('#tab-drena #Excelente .25').css('background-color', "#008ED1");
            $("#m2").val("1.200");
            document.getElementById("p15").innerHTML = "m2" + " = " + "1.20";
            document.getElementById("p16").innerHTML = "m2" + " = " + "1.20";
        } else {

        }

    } else if ((drencalidad == "Buena ( 1 día)")) {
        $('#Buena').css('background-color', "#c0e4fc");
        if ((0 <= drenporcent) && (drenporcent <= 1)) {
            $('.01').css('background-color', "#c0e4fc");
            $('#tab-drena #Buena .01').css('background-color', "#008ED1");
            var m24 = interpo(0, 1, drenporcent, 1.35, 1.25)
            $("#m2").val(m24.toFixed(3));
            document.getElementById("p15").innerHTML = "m2" + " = " + "1.35" + " + " + "(" + "(" + "(" + drenporcent.toFixed(2) + " - " + "0" + ")" + " x " + "(" + "1.25" + " - " + "1.35" + ")" + ")" + " / " + "(" + "1.00" + " - " + " 0 " + ")" + ")";
            document.getElementById("p16").innerHTML = "m2" + " = " + m24.toFixed(3);
        } else if ((1 < drenporcent) && (drenporcent <= 5)) {
            $('.15').css('background-color', "#c0e4fc");
            $('#tab-drena #Buena .15').css('background-color', "#008ED1");
            var m25 = interpo(1, 5, drenporcent, 1.25, 1.15)
            $("#m2").val(m25.toFixed(3));
            document.getElementById("p15").innerHTML = "m2" + " = " + "1.25" + " + " + "(" + "(" + "(" + drenporcent.toFixed(2) + " - " + "1.00" + ")" + " x " + "(" + "1.15" + " - " + "1.25" + ")" + ")" + " / " + "(" + "5.00" + " - " + " 1.00 " + ")" + ")";
            document.getElementById("p16").innerHTML = "m2" + " = " + m25.toFixed(3);
        } else if ((5 < drenporcent) && (drenporcent <= 25)) {
            $('.525').css('background-color', "#c0e4fc");
            $('#tab-drena #Buena .525').css('background-color', "#008ED1");
            var m26 = interpo(5, 25, drenporcent, 1.15, 1.00)
            $("#m2").val(m26.toFixed(3));
            document.getElementById("p15").innerHTML = "m2" + " = " + "1.15" + " + " + "(" + "(" + "(" + drenporcent.toFixed(2) + " - " + "5.00" + ")" + " x " + "(" + "1.00" + " - " + "1.15" + ")" + ")" + " / " + "(" + "25.00" + " - " + " 5.00 " + ")" + ")";
            document.getElementById("p16").innerHTML = "m2" + " = " + m26.toFixed(3);
        } else if ((25 < drenporcent)) {
            $('.25').css('background-color', "#c0e4fc");
            $('#tab-drena #Buena .25').css('background-color', "#008ED1");
            $("#m2").val("1.000");
            document.getElementById("p15").innerHTML = "m2" + " = " + "1.00";
            document.getElementById("p16").innerHTML = "m2" + " = " + "1.00";
        } else {

        }

    } else if ((drencalidad == "Aceptable (1 semana)")) {
        $('#Aceptable').css('background-color', "#c0e4fc");
        if ((0 <= drenporcent) && (drenporcent <= 1)) {
            $('.01').css('background-color', "#c0e4fc");
            $('#tab-drena #Aceptable .01').css('background-color', "#008ED1");
            var m27 = interpo(0, 1, drenporcent, 1.25, 1.15)
            $("#m2").val(m27.toFixed(3));
            document.getElementById("p15").innerHTML = "m2" + " = " + "1.25" + " + " + "(" + "(" + "(" + drenporcent.toFixed(2) + " - " + "0" + ")" + " x " + "(" + "1.15" + " - " + "1.25" + ")" + ")" + " / " + "(" + "1.00" + " - " + " 0 " + ")" + ")";
            document.getElementById("p16").innerHTML = "m2" + " = " + m27.toFixed(3);
        } else if ((1 < drenporcent) && (drenporcent <= 5)) {
            $('.15').css('background-color', "#c0e4fc");
            $('#tab-drena #Aceptable .15').css('background-color', "#008ED1");
            var m28 = interpo(1, 5, drenporcent, 1.15, 1.05)
            $("#m2").val(m28.toFixed(3));
            document.getElementById("p15").innerHTML = "m2" + " = " + "1.15" + " + " + "(" + "(" + "(" + drenporcent.toFixed(2) + " - " + "1.00" + ")" + " x " + "(" + "1.05" + " - " + "1.15" + ")" + ")" + " / " + "(" + "5.00" + " - " + " 1.00 " + ")" + ")";
            document.getElementById("p16").innerHTML = "m2" + " = " + m28.toFixed(3);
        } else if ((5 < drenporcent) && (drenporcent <= 25)) {
            $('.525').css('background-color', "#c0e4fc");
            $('#tab-drena #Aceptable .525').css('background-color', "#008ED1");
            var m29 = interpo(5, 25, drenporcent, 1.00, 0.8)
            $("#m2").val(m29.toFixed(3));
            document.getElementById("p15").innerHTML = "m2" + " = " + "1.00" + " + " + "(" + "(" + "(" + drenporcent.toFixed(2) + " - " + "5.00" + ")" + " x " + "(" + "0.80" + " - " + "1.00" + ")" + ")" + " / " + "(" + "25.00" + " - " + " 5.00 " + ")" + ")";
            document.getElementById("p16").innerHTML = "m2" + " = " + m29.toFixed(3);
        } else if ((25 < drenporcent)) {
            $('.25').css('background-color', "#c0e4fc");
            $('#tab-drena #Aceptable .25').css('background-color', "#008ED1");
            $("#m2").val("0.800");
            document.getElementById("p15").innerHTML = "m2" + " = " + "0.80";
            document.getElementById("p16").innerHTML = "m2" + " = " + "0.80";
        } else {

        }

    } else if ((drencalidad == "Pobre (1 mes)")) {
        $('#Pobre').css('background-color', "#c0e4fc");
        if ((0 <= drenporcent) && (drenporcent <= 1)) {
            $('.01').css('background-color', "#c0e4fc");
            $('#tab-drena #Pobre .01').css('background-color', "#008ED1");
            var m291 = interpo(0, 1, drenporcent, 1.15, 1.05)
            $("#m2").val(m291.toFixed(3));
            document.getElementById("p15").innerHTML = "m2" + " = " + "1.15" + " + " + "(" + "(" + "(" + drenporcent.toFixed(2) + " - " + "0" + ")" + " x " + "(" + "1.05" + " - " + "1.15" + ")" + ")" + " / " + "(" + "1.00" + " - " + " 0 " + ")" + ")";
            document.getElementById("p16").innerHTML = "m2" + " = " + m291.toFixed(3);
        } else if ((1 < drenporcent) && (drenporcent <= 5)) {
            $('.15').css('background-color', "#c0e4fc");
            $('#tab-drena #Pobre .15').css('background-color', "#008ED1");
            var m292 = interpo(1, 5, drenporcent, 1.05, 0.8)
            $("#m2").val(m292.toFixed(3));
            document.getElementById("p15").innerHTML = "m2" + " = " + "1.05" + " + " + "(" + "(" + "(" + drenporcent.toFixed(2) + " - " + "1.00" + ")" + " x " + "(" + "0.80" + " - " + "1.05" + ")" + ")" + " / " + "(" + "5.00" + " - " + " 1.00 " + ")" + ")";
            document.getElementById("p16").innerHTML = "m2" + " = " + m292.toFixed(3);
        } else if ((5 < drenporcent) && (drenporcent <= 25)) {
            $('.525').css('background-color', "#c0e4fc");
            $('#tab-drena #Pobre .525').css('background-color', "#008ED1");
            var m293 = interpo(5, 25, drenporcent, 0.8, 0.6)
            $("#m2").val(m293.toFixed(3));
            document.getElementById("p15").innerHTML = "m2" + " = " + "0.80" + " + " + "(" + "(" + "(" + drenporcent.toFixed(2) + " - " + "5.00" + ")" + " x " + "(" + "0.60" + " - " + "0.80" + ")" + ")" + " / " + "(" + "25.00" + " - " + " 5.00 " + ")" + ")";
            document.getElementById("p16").innerHTML = "m2" + " = " + m293.toFixed(3);
        } else if ((25 < drenporcent)) {
            $('.25').css('background-color', "#c0e4fc");
            $('#tab-drena #Pobre .25').css('background-color', "#008ED1");
            $("#m2").val("0.600");
            document.getElementById("p15").innerHTML = "m2" + " = " + "0.60";
            document.getElementById("p16").innerHTML = "m2" + " = " + "0.60";
        } else {

        }

    } else if ((drencalidad == "Muy pobre (el agua no drena)")) {
        $('#Muypobre').css('background-color', "#c0e4fc");
        if ((0 <= drenporcent) && (drenporcent <= 1)) {
            $('.01').css('background-color', "#c0e4fc");
            $('#tab-drena #Muypobre .01').css('background-color', "#008ED1");
            var m294 = interpo(0, 1, drenporcent, 1.05, 0.95)
            $("#m2").val(m294.toFixed(3));
            document.getElementById("p15").innerHTML = "m2" + " = " + "1.05" + " + " + "(" + "(" + "(" + drenporcent.toFixed(2) + " - " + "0" + ")" + " x " + "(" + "0.95" + " - " + "1.05" + ")" + ")" + " / " + "(" + "1.00" + " - " + " 0 " + ")" + ")";
            document.getElementById("p16").innerHTML = "m2" + " = " + m294.toFixed(3);
        } else if ((1 < drenporcent) && (drenporcent <= 5)) {
            $('.15').css('background-color', "#c0e4fc");
            $('#tab-drena #Muypobre .15').css('background-color', "#008ED1");
            var m295 = interpo(1, 5, drenporcent, 0.95, 0.75)
            $("#m2").val(m295.toFixed(3));
            document.getElementById("p15").innerHTML = "m2" + " = " + "0.95" + " + " + "(" + "(" + "(" + drenporcent.toFixed(2) + " - " + "1.00" + ")" + " x " + "(" + "0.75" + " - " + "0.95" + ")" + ")" + " / " + "(" + "5.00" + " - " + " 1.00 " + ")" + ")";
            document.getElementById("p16").innerHTML = "m2" + " = " + m295.toFixed(3);
        } else if ((5 < drenporcent) && (drenporcent <= 25)) {
            $('.525').css('background-color', "#c0e4fc");
            $('#tab-drena #Muypobre .525').css('background-color', "#008ED1");
            var m296 = interpo(5, 25, drenporcent, 0.75, 0.4)
            $("#m2").val(m296.toFixed(3));
            document.getElementById("p15").innerHTML = "m2" + " = " + "0.75" + " + " + "(" + "(" + "(" + drenporcent.toFixed(2) + " - " + "5.00" + ")" + " x " + "(" + "0.40" + " - " + "0.75" + ")" + ")" + " / " + "(" + "25.00" + " - " + " 5.00 " + ")" + ")";
            document.getElementById("p16").innerHTML = "m2" + " = " + m296.toFixed(3);
        } else if ((25 < drenporcent)) {
            $('.25').css('background-color', "#c0e4fc");
            $('#tab-drena #Muypobre .25').css('background-color', "#008ED1");
            $("#m2").val("0.400");
            document.getElementById("p15").innerHTML = "m2" + " = " + "0.40";
            document.getElementById("p16").innerHTML = "m2" + " = " + "0.40";
        } else {

        }

    } else {
        $("#m2").val("");
    }
}

function coefdrenm3() {
    var drenacalidadm3 = $("#drensubbase option:selected").val()
    var drenporcentm3 = parseFloat($('#porhumedad').val())
    var drencalidadm3 = $("#drensubbase option:selected").text()
    $('#tab-drenasb').css('background-color', "");
    $('#Excelentesb').css('background-color', "");
    $('#Buenasb').css('background-color', "");
    $('#Aceptablesb').css('background-color', "");
    $('#Pobresb').css('background-color', "");
    $('#Muypobresb').css('background-color', "");
    $('.01sb').css('background-color', "");
    $('.15sb').css('background-color', "");
    $('.525sb').css('background-color', "");
    $('.25sb').css('background-color', "");

    if ((drencalidadm3 == "Excelente (2 horas)")) {
        $('#Excelentesb').css('background-color', "#c0e4fc");
        if ((0 <= drenporcentm3) && (drenporcentm3 <= 1)) {
            $('.01sb').css('background-color', "#c0e4fc");
            $('#tab-drenasb #Excelentesb .01sb').css('background-color', "#008ED1");
            var m31 = interpo(0, 1, drenporcentm3, 1.4, 1.35)
            $("#m3").val(m31.toFixed(3));
            document.getElementById("p17").innerHTML = "m2" + " = " + "1.40" + " + " + "(" + "(" + "(" + drenporcentm3.toFixed(2) + " - " + "0" + ")" + " x " + "(" + "1.35" + " - " + "1.40" + ")" + ")" + " / " + "(" + "1.00" + " - " + " 0 " + ")" + ")";
            document.getElementById("p18").innerHTML = "m2" + " = " + m31.toFixed(3);
        } else if ((1 < drenporcentm3) && (drenporcentm3 <= 5)) {
            $('.15sb').css('background-color', "#c0e4fc");
            $('#tab-drenasb #Excelentesb .15sb').css('background-color', "#008ED1");
            var m32 = interpo(1, 5, drenporcentm3, 1.35, 1.30)
            $("#m3").val(m32.toFixed(3));
            document.getElementById("p17").innerHTML = "m2" + " = " + "1.35" + " + " + "(" + "(" + "(" + drenporcentm3.toFixed(2) + " - " + "1.00" + ")" + " x " + "(" + "1.30" + " - " + "1.35" + ")" + ")" + " / " + "(" + "5.00" + " - " + " 1.00 " + ")" + ")";
            document.getElementById("p18").innerHTML = "m2" + " = " + m32.toFixed(3);
        } else if ((5 < drenporcentm3) && (drenporcentm3 <= 25)) {
            $('.525sb').css('background-color', "#c0e4fc");
            $('#tab-drenasb #Excelentesb .525sb').css('background-color', "#008ED1");
            var m33 = interpo(5, 25, drenporcentm3, 1.30, 1.20)
            $("#m3").val(m33.toFixed(3));
            document.getElementById("p17").innerHTML = "m2" + " = " + "1.30" + " + " + "(" + "(" + "(" + drenporcentm3.toFixed(2) + " - " + "5.00" + ")" + " x " + "(" + "1.20" + " - " + "1.30" + ")" + ")" + " / " + "(" + "25.00" + " - " + " 5.00 " + ")" + ")";
            document.getElementById("p18").innerHTML = "m2" + " = " + m33.toFixed(3);
        } else if ((25 < drenporcentm3)) {
            $('.25sb').css('background-color', "#c0e4fc");
            $('#tab-drenasb #Excelentesb .25sb').css('background-color', "#008ED1");
            $("#m3").val("1.200");
            document.getElementById("p17").innerHTML = "m2" + " = " + "1.20";
            document.getElementById("p18").innerHTML = "m2" + " = " + "1.20";
        } else {

        }

    } else if ((drencalidadm3 == "Buena ( 1 día)")) {
        $('#Buenasb').css('background-color', "#c0e4fc");
        if ((0 <= drenporcentm3) && (drenporcentm3 <= 1)) {
            $('.01sb').css('background-color', "#c0e4fc");
            $('#tab-drenasb #Buenasb .01sb').css('background-color', "#008ED1");
            var m34 = interpo(0, 1, drenporcentm3, 1.35, 1.25)
            $("#m3").val(m34.toFixed(3));
            document.getElementById("p17").innerHTML = "m2" + " = " + "1.35" + " + " + "(" + "(" + "(" + drenporcentm3.toFixed(2) + " - " + "0" + ")" + " x " + "(" + "1.25" + " - " + "1.35" + ")" + ")" + " / " + "(" + "1.00" + " - " + " 0 " + ")" + ")";
            document.getElementById("p18").innerHTML = "m2" + " = " + m34.toFixed(3);
        } else if ((1 < drenporcentm3) && (drenporcentm3 <= 5)) {
            $('.15sb').css('background-color', "#c0e4fc");
            $('#tab-drenasb #Buenasb .15sb').css('background-color', "#008ED1");
            var m35 = interpo(1, 5, drenporcentm3, 1.25, 1.15)
            $("#m3").val(m35.toFixed(3));
            document.getElementById("p17").innerHTML = "m2" + " = " + "1.25" + " + " + "(" + "(" + "(" + drenporcentm3.toFixed(2) + " - " + "1.00" + ")" + " x " + "(" + "1.15" + " - " + "1.25" + ")" + ")" + " / " + "(" + "5.00" + " - " + " 1.00 " + ")" + ")";
            document.getElementById("p18").innerHTML = "m2" + " = " + m35.toFixed(3);
        } else if ((5 < drenporcentm3) && (drenporcentm3 <= 25)) {
            $('.525sb').css('background-color', "#c0e4fc");
            $('#tab-drenasb #Buenasb .525sb').css('background-color', "#008ED1");
            var m36 = interpo(5, 25, drenporcentm3, 1.15, 1.00)
            $("#m3").val(m36.toFixed(3));
            document.getElementById("p17").innerHTML = "m2" + " = " + "1.15" + " + " + "(" + "(" + "(" + drenporcentm3.toFixed(2) + " - " + "5.00" + ")" + " x " + "(" + "1.00" + " - " + "1.15" + ")" + ")" + " / " + "(" + "25.00" + " - " + " 5.00 " + ")" + ")";
            document.getElementById("p18").innerHTML = "m2" + " = " + m36.toFixed(3);
        } else if ((25 < drenporcentm3)) {
            $('.25sb').css('background-color', "#c0e4fc");
            $('#tab-drenasb #Buenasb .25sb').css('background-color', "#008ED1");
            $("#m3").val("1.000");
            document.getElementById("p17").innerHTML = "m2" + " = " + "1.00";
            document.getElementById("p18").innerHTML = "m2" + " = " + "1.00";
        } else {

        }

    } else if ((drencalidadm3 == "Aceptable (1 semana)")) {
        $('#Aceptablesb').css('background-color', "#c0e4fc");
        if ((0 <= drenporcentm3) && (drenporcentm3 <= 1)) {
            $('.01sb').css('background-color', "#c0e4fc");
            $('#tab-drenasb #Aceptablesb .01sb').css('background-color', "#008ED1");
            var m37 = interpo(0, 1, drenporcentm3, 1.25, 1.15)
            $("#m3").val(m37.toFixed(3));
            document.getElementById("p17").innerHTML = "m2" + " = " + "1.25" + " + " + "(" + "(" + "(" + drenporcentm3.toFixed(2) + " - " + "0" + ")" + " x " + "(" + "1.15" + " - " + "1.25" + ")" + ")" + " / " + "(" + "1.00" + " - " + " 0 " + ")" + ")";
            document.getElementById("p18").innerHTML = "m2" + " = " + m37.toFixed(3);
        } else if ((1 < drenporcentm3) && (drenporcentm3 <= 5)) {
            $('.15sb').css('background-color', "#c0e4fc");
            $('#tab-drenasb #Aceptablesb .15sb').css('background-color', "#008ED1");
            var m38 = interpo(1, 5, drenporcentm3, 1.15, 1.05)
            $("#m3").val(m38.toFixed(3));
            document.getElementById("p17").innerHTML = "m2" + " = " + "1.15" + " + " + "(" + "(" + "(" + drenporcentm3.toFixed(2) + " - " + "1.00" + ")" + " x " + "(" + "1.05" + " - " + "1.15" + ")" + ")" + " / " + "(" + "5.00" + " - " + " 1.00 " + ")" + ")";
            document.getElementById("p18").innerHTML = "m2" + " = " + m38.toFixed(3);
        } else if ((5 < drenporcentm3) && (drenporcentm3 <= 25)) {
            $('.525sb').css('background-color', "#c0e4fc");
            $('#tab-drenasb #Aceptablesb .525sb').css('background-color', "#008ED1");
            var m39 = interpo(5, 25, drenporcentm3, 1.00, 0.8)
            $("#m3").val(m39.toFixed(3));
            document.getElementById("p17").innerHTML = "m2" + " = " + "1.00" + " + " + "(" + "(" + "(" + drenporcentm3.toFixed(2) + " - " + "5.00" + ")" + " x " + "(" + "0.80" + " - " + "1.00" + ")" + ")" + " / " + "(" + "25.00" + " - " + " 5.00 " + ")" + ")";
            document.getElementById("p18").innerHTML = "m2" + " = " + m39.toFixed(3);
        } else if ((25 < drenporcentm3)) {
            $('.25sb').css('background-color', "#c0e4fc");
            $('#tab-drenasb #Aceptablesb .25sb').css('background-color', "#008ED1");
            $("#m3").val("0.800");
            document.getElementById("p17").innerHTML = "m2" + " = " + "0.80";
            document.getElementById("p18").innerHTML = "m2" + " = " + "0.80";
        } else {

        }

    } else if ((drencalidadm3 == "Pobre (1 mes)")) {
        $('#Pobresb').css('background-color', "#c0e4fc");
        if ((0 <= drenporcentm3) && (drenporcentm3 <= 1)) {
            $('.01sb').css('background-color', "#c0e4fc");
            $('#tab-drenasb #Pobresb .01sb').css('background-color', "#008ED1");
            var m391 = interpo(0, 1, drenporcentm3, 1.15, 1.05)
            $("#m3").val(m391.toFixed(3));
            document.getElementById("p17").innerHTML = "m2" + " = " + "1.15" + " + " + "(" + "(" + "(" + drenporcentm3.toFixed(2) + " - " + "0" + ")" + " x " + "(" + "1.05" + " - " + "1.15" + ")" + ")" + " / " + "(" + "1.00" + " - " + " 0 " + ")" + ")";
            document.getElementById("p18").innerHTML = "m2" + " = " + m391.toFixed(3);
        } else if ((1 < drenporcentm3) && (drenporcentm3 <= 5)) {
            $('.15sb').css('background-color', "#c0e4fc");
            $('#tab-drenasb #Pobresb .15sb').css('background-color', "#008ED1");
            var m392 = interpo(1, 5, drenporcentm3, 1.05, 0.8)
            $("#m3").val(m392.toFixed(3));
            document.getElementById("p17").innerHTML = "m2" + " = " + "1.05" + " + " + "(" + "(" + "(" + drenporcentm3.toFixed(2) + " - " + "1.00" + ")" + " x " + "(" + "0.80" + " - " + "1.05" + ")" + ")" + " / " + "(" + "5.00" + " - " + " 1.00 " + ")" + ")";
            document.getElementById("p18").innerHTML = "m2" + " = " + m392.toFixed(3);
        } else if ((5 < drenporcentm3) && (drenporcentm3 <= 25)) {
            $('.525sb').css('background-color', "#c0e4fc");
            $('#tab-drenasb #Pobresb .525sb').css('background-color', "#008ED1");
            var m393 = interpo(5, 25, drenporcentm3, 0.8, 0.6)
            $("#m3").val(m393.toFixed(3));
            document.getElementById("p17").innerHTML = "m2" + " = " + "0.80" + " + " + "(" + "(" + "(" + drenporcentm3.toFixed(2) + " - " + "5.00" + ")" + " x " + "(" + "0.60" + " - " + "0.80" + ")" + ")" + " / " + "(" + "25.00" + " - " + " 5.00 " + ")" + ")";
            document.getElementById("p18").innerHTML = "m2" + " = " + m393.toFixed(3);
        } else if ((25 < drenporcentm3)) {
            $('.25sb').css('background-color', "#c0e4fc");
            $('#tab-drenasb #Pobresb .25sb').css('background-color', "#008ED1");
            $("#m3").val("0.600");
            document.getElementById("p17").innerHTML = "m2" + " = " + "0.60";
            document.getElementById("p18").innerHTML = "m2" + " = " + "0.60";
        } else {

        }

    } else if ((drencalidadm3 == "Muy pobre (el agua no drena)")) {
        $('#Muypobresb').css('background-color', "#c0e4fc");
        if ((0 <= drenporcentm3) && (drenporcentm3 <= 1)) {
            $('.01sb').css('background-color', "#c0e4fc");
            $('#tab-drenasb #Muypobresb .01sb').css('background-color', "#008ED1");
            var m394 = interpo(0, 1, drenporcentm3, 1.05, 0.95)
            $("#m3").val(m394.toFixed(3));
            document.getElementById("p17").innerHTML = "m2" + " = " + "1.05" + " + " + "(" + "(" + "(" + drenporcentm3.toFixed(2) + " - " + "0" + ")" + " x " + "(" + "0.95" + " - " + "1.05" + ")" + ")" + " / " + "(" + "1.00" + " - " + " 0 " + ")" + ")";
            document.getElementById("p18").innerHTML = "m2" + " = " + m394.toFixed(3);
        } else if ((1 < drenporcentm3) && (drenporcentm3 <= 5)) {
            $('.15sb').css('background-color', "#c0e4fc");
            $('#tab-drenasb #Muypobresb .15sb').css('background-color', "#008ED1");
            var m395 = interpo(1, 5, drenporcentm3, 0.95, 0.75)
            $("#m3").val(m395.toFixed(3));
            document.getElementById("p17").innerHTML = "m2" + " = " + "0.95" + " + " + "(" + "(" + "(" + drenporcentm3.toFixed(2) + " - " + "1.00" + ")" + " x " + "(" + "0.75" + " - " + "0.95" + ")" + ")" + " / " + "(" + "5.00" + " - " + " 1.00 " + ")" + ")";
            document.getElementById("p18").innerHTML = "m2" + " = " + m395.toFixed(3);
        } else if ((5 < drenporcentm3) && (drenporcentm3 <= 25)) {
            $('.525sb').css('background-color', "#c0e4fc");
            $('#tab-drenasb #Muypobresb .525sb').css('background-color', "#008ED1");
            var m396 = interpo(5, 25, drenporcentm3, 0.75, 0.4)
            $("#m3").val(m396.toFixed(3));
            document.getElementById("p17").innerHTML = "m2" + " = " + "0.75" + " + " + "(" + "(" + "(" + drenporcentm3.toFixed(2) + " - " + "5.00" + ")" + " x " + "(" + "0.40" + " - " + "0.75" + ")" + ")" + " / " + "(" + "25.00" + " - " + " 5.00 " + ")" + ")";
            document.getElementById("p18").innerHTML = "m2" + " = " + m396.toFixed(3);
        } else if ((25 < drenporcentm3)) {
            $('.25sb').css('background-color', "#c0e4fc");
            $('#tab-drenasb #Muypobresb .25sb').css('background-color', "#008ED1");
            $("#m3").val("0.400");
            document.getElementById("p17").innerHTML = "m2" + " = " + "0.40";
            document.getElementById("p18").innerHTML = "m2" + " = " + "0.40";
        } else {

        }

    } else {
        $("#m3").val("");
    }
}