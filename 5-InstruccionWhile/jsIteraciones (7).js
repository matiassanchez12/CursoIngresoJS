function mostrar() 
/*{
	var acumulador;
	var respuesta;
	var numero;

	respuesta = prompt("Desea introducir un numero? responda con s/n.");

	while (respuesta == "s") 
	{
		numero = parseInt(prompt("introduzca un numero"));

		acumulador = acumulador + numero;

		respuesta = prompt("desea introducir otro numero? nuevamente: presione s para si o n para no");
	}

	 document.getElementById("suma") = acumulador 
}

*/
{				
	var num;
	var contador = 0;
	var acumulador = 0;
	var promedio;
	var respuesta;
	
	respuesta = prompt ("desea ingresar un numero?")
	while (respuesta == "s"){

		num = parseInt(prompt("Ingrese un numero: "));

		contador = contador + 1;

		acumulador = acumulador + num;

		respuesta = prompt ("desea escribir otro numero? escriba s/n: ");

	}

	document.getElementById("suma").value = acumulador;
	document.getElementById("promedio").value = acumulador / contador;
}	
