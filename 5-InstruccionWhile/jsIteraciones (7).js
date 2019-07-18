function mostrar()
{
	var numero;
	var acumulador = 0 ;
	var contador = 0;
	var seguir = "s"; 

	while (seguir == "s"){

		numero = parseInt (prompt("Ingrese un numero: "));

		while (isNaN(numero)){
			alert ("eso no es un numero");
			numero = parseInt(prompt ("ingrese un numero: "));
		}
		acumulador = acumulador + numero;
		
		contador = contador + 1;

		seguir = prompt ("quiere ingresar otro numero: responda con S o N");
	}
	document.getElementById("suma").value = acumulador;
	document.getElementById("promedio").value = acumulador / contador; 
}