// LES EXCEPTIONS



// if(){

// }else{

// }

// le "if et else" que l'on connaît deviens try et catch
// try {
//     //javascript va chercher si dans ce block il y a eu une erreur
//     alert(hello);
// } catch(error){
//     //si il y a une erreur dans le block d'en haut Js va executer les instruction qui sont dans le block catch
//     alert("la variable Hello n'existe pas");
// }




do {
    try {
    
        var recompense = prompt("Choisissez une récompense : épée, arc, haches");
        var degats;
    
        switch(recompense) {
            case 'épée':
                degats = 40;
                break;
            case 'arc':
                degats = 30;
                break;
            case 'haches':
                degats = 20;
                break;
            default:
                throw new Error("Vous ne pouvez pas tricher")
        }
        alert("Vous avez choisi : "+ recompense+ "(" + degats + " degats ).");
    } catch(error){
        alert(error);
    }
    finally{
        alert('fin du programme')
    }
} while (recompense == "" || recompense == null);

// finally = finction qui permet d'afficher un code meme dans une fonction apres un return
//
