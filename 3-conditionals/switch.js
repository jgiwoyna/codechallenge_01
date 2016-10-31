// Write a switch statement that
// console logs witty statements for each
// day of the standard work week: Monday, Tuesday,
// Wednesday, Thursday, Friday
var today = 0;
var day = "";

if(today == 0) {
  day = "Sunday";
} else if(today == 1){
  day = "Monday";
} else if(today == 2){
  day = "Tuesday";
} else if(today == 3){
  day = "Wednesday";
} else if(today == 4){
  day = "Thursday";
} else if(today == 5){
  day = "Friday";
} else if(today == 6){
  day = "Saturday";
}

switch(today) {
  case 0:
    day = "Sunday";
  case 1;
    day = "Monday";
    //break;
  case 2;
    day = "Tuesday";
    break;
    default:
      day = "Never heard of it";
      break;
  case 3:
  case 4:
  case 5:
    day = "Wedsthuriday";
    break;
}

console.log(day);
