//kilometer To meter convert
function kilometerToMeter( length ) {
    var meters = length * 1000; 
    return meters; 
}

//budget calculator
function budgetCalculator( watchPieces, mobilePieces, laptopPieces ){
   var watchPrice= watchPieces * 50;
   var mobilePrice= mobilePieces * 100;
   var laptopPrice= laptopPieces * 500;
   var totalPrice= watchPrice + mobilePrice + laptopPrice;
   return totalPrice;
}

//hotel cost program
function hotelCost( days ){
   var rent = 0;
   if (days <= 0){
       rent = "Input Days are Invalid";
   }
   else if (days <= 10){
       rent = days * 100;
   }
   else if (days <= 20){
       firstPeriod = 10 * 100;
       remaining = days - 10;
       secondPeriod = remaining * 80;
       rent= firstPeriod + secondPeriod;
   }
   else{
       firstPeriod = 10 * 100;
       secondPeriod = 10 * 80;
       remaining = days - 20;
       thirdPeriod = remaining * 50;
       rent= firstPeriod + secondPeriod + thirdPeriod;
   }   
   return rent;
}

// mega friend program
function  megaFriend(name) {
   var friendName = name[0];
   for (var i = 0; i < name.length; i++) {
       var currentName = name[i];
       if (currentName.length > friendName.length) {
           friendName = currentName;   
       }
   }
   return friendName;
}
