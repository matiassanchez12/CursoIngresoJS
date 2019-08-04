function mostrar()
{
    var marca;
    var peso;
    var temperatura;
    var seguir = true;
    var contTempPar = 0;
    var contMasFrio = 0;
    var promedioPeso;
    var pesoMax;
    var producPesado;
    var pesoMin;
    var producLiviano;
    var acumPeso = 0;
    var contPeso = 0;
    var flag = 0;

    while (seguir == true)
    {

        marca = prompt ("Ingrese marca del producto: ");
        while (marca < "a" || marca > "z")
        {
            marca = prompt("Ingrese denuevo el productor: ");
        } 

        peso = parseInt (prompt ("ingrese el peso entre 1 y 100: "));
        while (peso < 1 || peso > 100 || isNaN (peso))
        {
            peso = parseInt (prompt ("Error.Debe ingresar el peso entre 1 y 100: "));
        }
        acumPeso = acumPeso + peso;
        contPeso ++;

        temperatura = parseInt (prompt ("ingrese una temperatura entre -30 y 30: "));
        while (temperatura < -30 || temperatura > 30 || isNaN (temperatura))
        {
            temperatura = parseInt (prompt ("Reingrese el peso entre que debe ser entre -30 y 30: "));
        }

        if (temperatura % 2 == 0)
        {
            contTempPar ++;
        }
        if (flag == 0 || peso > pesoMax )
        {                      
            pesoMax = peso;
            producPesado = marca;
        }
        if (flag == 0 || peso < pesoMin) 
        {
            pesoMin = peso;
            producLiviano = marca;
            flag = 1;
        }
        if (temperatura < 0 )
        {
            contMasFrio ++;
        }   

    seguir = confirm ("Continuar ingresando productos?: ");
    }
    promedioPeso = acumPeso / contPeso;

    document.write ("a) La cantidad de temperaturas pares: " + contTempPar + "<br>");
    document.write ("b) La marca del producto más pesado: " + producPesado + "<br>");
    document.write ("c) La cantidad de productos que se conservan a menos de 0 grados: " + contMasFrio + "<br>");
    document.write ("d) El promedio del peso de todos los productos: " + promedioPeso + "<br>");
    document.write ("f) El peso máximo es: " + pesoMax + "y el mínimo :" + pesoMin +"<br>");
}
/*Bienvenidos. 
Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar), 
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) La marca del producto más pesado 
c) La cantidad de productos que se conservan a menos de 0 grados. 
d) El promedio del peso de todos los productos.	
f) El peso máximo y el mínimo.
*/
