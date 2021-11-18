
//SWITCH


let consommable = "voiture";

switch(consommable){

    case "tomates":
    case "carotte":
    case "oignons" :
        console.log("ceci est un légume!");
        break;

    case "orange":
    case "banane" :
        console.log("ceci est un fruit!");
        break;

    case "eau" :
        console.log("ceci est à boire!")
        break;

    case "pates" :
        console.log("ceci est un féculent!")
        break;
    default:
        console.log("ceci n'est pas un aliment connu !")
}