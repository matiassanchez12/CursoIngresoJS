function mostrar()
{
//tomo la edad  
    var edad = parseInt(document.getElementById("edad").value);

    var mayor = edad >= 18;

    if (mayor) {
        alert ("usted es mayor")
    }
        else {
            alert ("usted es menor")
        }

}//FIN DE LA FUNCIÓN