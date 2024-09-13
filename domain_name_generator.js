
// //  Posicion.   0       1       2         3
// let nombres = ["Emi", "Juli", "Marti", "Pauli"];
// let academias = ["4 geeks", "Fullstack", "uruguay"];



// for ( let nombre in nombres){   //El 'in' toma la posicion del elemento en el arreglo
//     console.log(nombre);
// }
// for ( let nombre of nombres){   //El 'of' toma el valor de la posición en el arreglo
//     console.log(nombre);
// }

// for (let i = 0; i < nombres.length; i++){
//     for ( let j = 0; j < academias.length; j++){
//         console.log("i", i, "j", j);
//     }
// }



let pronouns = ['the', 'our'];
let adjs = ['great', 'big'];
let nouns = ['jogger', 'racoon'];

for ( pron of pronouns){
    for ( adj of adjs){
        for( noun of nouns)
            console.log(pron+adj+noun);
    }
}

