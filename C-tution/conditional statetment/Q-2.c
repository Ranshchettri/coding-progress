// // WAP to input mark a five subject from the user print intelligent
// // if total mark is gretter tha or qual to 480 otherwidse print nalayak padle


// #include<stdio.h>
// int main()
// {
//     int m1,m2,m3,m4,m5,total;
//     printf("Enter the marks of five subject: ");
//     scanf("%d %d %d %d %d",&m1,&m2,&m3,&m4,&m5);
//     total = m1+m2+m3+m4+m5;
//     if( total<200 && total>=450 )
//     {
//         printf("Intelligent");
//     }
//     else
//     {
//         printf("Nalayak padle");
//     }
//     return 0;
// }   



#include <stdio.h>

int main() 
{
    int m1, m2, m3, m4, m5, total;
    
    
    printf("Enter the marks of five subjects: ");
    scanf("%d,%d,%d,%d,%d", &m1, &m2, &m3, &m4, &m5);
    
    
    if (total >=200) 
    {
        printf("Intelligent\n");
    } 
    else 
    {
        printf("Nalayak! Pad le.\n");
    }
    
    return 0; 
}
