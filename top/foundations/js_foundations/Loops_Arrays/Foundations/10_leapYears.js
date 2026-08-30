function LeapYear(num){
  if(num % 4 === 0 && num % 100 !== 0 || num % 400 === 0){
    return true;
  } else return false; 
} 


console.log(LeapYear(1800));
console.log(LeapYear(1900));
console.log(LeapYear(1600));
console.log(LeapYear(2004));
console.log(LeapYear(2032));
console.log(LeapYear(2024));
console.log(LeapYear(1985));