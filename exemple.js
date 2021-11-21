



function timer(secondes){ //10

    if(secondes > 0){
        console.log(secondes); //ici le resultat affiché sera 10
        timer(secondes -1)// on rapelle la fonction dans la fonction. le resulat sera 9
        // timer(8)

        //afficher(8)
        //timer(7)
    }
    else {
        console.log(secondes);
    }
}

timer(10)


//ON AURAIT PU REALISER CE TIMER AVEC UNE BOUCLE FOR