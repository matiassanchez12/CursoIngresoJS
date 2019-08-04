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

        letra = prompt("Ingrese una letra: ");
        while(letra.length > 1 || letra < "a" || letra > "z" )
        {
            letra = prompt("Error. Ingrese una letra de la -a- a la -z-(en minuscula): ");
        }
        
        if (numero > 0)
        { 
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

        if (flag == 0 || numero > numMayor)
        {
            numMayor = numero;
            letraMayor = letra;
        
        }
        if (flag == 0  || numero < numMenor)
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
    document.write ("d) El promedio de todos los números positivos ingresados : " + promPos.toFixed(2) + "<br>");
    document.write ("e) La suma de todos los números negativos: " + acumNeg + "<br>");
    document.write ("f) El número máximo es: " + numMayor + "y su letra es:" + letraMayor + "<br>");
    document.write ("h) El número minimo es: " + numMenor + "y su letra es:" + letraMenor + "<br>");
}
/*
a) La cantidad de números pares.
b) La cantidad de números impares. 
c) La cantidad de ceros. 
d) El promedio de todos los números positivos ingresados. 
e) La suma de todos los números negativos. 
f) El número y la letra del máximo y el mínimo.
*//*
function mostrar()
{
    var continuar = true;
    var contador = 0;
    var cantPares = 0;
    var cantImpares = 0;
    var cantCeros = 0;
    var totalNegativos = 0;
    var totalPositivos = 0;
    var cantidadPositivos = 0;
    var numeroMaximo = -9999;
    var numeroMinimo = 9999;
    var letraMaximo = '';
    var letraMinimo = '';
    while(continuar == true)
    {
        var numero = parseInt(prompt("Ingrese un numero entre -100 y 100"));
        while(!(numero >= -100 && numero <=100))
        {
            numero = parseInt(prompt("Ingrese un numero VÀLIDO entre -100 y 100"));
        }
        var letra = prompt("Ingrese una letra");
        while(letra.length>1)
        {
            letra = prompt("Ingrese SOLO una letra");
        }
        if(numero == 0)
        {
            cantCeros++;
        }
        else if(numero > 0)
        {
            totalPositivos = totalPositivos+numero;
            cantidadPositivos = cantidadPositivos+1;
        }
        else{
            totalNegativos = totalNegativos + numero;
        }
        if(numero %2 == 0)
        {
            cantPares = cantPares + 1;
        }
        else
        {
            cantImpares = cantImpares +1;
        }
        if(numero>numeroMaximo)
        {
            numeroMaximo = numero;
            letraMaximo = letra;
        }
        else if(numero<numeroMinimo)
        {
            numeroMinimo = numero;
            letraMinimo = letra;
        }
        contador++;
        continuar = confirm("Desea continuar ingresando numeros?");
    }
    document.writeln(
    "Cantidad de numeros pares: "+cantPares,
    "Cantidad de numeros impares:" + cantImpares,
    "La cantidad de ceros:" +cantCeros,
    "Promedio de positivos: "+ totalPositivos / cantidadPositivos,
    "Total de los negativos: "+ totalNegativos,
    "Numero màximo:"+numeroMaximo+" ; Letra del màximo"+letraMaximo,
    "Numero minimo:"+numeroMinimo+" ; Letra del minimo"+letraMinimo

    )

}*/