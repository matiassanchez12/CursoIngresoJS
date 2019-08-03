function mostrar()
{
    var nota;
    var sexo;
    var acum = 0;
    var notaBaja = 0;
    var promNotas;
    var sexoBaja;
    var notaAlta = 0;
    var flag = 0;

    for (var i = 0; i < 5; i ++) {

        nota = parseInt(prompt("Ingrese nota: "));

        while (nota < 0 || nota > 10 || isNaN(nota)){
            nota = parseInt(prompt("Incorrecto . Reingrese nota: "))
        }
        acum = acum + nota;

        sexo = prompt ("Ingrese el sexo: ");

        while (!(sexo == "f" || sexo == "m")){
            sexo = prompt ("Error. Ingrese denuevo el sexo: ");
        
        }
        if (nota < notaBaja || flag == 0){
            notaBaja = nota;

            sexoBaja = sexo;

            flag = 1;
        }
        if (nota >= 6 && sexo == "m"){
            notaAlta ++;
        }
    }
        prom = acum / 5;

        alert ("El promedio de notas es : " + prom);
        alert ("La nota mas baja es y el sexo es : " + notaBaja + " y " + sexoBaja);
        alert ("La cantidad de notas mayores a 6 de varones son :" + notaAlta );
}
