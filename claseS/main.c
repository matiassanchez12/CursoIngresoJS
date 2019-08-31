#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#include "misFunciones.h"
#include <stdio.h>

int num1;
int num2;
int operacion;
{

num1 = PedirNumero("primer numero");
num2 = PedirNumero("segundo numero");
operacion = PedirNumero("operacion");

if(calculadora(num1,num2,operacion))


int numero =777;
porValor(numero);
printf("por valor es :%d", numero);
porPuntero(numero);
printf ("por referencia es: %d", numero);

return 0;
}
void porValor(int numero)
{
    numero = 222;
}
void porPuntero(int *numero)
{
    *numero = 333;
}
int dividir(int dividendo, int divisor, int *respuesta)
{
    int sePudo = 1;
    if (divisor != 0)
    {
        *respuesta = dividendo / divisor;
    }else
    {
         sePudo = 0;
    }
     return sePudo;
}

