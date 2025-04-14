
// wap a C program to check if a number is prime or not
#include <stdio.h>
#include <conio.h>

void main() {
    int flag = 1, i;
    int n;

    printf("Enter a number n: ");
    scanf("%d", &n);  

    if(n == 2) {
        printf("Number is a prime\n");
    } else {
        for(i = 2; i <= n - 1; i++) {
            if(n % i == 0) {
                flag = 0;  
                break;
            }
        }

        if(flag == 1) {
            printf("Number is a prime\n");
        } else {
            printf("Number is not a prime\n");
        }
    }
}
