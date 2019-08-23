#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>

int main()
{
int edad;
int edadA;
int masVieja=0;
int masJoven=0;
int flagPersonaJoven=0;
int flagPetiso=0;
float altura;
float mayorAltura=0;
float mAltura=0;
float alturaJoven;
int masBajo;
char sexoA;
char sexo;
char sexoAlto;
char continuar = 's';
float promedioEdades;
int contadorDePersonas=0;
int acumuladorDeEdades=0;

    while(continuar == 's')
    {
    printf("\n Ingrese edad:");
    scanf("%d", &edad);
    fflush(stdin);

     while(edad<0||edad>110)
    {
        printf("Reingrese la edad: ");
        scanf("%d", &edad);
        fflush(stdin);
    }

    printf("\n Ingrese altura:");
    scanf("%f", &altura);
    fflush(stdin);

    while(altura<1||altura>2)
    {
        printf("Reingrese la altura: ");
        scanf ("%f", &altura);
        fflush(stdin);
    }

    printf("\n Ingrese sexo:");
    scanf("%c", &sexo);
    fflush(stdin);

    while(sexo!='f'&&sexo!='m')
    {
        printf("Reingrese el sexo f o m: ");
        scanf ("%c", &sexo);
        fflush(stdin);
    }

    printf("\n Ingrese s/n:");
    scanf("%c", &continuar);
    fflush(stdin);

    if(sexo=='f'&&edad>masVieja)
    {
    masVieja=edad;
    mayorAltura=altura;
    }
    else
    {
        if (flagPetiso == 0||masBajo<altura)
        {

        }
    }

    if(flagPersonaJoven==0||edad<masJoven)
    {
    masJoven=edad;
    alturaJoven=altura;
    flagPersonaJoven=1;
    }
    if(altura>mAltura)
    {
    mAltura=altura;
    sexoA=sexo;
    }
    }

    printf ("la altura de la persona mas joven es: %f\n", alturaJoven);
    printf ("la altura de la mujer mas  vieja: %f\n", mayorAltura);
    printf ("la edad del hombre mas bajo es: %f\n", mayorAltura);
    printf ("El promedio es: %f", promedioEdades);
}




    /*int numero = 5;
    float potencia;

    potencia = pow (numero, 3);


    printf("la potencia es \t\t es : %f\n\a", potencia);

    return 0;

      printf("ingrese sexo:");
    sexo = tolower(getche());

    while(sexo!='f'&&sexo!='m')
    {
        printf("reingrese el sexo: ");
        sexo = tolower(getche());
    }*/
