function mostrar()
/*

var sexo = prompt("ingrese f ó m .");
 

while ((sexo != "f" ) || (sexo != "m")){
    
    sexo = prompt ("ingrese f o m .gracias");

}


document.getElementById('Sexo').value=sexo;

}*/ //FIN DE LA FUNCIÓN
{

    var sexo;   // Valor inicial que permite entrar en el bucle

   sexo = prompt ("Introduzca un sexo. f: femenino / m: masculino");
    // mientras sexo sea igual a f o a m, hacer esto, mientras no lo sea no hacer nada . 

   while (!((sexo == "f") || (sexo == "m"))){
    
    alert (" el sexo es incorrecto");

    sexo = prompt ("introduzca f o m.")

   }


}