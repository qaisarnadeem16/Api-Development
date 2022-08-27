// 1. Write a ts program to find maximum between two numbers.
// var number1:number=32;
// var number2:number=22;
// if(number1>number2){
//     console.log("First is Greater then Second Number")
// }else{
//     console.log("Second is Greater then first Number")
// }
// 2. Write a ts program to find maximum between three numbers.
// var number1:number=62;
// var number2:number=42;
// var number3:number=42;
// if(number1>number2 && number1>number3){
//     console.log("First is Greater then other Number")
// }else if(number2>number1 && number2>number3){
//     console.log("Second is Greater then other Number")
// }else{
//     console.log("Third is Greater then other Number")
// }
// 3. Write a ts program to check whether a number is negative, positive or zero.
// var number:number=0;
// if(number==0){
//     console.log("Number is Zero")
// }else if(number>0){
//     console.log("Number is Positive(+)")
// }else{
//     console.log("Number is Negative(-)")
// }
// 4. Write a ts program to check whether a number is divisible by 5 and 11 or not.
// var number:number=65
// if(number%5==0 ){
//     console.log("Number is  divisible by 5")
// }else if(number%11==0 ){
//     console.log("Number is  divisible by 11")
// }else{
//     console.log("Number is not divisible by 5 and 11")
// }
//  5. Write a ts program to check whether a number is even or odd.
//    var number:number=66
//     if(number%2==0 ){
//         console.log("Number is even")
//     }else{
//         console.log("Number is  Odd")
//     } 
// 6. Write a ts program to check whether a year is leap year or not.
// function leapYear(year){
//     const leap=new Date(year , 1 , 29).getDate()===29;
//     if(leap){
//         console.log(year +" : is a leap year");
//     }else{
//         console.log(year +" : is not  a leap year");
//     }
// }
// leapYear(2016)
// 7. Write a ts program to check whether a character is alphabet or not.
// var character="A";
// if((character >='a' && character <='z') || (character >='A' && character <='Z')){
//     console.log(character +" :is a alphabet")
// }else{
//     console.log(character +" :is not a alphabet")
// }
// 8. Write a ts program to input any alphabet and check whether it is vowel or consonant.
//  var character:string="A";
//  if(character=="a" || character=="A" || character=="e" || character=="E" || character=="o" || character=="O" || character=="i" || character=="I" || character=="u" || character=="U"){
//     console.log(character + " : is a Vowels")
//  }else if((character >='a' && character <='z') || (character >='A' && character <='Z')){
//     console.log(character + " : is not a Vowels")
//  }
// 9. Write a ts program to input any character and check whether it is alphabet, digit or special character.
// var char="//";
// if((char >='a' && char <='z') || (char >='A' && char <='Z')){
//     console.log(char +" :is a alphabet")
// }else if(char >= "0" && char <= "9"){
//     console.log(char +" :is  a numeric")
// }else{
//     console.log(char +" :is  a special character")
// }
// 10. Write a ts program to check whether a character is uppercase or lowercase alphabet.
//  var character="v";
//     if(character >='a' && character <='z') {
//         console.log(character +" :is a lowercase alphabet")
//     }else if(character >='A' && character <='Z'){
//         console.log(character +" :is  a uppercase alphabet")
//     }else{
//         console.log(character +" :is not a alphabet")
//     }
// 11. Write a ts program to input week number and print week day.
// var dayNumber:number=7;
// switch(dayNumber){
//     case 1: console.log("Monday");
//     break;
//     case 2: console.log("Tuesday");
//     break;
//     case 3: console.log("Wednesday");
//     break;
//     case 4: console.log("thursday");
//     break;
//     case 5: console.log("Friday");
//     break;
//     case 6: console.log("Saturday");
//     break;
//     case 7: console.log("Sunday");
//     break;
//     default : console.log("unknown value")
//     break;
// }
// 12. Write a ts program to input month number and print number of days in that month.
//   var dayInMonth=function(month , year){
//     return new Date(year ,month, 0).getDate();
//   }
//   console.log(dayInMonth(2, 2022))
// 13. Write a ts program to count total number of notes in given amount.
// 14. Write a ts program to input angles of a triangle and check whether triangle is valid or not.
var totalAngle = 180;
var angle1 = prompt("Enter 1st Angle");
// var angle1st:string=string(angle1)
var angle2 = 70;
var angle3 = 40;
var sumOfAngles = angle1 + angle2 + angle3;
if (sumOfAngles <= 180) {
    console.log(" triangle is valid");
}
else {
    console.log(" triangle is not valid");
}
