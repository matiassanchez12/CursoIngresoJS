function mostrar()
{
    var edad, estadocivil;

    edad = document.getElementById("edad").value;
    
    estadocivil = document.getElementById("estadoCivil").value;

    if (edad >= 18 && estadocivil == "Soltero"){
        alert ("usted es soltero y es mayor")
    }
 
}//FIN DE LA FUNCIÓN