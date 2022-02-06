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

console.log("==========================");

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

console.log("==========================");

//Finding count of word which is used in paragraph  & first index of that word
const paragraph = "Normally, I like to hear and tell jokes and stories to my friends. I help my younger cousins in doing their home works daily. I love my parents very much. They also love me and promote me to do well in every field. They motivate and inspire me to study. My family is a cultural family. When we celebrate each festival together, we enjoyed it and have a great time. Really, I am fortunate to have this family."

const match = paragraph.match (/love/gi); //RegExp
// const count = match.length; // return error if no match found
const count = match ? match.length : 0;
console.log(count);

let position = paragraph.search (/loves/i);
position = position >= 0 ? position : "not found";
console.log(position);
console.log("==========================");

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

console.log("==========================");

//console Fizz if number % 3 = 0, console Buzz if number % 5 = 0, console FizzBuzz if number % 3&5 = 0
function FizzBuzz (number){
    for (let i = 1; i <= number; i++) {  
        if (i % 15 === 0){
            console.log(i + " is FizzBuzz");
        } else if(i % 3 === 0){
            console.log(i + " is Fizz");
        } else if(i % 5 === 0){
            console.log(i + " is Buzz");
        } else {
            console.log(i);
        }
    }
}

FizzBuzz(15);

console.log("==========================");

//Remove falsy value from array
//falsy 6 value are null,NaN,false,undefined,0,""
const mixed = [
    "Ami",
    undefined,
    "1",
    "",
    true,
    null,
    "0",
    0,
    NaN,
    false
];

// const truthy = mixed.filter (function(el){
//     if (el){
//         return true;
//     } else {
//         return false;
//     }
// });
const truthy = mixed.filter (Boolean);
console.log(truthy);

console.log("==========================");

//Remove falsy value from object
const obj = {
    a : "Ami",
    b : undefined,
    c : "1",
    d : "",
    e : true,
    f : null,
    g : "0",
    h : 0,
    i : NaN,
    j : false
};

const truthyObj = function (obj){
    for (let i in obj){
        if(!obj[i]){
            delete obj[i];
        }
    }
    return obj;
};
console.log(truthyObj(obj));