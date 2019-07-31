function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';

	while(respuesta != 'no')
	{
		if(confirm("Desea escribir numeros"))
		{
			var numero = parseInt(prompt("Ingrese un numero"));
			if(numero<0)
			{
				negativo = negativo * numero; 
			}
			else
			{
				positivo = positivo + numero;
			}
			contador++;
		}else
		{
			respuesta =	'no';
		}

	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN