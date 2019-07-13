function mostrar()
{
    var num1, num2, suma, dividir;

    num1 = parseInt (prompt ("ingrese un numero : "));
    num2 = parseInt (prompt ("ingrese otro numero: "));
    
    if (num1 == num2){
        alert ("los numeros : " + num1 + " y " + num2 + " son iguales.");
    }
    else{
        if (num1 > num2){ //son distintos
        dividir = num1 / num2;
        alert ("esto es una division : " + dividir);
        }
        else{ //son distintos
        suma = num1 + num2;
        }
        if (suma < 50 ){ //resultado, si es menor a 50
        alert ("la suma es : " + suma + " y es menor a 50.");
    }
    }
}