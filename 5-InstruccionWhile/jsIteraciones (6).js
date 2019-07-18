function mostrar()
{
	var numero;
	var contador=0;
	var acumulador=0;
	var suma;
	var prom;


	while (contador < 5 ) {
	
	numero = parseInt (prompt("Ingrese numero: ")) //numero que
												   //ingresa				
	suma = suma + numero ;

	contador = contador + 1; 
	
	prom = suma / 5;
	}

document.getElementById('suma').value= suma;
document.getElementById('promedio').value= prom;

}//FIN DE LA FUNCIÓN