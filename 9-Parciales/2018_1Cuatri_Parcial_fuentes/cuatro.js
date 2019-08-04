function mostrar()
{
    var numUno;
    var numDos;
    var resta;
    var suma;

    numUno = parseInt (prompt ("Ingrese el primer numero :"));
    numDos = parseInt (prompt ("Ingrese el segundo numero :"));

    if (numUno == numDos)
    {
        alert ("los numeros :" + numUno + " y " + numDos + " Son iguales");
    }
    else if (numUno > numDos)
    {
        resta = numUno - numDos;
        alert ("Se hizo una resta con resultado :" + resta);    
    }
    else 
    {
        suma = numUno + numDos;
        
        if (suma > 10)
        {
            alert ("la suma es : " + suma + " y supero el 10. ");
        }
        else {
            alert ("Se hizo una suma con resultado : " + suma);
        }
    }
}