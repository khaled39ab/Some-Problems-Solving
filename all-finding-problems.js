// finding how many vowel in sentence
const vowels = [ "a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

function countVowels (sentence){
    let count = 0;
    const letters = Array.from (sentence);
    letters.forEach(value => {
        if (vowels.includes (value)){
            count ++;
        }
    });
    return count;
}
console.log(countVowels("Bangladesh is my home land. I love Bangladesh"));

//finding duplicate number
const number = [1, 5, 6, 2, 9, 4, 2, 8, 9, 4, 3, 1, 7];

const duplicate = number.filter (function (value, index, array){
    return array.indexOf (value) !== index;
});
const removeDuplicate = number.filter (function (value, index, array){
    return array.indexOf (value) == index;
});
console.log(duplicate.sort());

console.log(removeDuplicate.sort());