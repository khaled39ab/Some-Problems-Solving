// Student name sorting by alphabet 
const student = [ "Jamaan", "Kalam", "Kobir", "Amir", "Sakib", "Jolil", "Aman", "Atik", "Amin",  "Delowar", "Amiin"];
console.log(student.sort());

// Student Roll number sorting
const roll = [25, 45, 14, 23, 01, 19, 09, 75, 26, 04, 31, 11, 03, 17,21];
// const roll_Num = roll.sort( (a, b) => { return a - b});
const roll_Num = roll.sort(function(a, b){return a - b});
console.log(roll_Num);


