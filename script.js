//your JS code here. If required.
function daysOfAYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return 366; // Leap year
  } else {
    return 365; // Normal year
  }
}

// Examples
console.log(daysOfAYear(2022)); 
console.log(daysOfAYear(2024));
console.log(daysOfAYear(1900)); 
console.log(daysOfAYear(2000)); 

