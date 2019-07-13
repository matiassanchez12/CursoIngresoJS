function mostrar()
{
    var edad;

    edad = document.getElementById("edad").value;

    adulto = edad > 18;

    niño = edad < 13;

    adolescente = edad <= 17 && edad >= 13;

    if (adolescente){
        alert ("usted es un adolescente");
    }
   if (adulto){
       alert ("usted es un adulto");
    }
    if (niño){
        alert ("usted es un niño");
    }
}//FIN DE LA FUNCIÓN