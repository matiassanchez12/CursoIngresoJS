function mostrar()
{
    var edad = parseInt(document.getElementById("edad").value);

    adolescente = edad >= 13 && edad <= 17;

    if (! adolescente) {
        alert ("usted no es un adolescente")
    }

}//FIN DE LA FUNCIÓN