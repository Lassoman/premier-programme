
//SWITCH


let gareDeDepart = "Villemomble";
let gareDarrivee = "";
let chauffeur = "";

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
    console.log('Le train va démarrer.');
    }else{
    console.log('le train ne peut pas démarrer pas');
}