#include <stdio.h>
#include <conio.h>

void main()
{
    int a[5],i;
    printf("Enter the 5 number:");
    for(i=0;i<=4;i++){
        scanf("%d",&a[i]);
    }
    printf("Even Number is:");
    for(i=0;i<=4;i++){
        if(a[i]%2==0){
            printf("%d ",a[i]);
        }
    }
}