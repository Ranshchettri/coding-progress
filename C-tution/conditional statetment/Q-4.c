// Wap to input one number from the user.
// if the unmber is 3 & 5 then print the sqire of the number otherwise print the  cube of the number.(by using switch case)

#include <stdio.h>
int main() 
{
    int num;
    printf("Enter a number: ");
    scanf("%d", &num);
    switch (num) 

   {
    case 3:
    case 5:
        printf("Square of %d is %d\n", num, num * num);
    break;
    

    
    default:
        printf("Cube of %d is %d\n", num, num * num * num);
    break;
   }
    return 0;

    
}