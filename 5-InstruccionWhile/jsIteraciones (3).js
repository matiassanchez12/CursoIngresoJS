function mostrar()
/*{

var clave;

var respuesta = prompt ("desea ingresar clave?");

    while (respuesta == "si" ){

        clave = prompt("ingrese el número clave.");

        if (clave == "utn750"){
        alert ("la clave es correcta");
        respuesta = prompt ("desea salir? escriba - salir - .");
        }
        else {
        alert ("la clave es incorrecta");
        respuesta = prompt("desea intentar denuevo?");
        }

    }
} //FIN DE LA FUNCIÓN

/*
{
    var clave;
    var s;
    
    s = prompt("desea introducir clave? responda con si o no.");

    while (s == "si") { 
        
        clave = prompt ("Ingrese su clave : ");
    
        if (clave == "utn750"){
            alert ("la clave es correcta.");
            }
        else {
             alert ("la clave es incorrecta.");
            }
        s = prompt ("denuevo?");
     }
} 

*/
{
var clave;

    clave = prompt ("ingresar clave:");
    if (clave == "utn750"){
        alert ("correcta");
    }
    else {
        alert ("incorrecta");
    }
    while (clave == "utn750") { 

        clave = prompt ("desea ingresar otra vez");
    }

}
