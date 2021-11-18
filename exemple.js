

//Condition IF ELSE

// let heure = 13;

//heure == 11
//heure != 11  verifie si heure est différent de 11
//heure < 11
//heure > 11
//heure <= 11
//heure >= 11


// if(heure < 12){
//     console.log('C\'est le matin ')
// }
// else if(heure <=18){
//     console.log("c'est l'apres-midi")
// }
// else{
//     console.log('C\'est la soirée')
// }

// age
// si -18 : vous n'estes pas majeur
// si age entre 18 et 20 : vous etes majeur en france
// si +21: vous etes majeur partout, à vous les casinos!

let age = 21

if(age<18){
    console.log("Vous êtes pas majeur")
}else if(age>= 18 && age<=20){
    console.log("Vous etes majeur en France")
}else{
    console.log("vous etes majeur partout, à vous les casinos!")
}