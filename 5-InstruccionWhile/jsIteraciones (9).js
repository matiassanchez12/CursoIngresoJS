function mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';
	var minimo = 0;
	var maximo = 0;
	while(respuesta!='no')
	{
		if(confirm("Desea ingresar numeros?"))
		{
			var numero = parseInt(prompt("Ingrese el numero"));
			if(numero < minimo){
				minimo = numero;
			}
			if(numero>maximo)
			{
				maximo = numero;
			}
			contador++;
		}else
		{
			respuesta = 'no';
		}
	
	}

	document.getElementById("minimo").value = minimo;
	document.getElementById("maximo").value = maximo;

}//FIN DE LA FUNCIÓN