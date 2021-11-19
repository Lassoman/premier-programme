

do {
    
    var choix = Number(prompt("Que souhaitez vous faire ? :\n\n1-addition \n2-Multiplication \n3-Soustraction \n4-Division"));
    } while (choix != 1  && choix != 2 && choix != 3 && choix != 4) ;

do {
    //la fonction Number c'est juste pour que Js comprenne que c'est un nombre et pas une chaine de caractere. Sinon si ont fait le calcul 5+3 js renverra comme resulat->53
    var premierNombre = Number(prompt("Tapez votre premier nombre :"));
    var deuxiemeNombre = Number(prompt("Tapez votre deuxieme nombre :"));
} while (isNaN(premierNombre)|| isNaN(deuxiemeNombre));
