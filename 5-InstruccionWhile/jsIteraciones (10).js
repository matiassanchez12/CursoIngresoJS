function mostrar()
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