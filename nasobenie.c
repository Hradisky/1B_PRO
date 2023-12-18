#include <stdio.h>

int main(){
    int a;
    int b;
    int i;
    printf("Kolko krat nasobit? \n");
    scanf("%d",&a);
    printf("Co nasobit? \n");
    scanf("%d",&i);
    printf("\e[1;1H\e[2J");
for (b=1;b<=a;b++){
        printf("%d x %d = %d\n",b,i,b*i);
    }

// printf("%d x %d = %d\n",a,b,a*b);
// a = 2;
// printf("%d x %d = %d\n",a,b,a*b);
// a = 3;
// printf("%d x %d = %d\n",a,b,a*b);
// a = 4;
// printf("%d x %d = %d\n",a,b,a*b);
// a = 5;
// printf("%d x %d = %d\n",a,b,a*b);
// a = 6;
// printf("%d x %d = %d\n",a,b,a*b);
// a = 7;
// printf("%d x %d = %d\n",a,b,a*b);
// a = 8;
// printf("%d x %d = %d\n",a,b,a*b);
// a = 9;
// printf("%d x %d = %d\n",a,b,a*b);
// a = 10;
}