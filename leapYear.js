// console.log(2032 % 4);

// const year = 3996;
// let remainder = year % 4;
// if (remainder == 0) {
//   console.log("your year is a leap year");
// } else {
//   console.log("your year is not leap year");
// }

// console.log(remainder == 0);


function isLeapYear(year) {
    const remainder = year % 4 ;
    if(remainder == 0){
        return true
    }else{
        return false;
    }
}
const check2000 =   isLeapYear(2000)
console.log(check2000)