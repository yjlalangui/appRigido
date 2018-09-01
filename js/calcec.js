var interpo = function(a, b, c, d, e) {
    return (d + (((c - a) * (e - d)) / (b - a)));
}

var calcec = function(a, b, c, d, e, f, g, h, i, k, j) {
    return ((a) + (b * (j)) + (c * Math.pow(j, 2)) + (d * Math.pow(j, 3)) + (e * Math.pow(j, 4)) + (f * Math.pow(j, 5)) + (g * Math.pow(j, 6)) + (h * Math.pow(j, 7)) + (i * Math.pow(j, 8)) + (k * Math.pow(j, 9)));
}

function calcularyec() {

    var valorxk = parseFloat($('#valorxk').val());
    var valorec = (parseFloat($('#Ec').val())) / 1000000;

    if ((3 <= valorec) && (valorec <= 4)) {
        var ec3 = calcec(-9.33758214116096, 2.20646266639232, 0.00425606220960617, -0.00332855805754662, 0.000224884657654911, -0.00000905247179616708, 0.00000022595141047077, -0.00000000336238592524296, 0.0000000000271913689481318, -0.0000000000000918873267405362, valorxk);

        var ec4 = calcec(-0.0215573124587536, 2.06898789200931, 0.00564823066815734, -0.00512127473484725, 0.000421259184804512, -0.0000186670722541749, 0.000000484037535386506, -0.0000000072913348692083, 0.0000000000590214856155402, -0.000000000000198483323011903, valorxk);

        var ecy = interpo(3, 4, valorec, ec3, ec4)
        $("#ecy").val(ecy);


    } else if ((4 < valorec) && (valorec <= 5)) {
        var ec4 = calcec(-0.0215573124587536, 2.06898789200931, 0.00564823066815734, -0.00512127473484725, 0.000421259184804512, -0.0000186670722541749, 0.000000484037535386506, -0.0000000072913348692083, 0.0000000000590214856155402, -0.000000000000198483323011903, valorxk);
        var ec5 = calcec(6.6204331000335, 2.03321835305541, -0.0527738882228732, 0.00340768037131056, -0.000183240910700988, 0.00000579759750962694, -0.000000104897445396546, 0.00000000103403741125163, -0.00000000000473219944133185, 0.0000000000000055123328726028, valorxk);

        var ecy = interpo(4, 5, valorec, ec4, ec5)
        $("#ecy").val(ecy);

    } else if ((5 < valorec) && (valorec <= 6)) {
        var ec5 = calcec(6.6204331000335, 2.03321835305541, -0.0527738882228732, 0.00340768037131056, -0.000183240910700988, 0.00000579759750962694, -0.000000104897445396546, 0.00000000103403741125163, -0.00000000000473219944133185, 0.0000000000000055123328726028, valorxk);
        var ec6 = calcec(11.8628967390395, 1.56736908247694, 0.0259848698042333, -0.00473889143904671, 0.000300168010653579, -0.0000114035735805373, 0.0000002670021004291810, -0.00000000374070741049337, 0.0000000000287031748195943, -0.0000000000000927488981612972, valorxk);

        var ecy = interpo(5, 6, valorec, ec5, ec6)
        $("#ecy").val(ecy);

    } else if ((6 < valorec) && (valorec <= 7)) {
        var ec6 = calcec(11.8628967390395, 1.56736908247694, 0.0259848698042333, -0.00473889143904671, 0.000300168010653579, -0.0000114035735805373, 0.0000002670021004291810, -0.00000000374070741049337, 0.0000000000287031748195943, -0.0000000000000927488981612972, valorxk);
        var ec7 = calcec(16.0135546084493, 1.4195345044136, 0.0385572751984, -0.00650175265036523, 0.000446435071353335, -0.0000181980776687851, 0.00000045194877884569, -0.00000000668444655183009, 0.0000000000541040953358496, -0.000000000000184586453245853, valorxk);

        var ecy = interpo(6, 7, valorec, ec6, ec7)
        $("#ecy").val(ecy);
    }

}