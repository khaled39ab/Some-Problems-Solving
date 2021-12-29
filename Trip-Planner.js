// Problem
// You need to plan a road trip. You are traveling at an average speed of 40 miles an hour.
// Given a distance in miles as input (the code to take input is already present), output to the console the time it will take you to cover it in minutes.

// Sample Input:
// 150

// Sample Output:
// 225

//Solution
function main(distance){
    const time = distance / 40;
    const result = time * 60;
    return result;
}
console.log(main(150));
