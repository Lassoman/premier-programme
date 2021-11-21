



function somme(nombre) {
    if(nombre == 1){
        return 1;
    }

    return nombre + somme(nombre -1);
}

console.log(somme(2));
//ON AURAIT PU REALISER CE TIMER AVEC UNE BOUCLE FOR