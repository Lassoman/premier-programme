
//Fonction pour additionner
function addition(nombreA,nombreB){
    return nombreA + nombreB;
}
//Fonction pour multiplier
function mutiplication(nombreA,nombreB){
    return nombreA * nombreB;
}
//Fonction pour soustraire
function soustraction(nombreA,nombreB){
    return nombreA - nombreB;
}
//Fonction pour soustraire
function division(nombreA,nombreB){
    if(nombreB == 0)
    throw new Error("Impossible de diviser par 0");
    return nombreA / nombreB;
}




do {
    
    var choix = Number(prompt("Que souhaitez vous faire ? :\n\n1-addition \n2-Multiplication \n3-Soustraction \n4-Division"));
    } while (choix != 1  && choix != 2 && choix != 3 && choix != 4) ;

do {
    //la fonction Number c'est juste pour que Js comprenne que c'est un nombre et pas une chaine de caractere. Sinon si ont fait le calcul 5+3 js renverra comme resulat->53
    var premierNombre = Number(prompt("Tapez votre premier nombre :"));
    var deuxiemeNombre = Number(prompt("Tapez votre deuxieme nombre :"));
} while (isNaN(premierNombre)|| isNaN(deuxiemeNombre));

try {
    
    switch(choix){
        case 1:
            var resultat = addition(premierNombre,deuxiemeNombre);
            break;
        case 2:
            var resultat = multiplication(premierNombre,deuxiemeNombre);
            break;
        case 3:
            var resultat = soustraction(premierNombre,deuxiemeNombre);
            break;
        case 4:
            var resultat = division(premierNombre,deuxiemeNombre);
            break;
        default:
            throw new error("Une erreur est survenue.");
    
    }
} catch (error) {
    alert("Voici le resultat" + resultat);
    alert(error);
}


