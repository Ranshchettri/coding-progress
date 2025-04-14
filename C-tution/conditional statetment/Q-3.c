// WAP to input one character and check whether it is a vowel or not ?

#include <stdio.h>
#include <conio.h>

    void main()
    {
       char x;
         printf("Enter a character: ");
         scanf("%c", &x);
            if ( x == 'A' || x == 'E' || x == 'I' || x == 'O' || x == 'U')
            {
                printf("%c is a vowel");
            }
            else
            {
                printf("%c is not a vowel");
            }


    }