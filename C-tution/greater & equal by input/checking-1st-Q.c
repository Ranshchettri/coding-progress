//wap to get 2 number from uder and print the largest number
#include <stdio.h>
#include <conio.h>   

void main()
{
    int a, b;    
    printf("Enter first number: ");
    scanf("%d", &a);
    
    printf("Enter second number: ");
    scanf("%d", &b);
    
    if (a > b)
    {
        printf("The largest number is: %d", a);
    }
    else if (b > a)
    {
        printf("The largest number is: %d", b);
    }
    else
    {
        printf("Both numbers are equal.");
    }

}
