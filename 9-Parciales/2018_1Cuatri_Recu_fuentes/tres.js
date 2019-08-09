function mostrar()
{
    var precio;
    var descuento;
    var precioFinal;
    
    precio = parseInt (prompt("Ingrese el precio: "));
    descuento = parseInt (prompt ("Ingrese el descuento: "));

    descuento = (descuento / 100)*precio;

    precioFinal = precio - descuento;

    document.getElementById("elPrecioFinal").value = precioFinal;
}
