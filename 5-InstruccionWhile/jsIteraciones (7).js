function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	
	do {
		
	}
	while(respuesta != 'no')
	{
		if(!confirm("Desea seguir escribiendo numeros?"))
		{
			respuesta = 'no';
		}
		else
		{
		acumulador = acumulador + parseInt(prompt('Escriba un numero'));
		contador++;
		}
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN