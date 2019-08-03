function mostrar()
{
    var letra;
    var numero;
    var seguir = true;
    var contPares = 0;
    var contImpares = 0;
    var contCeros = 0;
    var contPos = 0;
    var acumPos = 0;
    var promPos;
    var acumNeg = 0;
    var numMenor;
    var letraMenor;
    var numMayor;
    var letraMayor;
    var flag = 0;

    while (seguir == true)
    {
       
        numero = parseInt (prompt ("Ingrese un numero entre -100 y 100: "));

        while (numero <= -100 || numero >= 100 || isNaN(numero))
        {
            numero = parseInt (prompt ("Error. Reingrese el numero entre -100 y 100: "))
        }

    
        letra = prompt ("Ahora ingrese una letra: ");

        while (letra.length > 1)
        {
            letra = prompt ("Ingrese UNA sola letra");
        }
        
        if (numero > 0){ 
        acumPos = acumPos + numero;
        contPos ++;
        }
        else 
        {
        acumNeg = acumNeg + numero;
        }
        
        if (numero % 2 == 0)
        {
            contPares ++;
        }
        else 
        {
            contImpares ++;
        }
       
        if (numero == 0)
        {
            contCeros ++;
        }

        if (numero > numMayor || flag == 0)
        {
            numMayor = numero;
            letraMayor = letra;
        
        }
        if (numero < numMenor || flag == 0)
        {
            numMenor = numero;
            letraMenor = letra;
            flag = 1;
        }

        seguir = confirm ("Seguir ingresando numeros ? : ");
    }

        if (contPos > 0)
        { 
        promPos = acumPos / contPos;        
        }
        else
        {
        promPos = "No hay positivos.";
        }
        
    document.write ("a) La cantidad de números pares : " + contPares + "<br>");
    document.write ("b) La cantidad de números impares : " + contImpares + "<br>");
    document.write ("c) La cantidad de ceros: " + contCeros  + "<br>");
    document.write ("d) El promedio de todos los números positivos ingresados : " + promPos + "<br>");
    document.write ("e) La suma de todos los números negativos: " + acumNeg + "<br>");
    document.write ("f) El número máximo es: " + numMayor + "y su letra es:" + letraMayor + "<br>");
    document.write ("f) El número minimo es: " + numMenor + "y su letra es:" + letraMenor + "<br>");
}
/*
a) La cantidad de números pares.
b) La cantidad de números impares. 
c) La cantidad de ceros. 
d) El promedio de todos los números positivos ingresados. 
e) La suma de todos los números negativos. 
f) El número y la letra del máximo y el mínimo.
*/