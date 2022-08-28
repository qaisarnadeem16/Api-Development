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
var note100:number;
var note500:number;
var note50:number;
  
function calNote(amount:number){
    if(amount>=500){
         note500=amount/500;
        amount -=note500*500;
    }
    if(amount>=100){
        note100=amount/100;
        amount -=note100*100;
    }
    if(amount>=50){
       note50=amount/50;
        amount -=note50*50;
    }

    console.log("500 notes ; "+ note500)
    console.log("100 notes ; "+ note100)
    console.log("50 notes ; "+ note50)

}
calNote(560)









// 14. Write a ts program to input angles of a triangle and check whether triangle is valid or not.

// var angle1:any=prompt("Enter 1st Angle");
// var angle2:any=prompt("Enter 2nd Angle");
// var angle3:any=prompt("Enter 3rd Angle");


// var sumOfAngles=angle1+angle2+angle3;

// if(sumOfAngles==180){
//     console.log(" triangle is valid")
// }else{
//     console.log(" triangle is not valid")
// }



// 15. Write a ts program to input all sides of a triangle and check whether triangle is valid or not.

    // function checkValid(a:number,b:number,c:number){
    //     if(a+b<=c || a+c<=b || c+b<=a){
    //         console.log("Triangle is Invalid")

    //     }else{
    //         console.log("Triangle is Valid")
    //     }
    // }

    // checkValid(3,13,5)

//  16. Write a ts program to check whether the triangle is equilateral, isosceles or scalene triangle.

//  function checkTriangle(a:number, b:number, c:number){
//     if(a==b && b==c){
//         console.log("Triangle is Equilateral")
//     }else if(a==b || b==c || c==a){
//         console.log("Triangle is Isosceles")
//     }else{
//         console.log("Triangle is Scalene")
//     }
//  }

//  checkTriangle(12,11,1)

// 17. Write a ts program to find all roots of a quadratic equation.

// function findRoots(a:number , b:number ,c:number){
//     if(a==0){
//         console.log("Invalid")
//     }

//     var d=b*b-4*a*c;
//     var sqrt_d=Math.sqrt(Math.abs(d));

//     if(d>0){
//         console.log("Roots are real and different")

//         console.log((-b+sqrt_d)/2*a + "     " +
//         (-b-sqrt_d)/2*a)

//     }else  if(d=0){
//         console.log("Roots are real and same")

//         console.log((-b+sqrt_d)/2*a + "    " +
//         (-b-sqrt_d)/2*a)

//     }else{
        
//             console.log("Roots are complex")
    
//             console.log((-b+sqrt_d)/2*a + "    " +
//             (-b-sqrt_d)/2*a)
    
        
//     }
// }

// findRoots(11,12,1)


// 18. Write a ts program to calculate profit or loss.

// function checkProfitLoss(costPrice:number,sellPrice:number){
//     if(sellPrice>costPrice){
//         console.log("YOU Get Profit")
//     }else if(costPrice>sellPrice){
//         console.log("YOU have in  loss")
//     }else{
//         console.log("No profit nor Loss")
//     }
// }  

// checkProfitLoss(2000,3323)


// 19. Write a ts program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

// function calPersentage(Physics:number, Chemistry:number, Biology:number, Mathematics:number ,Computer:number){
//     var getMarks:number=Physics+Chemistry+ Biology+ Mathematics + Computer;
//     var totalMarks=500;
//     var percentage=getMarks/totalMarks*100;
//     console.log(percentage+":  is persentage of student")
//     if(percentage>=90){
//         console.log("Student get A Grade")
//     }else if(percentage>=80){
//         console.log("Student get B Grade")
//     }else if(percentage>=70){
//         console.log("Student get C Grade")
//     }else if(percentage>=60){
//         console.log("Student get D Grade")
//     }else if(percentage>=40){
//         console.log("Student get E Grade")
//     }else{
//         console.log("Student get F Grade")
//     }
// }

// calPersentage(90,80,90,90,90)


// 20. Write a ts program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%

// function grossSalary(basicSalary:number){
//     if(basicSalary<=10000){
//         var hra:number=basicSalary*20/100;
//         var da:number=basicSalary*80/100;
//         var totalSalary=basicSalary+hra+da
//         console.log("Gross salary of an employee is : "+ totalSalary)
//     }else  if(basicSalary<=20000){
//         var hra:number=basicSalary*25/100;
//         var da:number=basicSalary*90/100;
//         var totalSalary=basicSalary+hra+da
//         console.log("Gross salary of an employee is : "+ totalSalary)
//     }else  if(basicSalary>20000){
//         var hra:number=basicSalary*30/100;
//         var da:number=basicSalary*95/100;
//         var totalSalary=basicSalary+hra+da
//         console.log("Gross salary of an employee is : "+ totalSalary)
//     }else{
//         console.log("Invalid salary")
//     }
// }
// grossSalary(10111)


// 21. Write a ts program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill
// Footer
// var amount:number;
// function calUnits(units:number){
  
//     if(units<=50){
//         amount=units*0.50;
//     }else if(units<=100){
//         amount=units*0.75;
//     }else if(units>100){
//         amount=units*1.20;
//     }else if(units>250){
//         amount=units*1.50;
//     }else{
//         console.log("invalid units")
//     }
//     var s_chargers=amount*20/100;
//     var totalBill=amount+s_chargers;
//     console.log("total electricity bill : "+ totalBill)
// }
// calUnits(300)