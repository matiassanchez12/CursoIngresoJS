function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	
	//numero = numero > 0 && numero < 9;	
	//mientras no pase esto, van a pasar estas instrucciones y se van a cumplir hasta que pase. 
	while (numero > 9){

		numero = prompt ("ingrese un número entre 0 y 10.");
	}
	
	document.getElementById("Numero").value = numero;
	
}//FIN DE LA FUNCIÓN*/
{
	var num;

	
		num = prompt ("ingrese un numero entre 0 y 9: ");
		
		while (isNaN(num) || (num<0 || num>10)){
			num = prompt ("ingresar denuevo ?");

	}


}