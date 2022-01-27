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
console.log(countVowels("Bangladesh is a unitary parliamentary constitutional republic based on the Westminster system. I love Bangladesh"));