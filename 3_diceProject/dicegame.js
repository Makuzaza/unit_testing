'use strict'    

const Dice = require('./dice');

const diceA = new Dice();
const diceB = new Dice();

// const coin = new Dice(2);

console.log('DiceA: ',diceA.toString());
console.log('DiceB: '+diceB);

diceA.roll();
diceB.roll();

console.log('DiceA: ', diceA.toString());
console.log('DiceB: ' + diceB);

if(diceA.dots === diceB.dots){
    console.log('same dots!');
} else if(diceA.dots > diceB.dots){
    console.log('A wins!');
} else {
    console.log('B wins!');
}

console.log('######array of dice######');
const diceArray = [new Dice(), new Dice(), new Dice()];

diceArray.forEach(dice => dice.roll()) 
diceArray.forEach(dice => console.log(dice.toString()));