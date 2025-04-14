//Wap to input 2 num from user and add twise and print HELLO and 
// againg add twise and print CODER and add once again usig Function method 

#include<stdio.h>
#include<conio.h>
void addition(); 
void  main(){

    addition();
    addition();
    printf("HELLO");    
    addition();
    printf("CODERS");  
    addition();

   
    
}



void addition(){
    int a,b,c;

    printf("Enter the two number:\n ");
     scanf("%d%d",&a,&b);
    c=a+b;
    printf("The sum of two number is %d\n",c);

   
  

}