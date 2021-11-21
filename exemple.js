
// DIFFERENCES ENTRE LES LET ET LES VAR



let variableLet = "globale";
var variableVar = "globale"


if(true){


let variableLet = "locale";
var variableVar = "locale";

console.log( "le résultat de let est :"+ variableLet)// résulat est = locale
console.log( "le résultat de la var est :"+ variableVar)// résulat est = locale
}


console.log( "le résultat de let est :"+ variableLet)// résulat est = golable
console.log( "le résultat de la var est :"+ variableVar)// résulat est = locale