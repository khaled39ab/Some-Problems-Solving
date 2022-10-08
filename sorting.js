// Student name sorting by alphabet 
const student = [ "Jamaan", "Kalam", "Kobir", "Amir", "Sakib", "Jolil", "Aman", "Atik", "Amin",  "Delowar", "Amiin"];
console.log(student.sort());

// Student Roll number sorting
const roll = [25, 45, 14, 23, 01, 19, 09, 75, 26, 04, 31, 11, 03, 17,21];
// const roll_Num = roll.sort( (a, b) => { return a - b});
const roll_Num = roll.sort(function(a, b){return a - b});
console.log(roll_Num);


// sorting with for loops
const num = [13, 17, 14, 19, 16];
let temp = 0;
for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
        if (num[i] > num[j]) {
            temp = num[i]
            num[i] = num[j]
            num[j] = temp
        }
    }
}

// console.log(num);

/* 
---------------------------------------   sorting with sort function
*/

const number = [43, 54, 23, 65, 75, 21, 32]
number.sort(function (a, b) {
    return a - b
})

// console.log(number);

// ----------------   reverse sorting
number.sort(function (a, b) {
    return b - a
})

console.log(number);
