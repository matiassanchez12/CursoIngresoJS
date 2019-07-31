function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	
	//Hasta que no se cumpla esta condicion, van a repetirse estas instrucciones.
	//si nro no es mayor a 9 las instrucciones no se repiten.
	
	while (numero > 10){

		alert ("el numero es incorrecto.");

		numero = prompt("Desea ingresar otro numero ?");
	}
	
	alert ("La respuesta es correcta: 1) aparecera el numero en pantalla, o 2)si lo desea se saldra el programa");

	document.getElementById("Numero").value = numero;
	
}//FIN DE LA FUNCIÓN