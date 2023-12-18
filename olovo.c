#include <stdio.h>

int main(){
    char c;
    printf("Mas rad programovanie pre tych z okuliarmi codovanie?\n");
    c = getchar();
    if (c=='A'){
        printf("Super jednotka si paradenka");
    }else{
        if (c=='N'){
            printf("Fuj nemam ta rad");

        }else{
            printf("Odpovedz normalne prosim ta ty debil!");
        }
    }
}