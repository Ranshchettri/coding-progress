// WAP to input 5 num from ser and print even num using function array

#include<stdio.h>
void main(){
    int a[5],i;
    printf("Enetr the 5 First Num:");
    for(i=0;i<=4;i++){

        scanf("%d",&a[i]);
    }
    printf("Even Number is:");
    for(i=0;i<=4;i++){
       if(a[i]%2==0){
        printf("%d",a[i]);
       }
    }

}