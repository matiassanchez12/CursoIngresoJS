#include <stdio.h>
#include <stdlib.h>
#include "aritmeticas.h"

int factorial (int);

int main()
{
    int resultado;

    resultado= factorial (13);

    printf("El factorial es: %d", resultado);
   return 0;
}

int factorial (int numero)
{
    int resultado;

    if (numero == 0)
    {
        resultado = 1;
    }
    else
    {
        resultado = numero * factorial(numero-1);
    }

    return resultado;
}
