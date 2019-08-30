
#include "aritmeticas.h"

int pedirEntero(char msj[], int min, int max)
{
    int unNumero;
    printf("%s", msj);
    scanf ("%d", &unNumero);

    while (unNumero<min || unNumero>max)
    {
        printf("ERROR, %s", msj);
        scanf ("%d", &unNumero);
    }

  return unNumero;

}
