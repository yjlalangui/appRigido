$(document).ready(function () {
	
});

function imprimir1() {

	

	var printme = document.getElementById("Reporte_variables_resultados_rigid");
	var printme0 = document.getElementById("ReporteResultados_rigid");
	//DATOS DEL PROYECTO
	var recibenombre = document.getElementById('datoNombre').value;
	document.getElementById('txtNombre_rigid').innerHTML = "<strong>" + "Nombre del proyecto:  " + "</strong>" + recibenombre;
	
	var recibeubicacion = document.getElementById('datoUbicacion').value;
	document.getElementById('txtUbicacion_rigid').innerHTML = "<strong>" + "Ubicación del proyecto:  " + "</strong>" + recibeubicacion;

	var reciberuta = document.getElementById('datoRuta').value;
	document.getElementById('txtRuta_rigid').innerHTML = "<strong>" + "Ruta:  " + "</strong>" + reciberuta;

	var recibetramo = document.getElementById('datoTramo').value;
	document.getElementById('txtTramo_rigid').innerHTML = "<strong>" + "Tramo:  " + "</strong>" + recibetramo;

	var recibeDiseñador = document.getElementById('datoDiseñador').value;
	document.getElementById('txtDiseñador_rigid').innerHTML = "<strong>" + "Diseñador:  " + "</strong>" + recibeDiseñador;

	if((recibenombre === "")&&(recibeubicacion === "")&&(reciberuta === "")&&(recibetramo === "")&&(recibeDiseñador === "")){
		$(".datosProyect").hide();
	} else {
		$(".datosProyect").show();
	}
	
	//FINNNN
	
	//Parámetros de diseño
	 
	var recibepi = document.getElementById('pinicial').value;
	document.getElementById('txt_pi_rigid').innerHTML = "<strong>" + "Serviciabilidad inicial (pi): " + "</strong>" + recibepi;
	var recibepf = document.getElementById('pfinal').value;
	document.getElementById('txt_pf_rigid').innerHTML = "<strong>" + "Serviciabilidad final (pf): " + "</strong>" + recibepf;
	var recibepsi = document.getElementById('deltapsi').value;
	document.getElementById('txt_psi_rigid').innerHTML = "<strong>" + "Índice de serviciabilidad (Δpsi): " + "</strong>" + recibepsi;
	var recibeconfi = $("#factorc option:selected").text();
	document.getElementById('txtConfi_rigid').innerHTML = "<strong>" + "Factor de confiabilidad: " + "</strong>" + recibeconfi;
	var recibeZr = document.getElementById('factorc').value;
	document.getElementById('txtZr_rigid').innerHTML = "<strong>" + "Desviación normal estándar (Zr): " + "</strong>" + recibeZr;
	var recibeSo = document.getElementById('destandar').value;
	document.getElementById('txtSo_rigid').innerHTML = "<strong>" + "Desviación estándar (So): " + "</strong>" + recibeSo;
	//FIN

	//Parametros de tráfico

	var recibeTMDA = document.getElementById('trf_tmda').value;
	document.getElementById('txtTMDA_rigid').innerHTML = "<strong>" + "Tráfico medio diario anual (TMDA): " + "</strong>" + recibeTMDA;
	var reciber = document.getElementById('trf_tasa_cre').value;
	document.getElementById('txt_r_rigid').innerHTML = "<strong>" + "Tasa de crecimiento vehicular (r): " + "</strong>" + reciber + " %";
	var recibePD = document.getElementById('trf_per_dis').value;
	document.getElementById('txtPD_rigid').innerHTML = "<strong>" + "Periodo de diseño: " + "</strong>" + recibePD + " años";
	var recibeD = document.getElementById('trf_direccionalidad').value;
	document.getElementById('txtD_rigid').innerHTML = "<strong>" + "Direccionalidad (D): " + "</strong>" + recibeD + " %";
	
	var recibeptt = document.getElementById('trf_pt').value;
	document.getElementById('txt_ptt_rigid').innerHTML = "<strong>" + "Serviciabilidad final (Pt): " + "</strong>" + recibeptt;
	var recibeEspesor = document.getElementById('trf_espesor').value;
	document.getElementById('txt_Espesor_rigid').innerHTML = "<strong>" + "Espesor (D): " + "</strong>" + recibeEspesor + " pulg";
	var recibeESALS = document.getElementById('calcesals').value;
	document.getElementById('txtESALS_rigid').innerHTML = "<strong>" + "Número de ejes equivalentes (ESAL´S): " + "</strong>" + recibeESALS + "";

	//FIN



	//Parámetros de subbase

	var recibepropsbase = $("#subbase-crc-td").text();
	if (recibepropsbase == "CBR") {
		var unidadsbase = "%";
	} else {
		var unidadsbase = "";
	}

	var recibepropvsbase = document.getElementById('subbase-crc').value;
	document.getElementById('txt_propiedad_subbase_rigid').innerHTML = "<strong>" + recibepropsbase + ": " + "</strong>" + recibepropvsbase + unidadsbase;
	var recibea3 = document.getElementById('subbasea2').value;
	document.getElementById('txt_a2_rigid').innerHTML = "<strong>" + "Coeficiente estructural (a2): " + "</strong>" + recibea3;
	var recibeMsb = document.getElementById('subbaseMb').value;
	document.getElementById('txtMb_rigid').innerHTML = "<strong>" + "Módulo resiliente (Msb): " + "</strong>" + recibeMsb + " psi";
	var recibecds = document.getElementById('calidaddrenaje').value;
	document.getElementById('txt_cd_subbase_rigid').innerHTML = "<strong>" + "Calidad del drenaje: " + "</strong>" + recibecds;
	var recibepss = document.getElementById('subbasehumedad').value;
	document.getElementById('txt_porcentajeHumedad_subbase_rigid').innerHTML = "<strong>" + "Porcentaje de exposición de humedad próximos a la saturación: " + "</strong>" + recibepss + " %";
	var recibem3 = document.getElementById('subbasem2').value;
	document.getElementById('txt_m2_rigid').innerHTML = "<strong>" + "Coeficiente de drenaje de subbase (m2): " + "</strong>" + recibem3;

	//FIN

	//Coeficiente de transferencia de carga
	var recibeBerma = document.getElementById('tipoberma').value;
	document.getElementById('txt_TipoBerma').innerHTML = "<strong>" + "Tipo de berma: " + "</strong>" + recibeBerma + "";
	var recibeCarga = document.getElementById('dispcarga').value;
	document.getElementById('txt_DispCarga').innerHTML = "<strong>" + "Dispositivo de carga: " + "</strong>" + recibeCarga + "";
	var recibePavimento = document.getElementById('tipopavimento').value;
	document.getElementById('txt_TipoPavimento').innerHTML = "<strong>" + "Tipo de pavimento: " + "</strong>" + recibePavimento + "";
	var recibeRango = document.getElementById('tcrango').value;
	document.getElementById('txt_Rango').innerHTML = "<strong>" + "Rango: " + "</strong>" + recibeRango + "";
	var recibeValor = document.getElementById('tcvalor').value;
	document.getElementById('txt_Valor').innerHTML = "<strong>" + "Valor seleccionado: " + "</strong>" + recibeValor + "";
	//FIN

	//Carpeta de Hormigón
	var recibeAgregado = document.getElementById('tipoagregado').value;
	document.getElementById('txt_TipoAgregado').innerHTML = "<strong>" + "Tipo de agregado: " + "</strong>" + recibeAgregado + "";
	var recibeResistencia = document.getElementById('fc').value;
	document.getElementById('txt_Resistencia').innerHTML = "<strong>" + "Resistencia a la compresión (f'c): " + "</strong>" + recibeResistencia + "";
	var recibeModuloRotura = document.getElementById('Sc').value;
	document.getElementById('txt_ModuloRotura').innerHTML = "<strong>" + "Módulo de rotura (Sc): " + "</strong>" + recibeModuloRotura + "";
	var recibeModuloElastico = document.getElementById('Ec').value;
	document.getElementById('txt_ModuloElastico').innerHTML = "<strong>" + "Módulo elástico del concreto (Ec): " + "</strong>" + recibeModuloElastico + "";

	//Parámetros de subrasante
	//Módulo de reacción K
	var recibeEspesorSubb = document.getElementById('espesorsubbase').value;
	document.getElementById('txt_EspesorK').innerHTML = "<strong>" + "Espesor de subbase (pulg): " + "</strong>" + recibeEspesorSubb + "";
	var recibeModuloResiSubrasante = document.getElementById('moduloresiliente').value;
	document.getElementById('txt_ModuloResiSubrasante').innerHTML = "<strong>" + "Módulo resiliente de subrasante (Mr): " + "</strong>" + recibeModuloResiSubrasante + "";
	var recibeModuloResiSubbase = document.getElementById('moduloresilientesubbase').value;
	document.getElementById('txt_ModuloResiSubbase').innerHTML = "<strong>" + "Módulo resiliente de subbase (Mb): " + "</strong>" + recibeModuloResiSubbase + "";
	var recibeModuloReaccion = document.getElementById('kredondeado').value;
	document.getElementById('txt_ModuloReaccion').innerHTML = "<strong>" + "Módulo de reacción (K): " + "</strong>" + recibeModuloReaccion + "";

	//Efecto de funación rígida
	var recibeProdundidad = document.getElementById('profrigida').value;
	document.getElementById('txt_Produndidad').innerHTML = "<strong>" + "Profundidad de fundación rigida (pulg): " + "</strong>" + recibeProdundidad + "";
	var recibeModuloReaccion1 = document.getElementById('kfrsubrasante').value;
	document.getElementById('txt_ModuloReaccion1').innerHTML = "<strong>" + "Módulo de reacción (Kfr): " + "</strong>" + recibeModuloReaccion1 + "";

	//Factor pérdida de soporte
	var recibeTipoSubbase = document.getElementById('materialsubbase1').value;
	document.getElementById('txt_TipoSubbase').innerHTML = "<strong>" + "Tipo de Subbase: " + "</strong>" + recibeTipoSubbase + "";
	var recibePerdidaRango = document.getElementById('tiposbrango').value;
	document.getElementById('txt_PerdidaRango').innerHTML = "<strong>" + "Rango de pérdida de soporte: " + "</strong>" + recibePerdidaRango + "";
	var recibePerdidaValor = document.getElementById('ly').value;
	document.getElementById('txt_PerdidaValor').innerHTML = "<strong>" + "Valor de la pérdida de soporte (L): " + "</strong>" + recibePerdidaValor + "";
	var recibeKCorregido = document.getElementById('Kcorr').value;
	document.getElementById('txt_KCorregido').innerHTML = "<strong>" + "Módulo de reacción corregido (Kcorr): " + "</strong>" + recibeKCorregido + "";

	//Módulo resiliente Mr
	var recibeCBR = document.getElementById('datosubrasante').value;
	document.getElementById('txt_CBR').innerHTML = "<strong>" + "CBR: " + "</strong>" + recibeCBR + "";
	var recibeModuloResiliente = document.getElementById('Modulor').value;
	document.getElementById('txt_ModuloResiliente').innerHTML = "<strong>" + "Módulo resiliente de subrasante (Mr): " + "</strong>" + recibeModuloResiliente + "";

	//Resultados
	var recibeEspesorLosa = document.getElementById('d').value;
	document.getElementById('txt_EspesorLosa').innerHTML = "<strong>" + "Tipo de berma: " + "</strong>" + recibeEspesorLosa + "";
	var recibeEspesorFinal = document.getElementById('dr').value;
	document.getElementById('txt_EspesorFinal').innerHTML = "<strong>" + "Dispositivo de carga: " + "</strong>" + recibeEspesorFinal + "";

	var caratula = document.getElementById("ReporteCaratula_rigid");
	var declaracion = document.getElementById("ReporteDeclaracion_rigid");

	var wme = window.open('', 'Print-Window');
	wme.document.open();

	wme.document.write('<html><head><style type="text/css"> @media print {@page {margin: 20mm 25mm 20mm 25mm;  }   }</style></head><body onload="window.print()" >' 
	+ caratula.innerHTML + '<p style = "page-break-after: always;"> &nbsp; </ p>' 
	+ declaracion.innerHTML + '<p style = "page-break-after: always;"> &nbsp; </ p>' 
	+ printme.innerHTML + '<p style = "page-break-after: always;"> &nbsp; </ p>' +printme0.innerHTML+'</body></html>');
	wme.document.close();
	document.write

	setTimeout(function () {
		wme.close();
	}, 10);

}

 function imprimir() {

	var printme = document.getElementById("Reporte_variables_resultados_rigid");
	var printme0 = document.getElementById("ReporteResultados_rigid");

	//DATOS DEL PROYECTO
	var recibenombre = document.getElementById('datoNombre').value;
	document.getElementById('txtNombre_rigid').innerHTML = "<strong>" + "Nombre del proyecto:  " + "</strong>" + recibenombre;

	var recibeubicacion = document.getElementById('datoUbicacion').value;
	document.getElementById('txtUbicacion_rigid').innerHTML = "<strong>" + "Ubicación del proyecto:  " + "</strong>" + recibeubicacion;

	var reciberuta = document.getElementById('datoRuta').value;
	document.getElementById('txtRuta_rigid').innerHTML = "<strong>" + "Ruta:  " + "</strong>" + reciberuta;

	var recibetramo = document.getElementById('datoTramo').value;
	document.getElementById('txtTramo_rigid').innerHTML = "<strong>" + "Tramo:  " + "</strong>" + recibetramo;

	var recibeDiseñador = document.getElementById('datoDiseñador').value;
	document.getElementById('txtDiseñador_rigid').innerHTML = "<strong>" + "Diseñador:  " + "</strong>" + recibeDiseñador;

	if((recibenombre === "")&&(recibeubicacion === "")&&(reciberuta === "")&&(recibetramo === "")&&(recibeDiseñador === "")){
		$(".datosProyect").hide();
	} else {
		$(".datosProyect").show();
	}
	//FINNNN
	
	//Parámetros de diseño
	 
	var recibepi = document.getElementById('pinicial').value;
	document.getElementById('txt_pi_rigid').innerHTML = "<strong>" + "Serviciabilidad inicial (pi): " + "</strong>" + recibepi;
	var recibepf = document.getElementById('pfinal').value;
	document.getElementById('txt_pf_rigid').innerHTML = "<strong>" + "Serviciabilidad final (pf): " + "</strong>" + recibepf;
	var recibepsi = document.getElementById('deltapsi').value;
	document.getElementById('txt_psi_rigid').innerHTML = "<strong>" + "Índice de serviciabilidad (Δpsi): " + "</strong>" + recibepsi;
	var recibeconfi = $("#factorc option:selected").text();
	document.getElementById('txtConfi_rigid').innerHTML = "<strong>" + "Factor de confiabilidad: " + "</strong>" + recibeconfi;
	var recibeZr = document.getElementById('factorc').value;
	document.getElementById('txtZr_rigid').innerHTML = "<strong>" + "Desviación normal estándar (Zr): " + "</strong>" + recibeZr;
	var recibeSo = document.getElementById('destandar').value;
	document.getElementById('txtSo_rigid').innerHTML = "<strong>" + "Desviación estándar (So): " + "</strong>" + recibeSo;
	//FIN

	//Parametros de tráfico
	var recibeTMDA = document.getElementById('trf_tmda').value;
	document.getElementById('txtTMDA_rigid').innerHTML = "<strong>" + "Tráfico medio diario anual (TMDA): " + "</strong>" + recibeTMDA;
	var reciber = document.getElementById('trf_tasa_cre').value;
	document.getElementById('txt_r_rigid').innerHTML = "<strong>" + "Tasa de crecimiento vehicular (r): " + "</strong>" + reciber + " %";
	var recibePD = document.getElementById('trf_per_dis').value;
	document.getElementById('txtPD_rigid').innerHTML = "<strong>" + "Periodo de diseño: " + "</strong>" + recibePD + " años";
	var recibeD = document.getElementById('trf_direccionalidad').value;
	document.getElementById('txtD_rigid').innerHTML = "<strong>" + "Direccionalidad (D): " + "</strong>" + recibeD + " %";
	
	var recibeptt = document.getElementById('trf_pt').value;
	document.getElementById('txt_ptt_rigid').innerHTML = "<strong>" + "Serviciabilidad final (Pt): " + "</strong>" + recibeptt;
	var recibeEspesor = document.getElementById('trf_espesor').value;
	document.getElementById('txt_Espesor_rigid').innerHTML = "<strong>" + "Espesor (D): " + "</strong>" + recibeEspesor + " pulg";
	var recibeESALS = document.getElementById('calcesals').value;
	document.getElementById('txtESALS_rigid').innerHTML = "<strong>" + "Número de ejes equivalentes (ESAL´S): " + "</strong>" + recibeESALS + "";
	if((recibeTMDA === "")&&(reciber === "")&&(recibePD === "")&&(recibeD === "")&&(recibeEspesor === "")){
		$(".datosESALS").hide();
	} else {
	$(".datosESALS").show();
}
	//FIN



	//Parámetros de subbase

	var recibepropsbase = $("#subbase-crc-td").text();
	if (recibepropsbase == "CBR") {
		var unidadsbase = "%";
	} else {
		var unidadsbase = "";
	}

	var recibepropvsbase = document.getElementById('subbase-crc').value;
	document.getElementById('txt_propiedad_subbase_rigid').innerHTML = "<strong>" + recibepropsbase + ": " + "</strong>" + recibepropvsbase + unidadsbase;
	var recibea3 = document.getElementById('subbasea2').value;
	document.getElementById('txt_a2_rigid').innerHTML = "<strong>" + "Coeficiente estructural (a2): " + "</strong>" + recibea3;
	var recibeMsb = document.getElementById('subbaseMb').value;
	document.getElementById('txtMb_rigid').innerHTML = "<strong>" + "Módulo resiliente (Msb): " + "</strong>" + recibeMsb + " psi";
	document.getElementById('print_PropiedadSubBase_rigid').innerHTML = "En la figura 1 se observa que con el valor correspondiente de " + recibepropsbase + " igual a " + recibepropvsbase + unidadsbase + " se traza una horizontal y se optienen los valores de coeficiente estructural a<sub>2</sub> igual a " + "<strong>" + recibea3 + "</strong>" + " y un módulo de resiliencia igual a " + "<strong>" + recibeMsb + " psi." + "</strong>";
	var recibecds = document.getElementById('calidaddrenaje').value;
	document.getElementById('txt_cd_subbase_rigid').innerHTML = "<strong>" + "Calidad del drenaje: " + "</strong>" + recibecds;
	var recibepss = document.getElementById('subbasehumedad').value;
	document.getElementById('txt_porcentajeHumedad_subbase_rigid').innerHTML = "<strong>" + "Porcentaje de exposición de humedad próximos a la saturación: " + "</strong>" + recibepss + " %";
	document.getElementById('explicacionDrenaje').innerHTML = "Para la determinación de este parámetro se emplea la tabla 2 la misma que está en función de la calidad del drenaje y el porcentaje de tiempo de exposición de la estructura del pavimento a nivel de humedades próximas a la saturación. En este caso la calidad del drenaje es " + recibecds + " y, el porcentaje de tiempo de exposición de la estructura es del " + recibepss  + "%," + " a partir de estos datos se ubica un rango de la tabla como se muestra a continuación."
	var recibem3 = document.getElementById('subbasem2').value;
	document.getElementById('txt_m2_rigid').innerHTML = "<strong>" + "Coeficiente de drenaje de subbase (m2): " + "</strong>" + recibem3;

	//FIN

	//Coeficiente de transferencia de carga
	var recibeBerma = document.getElementById('tipoberma').value;
	document.getElementById('txt_TipoBerma').innerHTML = "<strong>" + "Tipo de berma: " + "</strong>" + recibeBerma + "";
	var recibeCarga = document.getElementById('dispcarga').value;
	document.getElementById('txt_DispCarga').innerHTML = "<strong>" + "Dispositivo de carga: " + "</strong>" + recibeCarga + "";
	var recibePavimento = document.getElementById('tipopavimento').value;
	document.getElementById('txt_TipoPavimento').innerHTML = "<strong>" + "Tipo de pavimento: " + "</strong>" + recibePavimento + "";
	var recibeRango = document.getElementById('tcrango').value;
	document.getElementById('txt_Rango').innerHTML = "<strong>" + "Rango: " + "</strong>" + recibeRango + "";
	var recibeValor = document.getElementById('tcvalor').value;
	document.getElementById('txt_Valor').innerHTML = "<strong>" + "Valor seleccionado: " + "</strong>" + recibeValor + "";
	//FIN

	//Carpeta de Hormigón
	var recibeAgregado = document.getElementById('tipoagregado').value;
	document.getElementById('txt_TipoAgregado').innerHTML = "<strong>" + "Tipo de agregado: " + "</strong>" + recibeAgregado + "";
	var recibeResistencia = document.getElementById('fc').value;
	document.getElementById('txt_Resistencia').innerHTML = "<strong>" + "Resistencia a la compresión (f'c): " + "</strong>" + recibeResistencia + "";
	var recibeModuloRotura = document.getElementById('Sc').value;
	document.getElementById('txt_ModuloRotura').innerHTML = "<strong>" + "Módulo de rotura (Sc): " + "</strong>" + recibeModuloRotura + "";
	var recibeModuloElastico = document.getElementById('Ec').value;
	document.getElementById('txt_ModuloElastico').innerHTML = "<strong>" + "Módulo elástico del concreto (Ec): " + "</strong>" + recibeModuloElastico + "";

	//Parámetros de subrasante
	//Módulo de reacción K
	var recibeEspesorSubb = document.getElementById('espesorsubbase').value;
	document.getElementById('txt_EspesorK').innerHTML = "<strong>" + "Espesor de subbase (pulg): " + "</strong>" + recibeEspesorSubb + "";
	var recibeModuloResiSubrasante = document.getElementById('moduloresiliente').value;
	document.getElementById('txt_ModuloResiSubrasante').innerHTML = "<strong>" + "Módulo resiliente de subrasante (Mr): " + "</strong>" + recibeModuloResiSubrasante + "";
	var recibeModuloResiSubbase = document.getElementById('moduloresilientesubbase').value;
	document.getElementById('txt_ModuloResiSubbase').innerHTML = "<strong>" + "Módulo resiliente de subbase (Mb): " + "</strong>" + recibeModuloResiSubbase + "";
	var recibeModuloReaccion = document.getElementById('kredondeado').value;
	document.getElementById('txt_ModuloReaccion').innerHTML = "<strong>" + "Módulo de reacción (K): " + "</strong>" + recibeModuloReaccion + "";
	document.getElementById('print_moduloReaccion').innerHTML = "Para el trazado en primer lugar se ubica el valor correspondiente al espesor de subbase que en este caso es igual a " + recibeEspesorSubb + " plg," + " luego desde ese punto se traza una vertical hacia arriba y otra hacia abajo ubicando los valores de módulo elástico de subbase y módulo resiliente de subrasante respectivamente, en este caso el módulo elástico de subbase es igual a " + recibeModuloResiSubbase + " psi" + " y el módulo resiliente de subrasante es igual a " + recibeModuloResiSubrasante + " psi," + " a partir del punto ubicado en función del módulo resiliente se traza una horizontal hasta la línea de paso, para luego trazar desde la línea de paso una vertical, la cual debe interceptarse con una línea trazada horizontalmente desde el punto ubicado en función del módulo elástico de subbase, el punto que genera esa intersección es el valor correspondiente al módulo de reacción de subrasante que en este caso es igual a " + "<strong>" + recibeModuloReaccion + " pci." + "</strong>";
	var canvas_chartModuloReaction = document.getElementById('moduloReaccionCompuestoK');
		var URL_chartK = canvas_chartModuloReaction.toDataURL('image2/jpeg');
		document.getElementById('copy_carta_moduloReaccion').src = URL_chartK;

	//Efecto de funación rígida
	var recibeProdundidad = document.getElementById('profrigida').value;
	document.getElementById('txt_Produndidad').innerHTML = "<strong>" + "Profundidad de fundación rigida (pulg): " + "</strong>" + recibeProdundidad + "";
	var recibeModuloReaccion1 = document.getElementById('kfrsubrasante').value;
	document.getElementById('txt_ModuloReaccion1').innerHTML = "<strong>" + "Módulo de reacción (Kfr): " + "</strong>" + recibeModuloReaccion1 + "";
	document.getElementById('print_fundación').innerHTML = "Para el trazado se deben ubicar el valor correspondiente al módulo de resiliente que es igual a  " + recibeModuloResiSubrasante + " psi," + " luego trazar una vertical desde el punto correspondiente al módulo resiliente, hasta un punto que corresponda al valor de la profundidad de fundación que este caso es igual a " + recibeProdundidad + " pies," + " a partir de ese punto se traza una horizontal hasta ubicar el valor correspondiente al módulo de reacción el cual es igual a " + recibeModuloReaccion + "pci," + " y finalmente desde ese punto se traza una vertical hacia abajo hasta interceptar la horizontal correspondiente a los valores de módulo de reacción corregido por fundación rígida que en este caso es igual a " + "<strong>" + recibeModuloReaccion1 + " pci." + "</strong>";
	var canvas_chartFundacion = document.getElementById('KfundacionRigida');
		var URL_chartKfundacionRigida = canvas_chartFundacion.toDataURL('image3/jpeg');
		document.getElementById('copy_carta_fundacion').src = URL_chartKfundacionRigida;
		var funrigida = $("#funrigida")
    if (funrigida.is(":checked")) {
		$('.procesoFundacionRigida').show();
		var numFigura = 4
		var numEspesor = 5
		var usoK = document.getElementById('kfrsubrasante').value;
    } else {
		$('.procesoFundacionRigida').hide();
		var numFigura = 3
		var numEspesor = 4
		var usoK = document.getElementById('kredondeado').value;
    };

	//Factor pérdida de soporte
	var recibeTipoSubbase = document.getElementById('materialsubbase1').value;
	document.getElementById('txt_TipoSubbase').innerHTML = "<strong>" + "Tipo de Subbase: " + "</strong>" + recibeTipoSubbase + "";
	var recibePerdidaRango = document.getElementById('tiposbrango').value;
	document.getElementById('txt_PerdidaRango').innerHTML = "<strong>" + "Rango de pérdida de soporte: " + "</strong>" + recibePerdidaRango + "";
	var recibePerdidaValor = document.getElementById('valorLsoporte').value;
	document.getElementById('txt_PerdidaValor').innerHTML = "<strong>" + "Valor de la pérdida de soporte (L): " + "</strong>" + recibePerdidaValor + "";
	var recibeKCorregido = document.getElementById('Kcorr').value;
	document.getElementById('txt_KCorregido').innerHTML = "<strong>" + "Módulo de reacción corregido (Kcorr): " + "</strong>" + recibeKCorregido + "";
	
	
	document.getElementById('explicacionLS').innerHTML = "La corrección del módulo de reacción por perdida de soporte está en función del valor de perdida de soporte el cual está en un rango entre 0 y 3, para realizar esta corrección se emplea el ábaco de la figura " + numFigura
	document.getElementById('print_LS').innerHTML = "Para el trazado se debe ubicar el valor correspondiente al módulo de reacción en el eje horizontal, este valor es igual a  " + usoK + " pci," + " luego se traza una vertical hasta ubicar el valor correspondiente al factor de perdida de soporte el cual es igual a " + recibePerdidaValor + "," + " y finalmente se traza una horizontal hasta interceptar la vertical correspondiente a los valores de módulo de reacción corregido por pérdida de soporte que en este caso es igual a  " + "<strong>" + recibeKCorregido + " pci." + "</strong>";
	var canvas_chartPerdidaSoporteK = document.getElementById('perdidaSoporteK');
		var URL_chartPerdidaSoporteK = canvas_chartPerdidaSoporteK.toDataURL('image4/jpeg');
		document.getElementById('copy_carta_LS').src = URL_chartPerdidaSoporteK;
	document.getElementById('numFiguraLS').innerHTML = "Figura " + numFigura + ". Ábaco de diseño para el factor de pérdida de soporte"

	//Módulo resiliente Mr
	var recibeCBR = document.getElementById('datosubrasante').value;
	document.getElementById('txt_CBR').innerHTML = "<strong>" + "CBR: " + "</strong>" + recibeCBR + "";
	var recibeModuloResiliente = document.getElementById('Modulor').value;
	document.getElementById('txt_ModuloResiliente').innerHTML = "<strong>" + "Módulo resiliente de subrasante (Mr): " + "</strong>" + recibeModuloResiliente + "psi";
	var varsubr = parseFloat($('#datosubrasante').val());
    if ((varsubr < 7.2)) {
		document.getElementById('MrEcuacion').innerHTML = "Mr = 1500 * CBR"
		document.getElementById('MrProceso').innerHTML = "Mr = 1500 * " + "(" +recibeCBR+ "%) = " + recibeModuloResiliente + " psi"

        
    } else if ((7.2 <= varsubr) && (varsubr <= 20)) {
		document.getElementById('MrEcuacion').innerHTML = "Mr = 3000 * CBR"
		document.getElementById('MrProceso').innerHTML = "Mr = 3000 * " + "(" +recibeCBR+ "%) = " + recibeModuloResiliente + " psi"
        
    } else if ((20 < varsubr) && (varsubr <= 100)) {
		document.getElementById('MrEcuacion').innerHTML = "Mr = (4326 * Log(CBR^0.65))+241"
		document.getElementById('MrProceso').innerHTML = "Mr = (4326 * Log("+"(" +recibeCBR+ "%)"+"^0.65))+241 = " + recibeModuloResiliente + " psi"
        
        
	} 

	//Resultados
	var recibeEspesorLosa = document.getElementById('d').value;
	document.getElementById('txt_EspesorLosa').innerHTML = "<strong>" + "Tipo de berma: " + "</strong>" + recibeEspesorLosa + "";
	var recibeEspesorFinal = document.getElementById('dr').value;
	document.getElementById('txt_EspesorFinal').innerHTML = "<strong>" + "Dispositivo de carga: " + "</strong>" + recibeEspesorFinal + "";
	document.getElementById('explicacionEspesor').innerHTML = "El método gráfico permite determinar el espesor de la losa de hormigón con el ábaco que se ilustra en la figura " + numEspesor + ", el cual está en función de parámetros como el módulo de reacción de la subrasante (Mr), módulo elástico del hormigón (Ec), módulo de rotura del hormigón (S), coeficiente de transferencia de carga (J), coeficiente de drenaje (Cd), índice de serviciabilidad (Δpsi), confiabilidad (R), desviación estándar (So), número de ejes equivalentes (ESAL´S)."
	document.getElementById('print_Espesor').innerHTML = "Para el trazado de este ábaco se debe empezar por dos lados, y así la intersección de estos dos trazados darán como resultado el espesor de la losa de hormigón, el primer trazado se empieza ubicando el valor del módulo de reacción de la subrasante que en este caso es igual a " + recibeKCorregido + " pci," + " , luego se traza una vertical hasta ubicar el valor correspondiente al elástico del hormigón el cual es igual a " + recibeModuloElastico + " psi, se continua trazando una horizontal hasta el borde de la cuadricula, para luego trazar una diagonal ubicando el punto del módulo de rotura que es igual a " + recibeModuloRotura + " psi, este trazado se extiende hasta llegar a la línea de paso, se continua trazando una diagonal hacia el eje del coeficiente de transferencia de carga ubicando su valor que es igual a " + recibeValor + ", extendiendo el trazado hasta la línea de paso, desde este punto se traza otra diagonal que pase por el eje del coeficiente de drenaje ubicando el valor igual a " + recibem3 + ", y llegue hasta la siguiente línea de paso, finalmente se traza una diagonal que pasa por el eje del índice de serviciabilidad ubicando el valor igual a " + recibepsi + ", y llega al borde vertical de la cuadricula, a partir de la cual se traza una horizontal que debe interceptar el otro trazado. El segundo trazado empieza ubicando el valor correspondiente de confiabilidad el cual es igual a " + recibeconfi + ", luego se traza una diagonal que pase por el eje de la desviación estándar ubicando el valor igual a " + recibeSo + ", y llegue a la línea de paso, finalmente desde ese punto se traza una diagonal pasando por el eje de número de ejes equivalente ubicando un valor igual a " + recibeESALS + ", y que llegue hasta el borde horizontal de la cuadricula, a partir de este punto se traza una vertical hasta interceptar la horizontal trazada previamente, está intercepción da como resultado el valor del espesor el cual es igual a " + "<strong>" + recibeEspesorFinal + " plg." + "</strong>";
	document.getElementById('numFiguraEspesor').innerHTML = "Figura " + numEspesor + ". Ábaco de diseño para la estimación del espesor de la losa de hormigón"
	var canvas_chartEspesor = document.getElementById('espesorFinalD');
	var URL_chartEspesor = canvas_chartEspesor.toDataURL('image5/jpeg');
	document.getElementById('copy_carta_Espesor').src = URL_chartEspesor;


	var printme1 = document.getElementById("titulo_principal_reporte_rigid");

	var printme2 = document.getElementById("resultadosTrafico");
	var requivalenciaAux = $(printme2).find('#resultadoequivalencia').html(); //Guarda temporalmente
	$(printme2).find('#resultadoequivalencia').html('');
	printme2Txt = $(printme2).html();
	$(printme2).find('#resultadoequivalencia').html(requivalenciaAux); //Restaura div
	var tablasEquivalencia = $('<div></div>');
	var ntabla = 0;
	$('.item-trafico').each(function(i, item){
		var interpolacion = $(item).attr('value') * 1;
		if(interpolacion > 0){
			ntabla = ntabla + 1;
			var index = $(item).attr('index');
			var eje = $(item).attr('eje');
			var item = listaVehiculos[index];
			var data = item['data' + eje];
			var title = 'Tabla 1.' + ntabla + '. Interpolación ' + item.tipo + ' - Eje ' + eje;
			CargarTablaEquivalencia(tablasEquivalencia, data, title);
		}
	});

	var printme3 = document.getElementById("titulo_drenajeSubBase_reporte_rigid");
	var printme4 = document.getElementById("print_drenaje_Subbase_rigid");
	
	var printme5 = document.getElementById("titulo_graficaSubbase_reporte_rigid");
	var contmat = $("#subbasematerial").text();
	if (contmat == ("Subbase granular")) {
		var canvas_chartBase = document.getElementById('subBaseGranular');
		var URL_chartBase = canvas_chartBase.toDataURL('image1/jpeg');
		document.getElementById('copy_carta_subbase_rigid').src = URL_chartBase;
	} else if (contmat == ("Subbase tratada con cemento")) {
		var canvas_chartBase = document.getElementById('subBaseCemento');
		var URL_chartBase = canvas_chartBase.toDataURL('image1/jpeg');
		document.getElementById('copy_carta_subbase_rigid').src = URL_chartBase;
	} else if (contmat == ("Subbase tratada con asfalto")) {
		var canvas_chartBase = document.getElementById('subBaseBituminoso');
		var URL_chartBase = canvas_chartBase.toDataURL('image1/jpeg');
		document.getElementById('copy_carta_subbase_rigid').src = URL_chartBase;
	}

	

	

	var printme6 = document.getElementById("titulo_graficaSubRasante_reporte_rigid");
	var printme7 = document.getElementById("titulo_graficaEspesor_reporte");

	
/** 
	print_ModuloReaccionCompuesto
	var canvas_chartSubbase = document.getElementById('id del canvas procedimientos');
	var URL_chartSubbase = canvas_chartSubbase.toDataURL('image1/jpeg');
	document.getElementById('id imagen en reportes').src = URL_chartSubbase;	

var canvas_chartModuloElastico = document.getElementById('chart_moduloElastico');
	var URL_chartModuloElastico = canvas_chartModuloElastico.toDataURL('image1/jpeg');
	document.getElementById('copy_carta_ModuloElastico').src = URL_chartModuloElastico;

	var canvas_chartSN = document.getElementById('chartSN');
	var URL_canvas_chartSN = canvas_chartSN.toDataURL('image1/jpeg');
	document.getElementById('copy_carta_SN').src = URL_canvas_chartSN;

	var printme9 = document.getElementById("titulo_graficaModuloElastico_reporte");
	var printme10 = document.getElementById("titulo_graficaSN_reporte");

	var printme11 = document.getElementById("titulo_clcSN_reporte");
	var printme12 = document.getElementById("copySN");
	var printme13 = document.getElementById("titulo_clcEspesor_reporte");
	var printme14 = document.getElementById("copyEspesor");
	
	+ printme6.innerHTML + printme7.innerHTML + printme8.innerHTML + printme9.innerHTML + printme10.innerHTML + printme11.innerHTML + printme12.innerHTML + printme13.innerHTML + printme14.innerHTML 
	*/
	
	var caratula = document.getElementById("ReporteCaratula_rigid");
	var declaracion = document.getElementById("ReporteDeclaracion_rigid");
	var wme = window.open('', 'Print-Window');

	
	wme.document.write('<html><head>\
	<title>Impimir</title>\
	<style type="text/css"> \
	@media print {@page {margin: 20mm 25mm 20mm 25mm;  }   }\
	a:link {color:black; text-decoration: none} \
	a:visited {color:black; text-decoration: none} \
	a:active {color:black; text-decoration: none}\
	a:hover {color:black; text-decoration: none}\
	tr.info, td.info{background-color:#e8e8e8}\
	</style>\
	</head><body onload="window.print()" >' + caratula.innerHTML + '<p style = "page-break-after: always;"> &nbsp; </ p>' + declaracion.innerHTML + '<p style = "page-break-after: always;"> &nbsp; </ p>' + printme.innerHTML + '<p style = "page-break-after: always;"> &nbsp; </ p>' + printme0.innerHTML + '<p style = "page-break-after: always;"> &nbsp; </ p>' 
	+ printme1.innerHTML + printme2Txt + tablasEquivalencia.html() + printme3.innerHTML + printme4.innerHTML + printme5.innerHTML + printme6.innerHTML + printme7.innerHTML 
	+ '</body></html>');

	wme.document.close();
	

	setTimeout(function () {
		wme.close();
	}, 10); 

}