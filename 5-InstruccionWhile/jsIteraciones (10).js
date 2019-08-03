/*function mostrar()
{
	var contador=0;
	var negativos = 0;
	var positivos = 0;
	var cPositivos = 0;
	var cNegativos = 0;
	var cCeros = 0;
	var cPares = 0;
	var pPositivos = 0;
	var pNegativos = 0;
	var diferencia = 0;
	
	var respuesta="si";

	while(respuesta!="no")
	{
		if(confirm("Desea ingresar un numero"))
		{
			var numero = parseInt(prompt("Ingrese un numero"));
			if(numero < 0)
			{
				negativos = negativos + (numero)
				cNegativos++;
			}
			else if(numero > 0)
			{
				positivos = positivos + numero;
				cPositivos++;
			}	
			else if(numero == 0)
			{
				cCeros++;
			}
			else if(numero%2 == 0)
			{
				cPares = cPares + 1;
			}	
			contador++;
		}
		else
		{
			respuesta = 'no';
		}
	}	
	pPositivos = positivos / cPositivos;
	pNegativos = isNaN(negativos / cNegativos)? 0:negativos/cNegativos ;
	diferencia = positivos-(negativos);

	document.writeln("1-Suma de los negativos:"+negativos,"\n2-Suma de los positivos:"+positivos,"\n3-Cantidad de positivos:"+cPositivos,"\n4-Cantidad de negativos:"+cNegativos,"\n5-Cantidad de ceros:    "+cCeros,"\n6-Cantidad de numeros pares:"+ cPares,"\n7-Promedio de positivos:"+pPositivos,"\n8-Promedio de negativos:"+pNegativos,"\n9-Diferencia de negativos y positivos:"+diferencia);

}//FIN DE LA FUNCIÓN
*//*
function mostrar() {


	var acumPositivos = 0;
	var contadorPos = 0;
	var acumNegativos = 0;
	var contNegativos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var promPos = 0;
	var promNeg = 0;
	var diferencia;
	var numero;
	var seguir;

	do {

		numero = parseInt(prompt("Ingrese un numero: "));

		if ( numero > 0 ) {
			// este es el bloque de los positivos
			acumPositivos = acumPositivos + numero;
			contadorPos++;

		} else if (  numero < 0 ) {
			// este es el bloque de los negativos
			acumNegativos += numero;
			contNegativos++;

		}
		else { 
			// este es el bloque de los ceros
			contadorCeros++;

		}

		// aca me fijo si el numero es par
		if( numero % 2 == 0){
			// aca hago lo que tengo que hacer si el numero es par
			contadorPares++;

		}

		seguir = prompt("Quiere ingresar otro numero?");
	} while (seguir == 's');


	// aca hago las cosas que tengo que hacer una sola vez por eso lo hago afuera de la repetitiva

	if(contadorPos != 0){
	promPos = acumPositivos / contadorPos;
	}

	if( contNegativos != 0){
	promNeg = acumNegativos / contNegativos;
	}

	diferencia = contadorPos - contNegativos;


	document.write("1-Suma de los negativos: " + acumNegativos + "<br>");
	document.write("2-Suma de los positivos: " + acumPositivos + "<br>");
	document.write("3-Cantidad de positivos: " + contadorPos + "<br>");
	document.write("4-Cantidad de negativos: " + contNegativos + "<br>");
	document.write("5-Cantidad de ceros: " + contadorCeros + "<br>");
	document.write("6-Cantidad de números pares: " + contadorPares + "<br>");
	document.write("7-Promedio de positivos: " + promPos + "<br>");
	document.write("8-Promedios de negativos: " + promNeg + "<br>");
	document.write("9-Diferencia entre positivos y negativos: " + diferencia + "<br>");






}//FIN DE LA FUNCIÓN*/
function mostrar() {
	var numero;
	var seguir = "s";
	var acumPositivos=0;
	var acumNegativos=0;
	var contPositivos=0;
	var contNegativos=0;
	var contCeros=0;
	var contPares=0;
	var promPositivos;
	var promNegativos;
	var diferenciaPosNeg;

	while (seguir == "s"){

	numero = parseInt(prompt("ingrese un numero: "));

	if (numero > 0){

		acumPositivos = acumPositivos + numero;
		contPositivos = contPositivos + 1;
	}
	else if (numero < 0){

		acumNegativos = acumNegativos + numero;
		contNegativos = contNegativos + 1;
	}
	else {
		contCeros = contCeros + 1;
	}
		
	if ( numero % 2 == 0){
		contPares = contPares + 1;
	}

	seguir = prompt ("seguir ?");
}

	if (contPositivos != 0)
	{
	promPositivos = acumPositivos / contPositivos;
	}
	else {
		promPositivos = "No existe promedio para positivos."
	}
	if (contNegativos != 0)
	{
	promNegativos = acumNegativos / contNegativos;
	}
	else {
	promNegativos = "No existe promedio para Negativos."
	}

	diferenciaPosNeg = acumPositivos - (-acumNegativos); 

	document.write ("1-Suma de los negativos :" + acumNegativos + "<br>");
	document.write("2-Suma de los positivos:"+ acumPositivos + "<br>"); 
	document.write("3-Cantidad de positivos:"+ contPositivos + "<br>"); 
	document.write("4-Cantidad de negativos:"+ contNegativos + "<br>");
	document.write("5-Cantidad de ceros:"+ contCeros + "<br>");
	document.write("6-Cantidad de números pares:"+ contPares + "<br>"); 
	document.write("7-Promedio de positivos:"+ promPositivos + "<br>");
	document.write("8-Promedios de negativos:"+ promNegativos + "<br>");
	document.write("9-Diferencia entre positivos y negativos, (positvos-negativos):"+ diferenciaPosNeg + "<br>");
}