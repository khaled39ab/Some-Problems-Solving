// find leap year
function leapYear (year){
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 != 0)){
        console.log("It\'s Leap Year");
    }
    else {
        console.log("It\'s not Leap Year ");
    }
}

leapYear (2012);