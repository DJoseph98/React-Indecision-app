import { multiplication, soustraction } from './utils.js'; //ES6 syntax
//const {multiplication, soustraction} =  require('./utils'); //Classic synthax

import isSeniorDefault/*peux importe le nom*/, { isAdult, canDrink } from './person.js';

console.log(multiplication(1, 2));
console.log(soustraction(1, 2));

console.log(isAdult(16));
console.log(isAdult(18));
console.log(canDrink(21));
console.log(isSeniorDefault(64));