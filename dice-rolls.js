// Print dice rolls

function diceRoll (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(diceRoll(1, 6));