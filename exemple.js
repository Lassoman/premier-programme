//CONDITION TERNAIRE



let x = 5;

// if (x > 3){
//     console.log("x est superieur à 3")
// }else{
//     console("x est inferieur à 3")
// }


//2eme exemple
// let resultat = (x > 3) ? true : false;

// console.log(resultat);


//3eme exemple 
// x > 3 ? console.log("x est superieur à 3") : console("x est inferieur à 3");


let gareDeDepart = "Villemomble";
let gareDarrivee = prompt("ou souhaitez vous aller ?")|| "Gap"; // ici avec Gap on a crée une valeur par défaut au cas ou l'utilisateur n'entre rien dans le prompt
let chauffeur = "Alexandre-Fofana";

// 1ER EXAMPLE

// si la valeur de la variable est diffrent d'une entrée vide alors on peut demarrer le train
// if (gareDeDepart != ""){
//     if(gareDarrivee != ""){
//     console.log('Le train va démarrer.');
//     }
// }



//si la condition A et la condition B....
// if (gareDeDepart != "" && gareDarrivee != "" ){
//     console.log('Le train va démarrer.');
//     }else{
//     console.log('le train ne peut pas démarrer pas');
// }


//si la condition A ou la condition B
// if (gareDeDepart != "" || gareDarrivee != "" ){
//     console.log('Le train va démarrer.');
//     }else{
//     console.log('le train ne peut pas démarrer pas');
// }

if ((gareDeDepart != "" || gareDarrivee != "" ) && chauffeur !=""){
    alert('Le train va démarrer à destination de '+ gareDarrivee +'.' );
    }else{
    alert('le train ne peut pas démarrer pas');
}