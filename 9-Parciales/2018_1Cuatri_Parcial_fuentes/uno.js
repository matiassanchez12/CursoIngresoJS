
function mostrar()
{
    var ancho;
    var largo; 
    var perimetro;

    ancho = parseInt(prompt ("ingrese el ancho : "));
    largo = parseInt(prompt ("ingrese el largo : "));

    perimetro = ancho * 2 + largo * 2;

    alert ("el perimetro del rectangulo es :" + perimetro);
}
