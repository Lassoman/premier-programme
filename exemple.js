//LES BOUCLES DO-WHILE



//les boucles do-while sont identiques au boucle while sauf que la condition a l'interieu s'execute au moins 1 foois

//1ER EXEMPLE

// do{
//     console.log('test')
// }while (false) 

// ici meme si on a mit false la boucle s'execute une premiere fois

do {

    var prenom = prompt('Quel est votre prénom ?');

} while(prenom == "" || prenom == null)

alert('Bonjour ' + prenom);