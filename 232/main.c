#include <stdio.h>
#include <stdlib.h>
#include "aritmeticas.h"

int main()
{
   int edad = pedirEntero("Ingrese edad:",1,100);
   int legajo = pedirEntero("Ingrese legajo",0,2000);
   int nota = pedirEntero ("Ingrese nota",1,10);
   int documento = pedirEntero ("Ingrese documento",0,10000);

   printf("%d--%d--%d--%d\n\n", edad, legajo, nota, documento);
   return 0;
}
