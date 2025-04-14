// wap a C program to print Fibonacci series by using  while loop *******************************************************

// #include<stdio.h>
// void main()
// {
//     int a,b,c,n;
//     int i=1;
//     printf("enter a number n:");
//     scanf("%d",&n);
//     a=0;
//     b=1;
//     printf("Fibonacci series is:\n");
//     printf("%d\n",a);   
//     printf("%d\n",b);
//     while(i<=n-2)
//     {
//         c=a+b;
//         printf("%d\n",c);
//         a=b;
//         b=c;
//         i++;
//     }

// }

// // wap a C program to print Fibonacci series by using do while loop***************************************************

// #include<stdio.h>
// void main()
// {
//     int a,b,c,n;
//     int i=1;
//     printf("enter a number n:");
//     scanf("%d",&n);
//     a=0;
//     b=1;
//     printf("Fibonacci series is:\n");
//     printf("%d\n",a);   
//     printf("%d\n",b);
//     do
//     {
//         c=a+b;
//         printf("%d\n",c);
//         a=b;
//         b=c;
//         i++;
//     }while(i<=n-2);

// }








 // // wap a C program to print Fibonacci series by using for loop***************************************************

#include<stdio.h>

void main()
{
    int a, b, n, i;
    
    printf("Enter the number of terms (n): ");
    scanf("%d", &n);

    a = 0;
    b = 1;
    
    printf("Fibonacci series is: \n");

    printf("%d %d ", a, b);

    for(i = 3; i <= n; i++) {
        b = a + b;
        printf("%d ", b);
        a = b - a;
    }

    printf("\n");
}
