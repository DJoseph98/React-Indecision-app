//var peut reinstancier une même variable et accessible en dehors du scope si reinstancier dedans
var userName = 'Didier'
var userName = 'Anna'
console.log( 'name', userName);

// const NOM UNIQUE instancier une seul fois et elle ne change plus
const userName1 = 'Didier'
//userName = 'Anna' ----------------------> CRASH
console.log( 'name', userName1);

// let NOM UNIQUE peux changer 
let userName2 = 'Didier'
//let userName2 = 'ANna' --------------------> CRASH
userName2= 'Anna'
console.log( 'name', userName2);

// VAR -------------------------------------------- 
/* var vraiNom = 'Didier'
if(true){
    var fauxnom = 'ANna';
}

console.log(fauxnom)//WORK */
//--------------------------------

//Fonctionne pas pour const et let:
var vraiNom = 'Didier Joseph';

if(vraiNom){
    const fauxnom = vraiNom.split(' ')[0];
    console.log(fauxnom) 
}
console.log(fauxnom)//WORK