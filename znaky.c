#include <stdio.h>

int main () {
    int a,b;
    float cislo;
    char znak;
    char zb;

 /*   //vypis prvych 5 pismien abecedy
#    znak = 'a';
    printf("%c\n", znak++);
    printf("%c\n", znak++);
    printf("%c\n", znak++);
    printf("%c\n", znak++);
    printf("%c\n", znak++);
}
*/

    znak = 'A';
    zb = 'a';
    int i;
    for (i=1;i<=26;i++){
        printf("%c\n", znak++);
        printf("%c\n", zb++);
    }
}