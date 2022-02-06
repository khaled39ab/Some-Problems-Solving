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


//Finding count of word which is used in paragraph  & first index of that word
const paragraph = "Normally, I like to hear and tell jokes and stories to my friends. I help my younger cousins in doing their home works daily. I love my parents very much. They also love me and promote me to do well in every field. They motivate and inspire me to study. My family is a cultural family. When we celebrate each festival together, we enjoyed it and have a great time. Really, I am fortunate to have this family."

const match = paragraph.match (/love/gi); //RegExp
// const count = match.length; // return error if no match found
const count = match ? match.length : 0;
console.log(count);

let position = paragraph.search (/loves/i);
position = position >= 0 ? position : "not found";
console.log(position);

//Finding index of second parameter in first array parameter
//input: linearSearch(["a", "b", "c", "d"], "c")
function linearSearch(arr, val){
    for (let i = 0; i < arr.length; i++) {
         if (arr[i] === val){
             return i;
         }      
    }
    return "Not Found!";
}

console.log(linearSearch(["a", "b", "c", "d"], "e"));