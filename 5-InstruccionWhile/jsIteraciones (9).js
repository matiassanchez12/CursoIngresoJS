/*function mostrar()
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
*/
function mostrar()
{
	var seguir = "s";
	var numero;
	var min = 0;
	var max = 0;
	var flag = 0;


	do{		
		numero = parseInt(prompt ("ingrese un numero"));
			if (numero > maximo || flag == 0){
				max = numero;
			}
			if (numero < minimo || flag == 0){
				min = numero;

				flag = 1;
			}
			seguir = prompt ("quiere ingresar otro numero ? ");
	}	
		while (seguir == "s"){
			document.getElementById("maximo").value = max;

			document.getElementById("minimo").value = min;

		}
}		