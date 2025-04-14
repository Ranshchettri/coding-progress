// // wap to input 1 number from the user and print the day of the week using switch case.
// // if the number is 1 then print sunday, 2 then print Monday, 3 then print Tuesday, 
// // 4 then print Wednesday, 5 then print Thursday, 6 then print Furday, 7 then print Saturday otherwise print invalid.

#include<stdio.h>
int main()
{
    int x;
    printf("Enter a number: ");
    scanf("%d", &x);
    switch(x)
    {
        
            case 1:
            printf("sunday");
            break;   

            case 2:
            printf("Monday");
            break;

            case 3:
            printf("Tuesday");
            break;

            case 4:
            printf("Wednesday");
            break;

            case 5:
            printf("Thursday");
            break;

            case 6:
            printf("Furday");
            break;

            case 7:
            printf("Saturday");
            break;

            default:
            printf("Invalid");
            break;
    }
    return 0;
}











// wap to input 1 number from the user and print the day of the week using if else statement.

#include<stdio.h>   
int main()
{
    int y;
    printf("Enter a number: ");
    scanf("%d", &y);
    
    if(y ==1 || y == 2 || y == 3 || y == 4 || y == 5 || y == 6 || y == 7)
    {
       printf(" Sunday\n Monday\n Tuesday\n Wednesday\n Thursday\n Furday\n Saturday\n");  
    }
    else
    {
        printf("Invalid\n");
    }
    return 0;
      
}