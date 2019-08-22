#include <stdio.h>
#include <stdlib.h>
/*
int main()
{

int edad;
int masVieja = 0;
float altura;
float mayorAltura= 0;
char sexo;
char continuar = 's';

    while (continuar == 's')
    {
    printf("\n Ingrese edad: ");
    scanf("%d", &edad);
    fflush(stdin);
    printf("\n Ingrese altura: ");
    scanf("%f", &altura);
    fflush(stdin);
    printf("\n Ingrese sexo: ");
    scanf ("%c", &sexo);
    fflush(stdin);
    printf("\n continuar:");
    scanf("%c", &continuar);

    if (sexo == 'f' && edad > masVieja)
    {

    masVieja = edad;

    mayorAltura = altura;

    }

    }

    printf ("%f", mayorAltura);



}
*/
int main()
{

int edad;
int edadA;
int masVieja=0;
int masJoven=0;
float altura;
float mayorAltura=0;
float mAltura=0;
float alturaJoven;
float masAlto;
char sexoA;
char sexo;
char sexoAlto;
char continuar = 's';


    while (continuar == 's')
    {
    printf("\n Ingrese edad:");
    scanf("%d", &edad);
    fflush(stdin);

    printf("\n Ingrese altura:");
    scanf("%f", &altura);
    fflush(stdin);

    printf("\n Ingrese sexo:");
    scanf("%c", &sexo);
    fflush(stdin);



    /*if (sexo == 'f' && edad > masVieja)
    {
    masVieja = edad;
    mayorAltura = altura;
    }

    if (edad < masJoven)
    {
    masJoven = edad;
    alturaJoven = altura;
    }

    if (altura > mAltura)
    {
    mAltura = altura;
    sexoA = sexo;
    }
    if (sexo == 'm' && altura > masAlto)
    {
    masAlto = altura;
    edadA = edad;
    }

    printf ("%f", mayorAltura);*/
    }
}
