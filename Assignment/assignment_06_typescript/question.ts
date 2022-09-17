// 1. Write a ts program to print all natural numbers from 1 to n. - using while loop

function naturalNumber(n:number){
    var i:number=1;
    while(i<=n){
      console.log("Natural Number : " + i)
       i++
    }
}

// naturalNumber(100);


// 2. Write a ts program to print all natural numbers in reverse (from n to 1). - using while loop
function naturalNumberReverse(){
    var i:number=10;
    var n:number=1;

    while(i>=n){
      console.log("Natural Number : " + i)
       i--
    }

}

// naturalNumberReverse();

// 3. Write a ts program to print all alphabets from a to z. - using while loop

function alphabets(){
    var first = "a", last = "z";
     var i=first.charCodeAt(0);
    while(i<last.charCodeAt(0)){
        console.log( eval("String.fromCharCode(" + i + ")") + " " );   
        i++
    }
}
// alphabets();

// 4. Write a ts program to print all even numbers between 1 to 100. - using while loop
function evenNumber(){
    var i:number=1;
    while(i<100){
        if(i%2==0){
            console.log("Even Number :" + i)
        }
        i++
    }
}

// evenNumber();


// 5. Write a ts program to print all odd number between 1 to 100.
function oddNumber(){
    var i:number=1;
    while(i<100){
        if(i%2!=0){
            console.log("Even Number :" + i)
        }
        i++
    }
}

// oddNumber();

// 6. Write a ts program to find sum of all natural numbers between 1 to n

function sumNatural(n:number){
    var i:number=1;
    var sum:number=0;
    while(i<n){
        sum=sum+i;
        i++
    }
    console.log("Sum of natural number :" + sum)
}

// sumNatural(10);

// 7. Write a ts program to find sum of all even numbers between 1 to n.

function sumEven(n:number){
    var i:number=1;
    var sum:number=0;
    while(i<n){
        if(i%2==0){
            sum=sum+i;
        }
        i++
    }
    console.log("Sum of natural number :" + sum)
}

// sumEven(10);

// 8. Write a ts program to find sum of all odd numbers between 1 to n.
function sumOdd(n:number){
    var i:number=1;
    var sum:number=0;
    while(i<n){
        if(i%2!=0){
            sum=sum+i;
        }
        i++
    }
    console.log("Sum of natural number :" + sum)
}

// sumOdd(10);

// 9. Write a ts program to print multiplication table of any number.

function multiplicationTable(n:number){
    console.log("Table of :"+ n)
    for(var i=0; i<=10; i++){
        console.log(n+"    "+i+"    "+n*i)
    }

}
// multiplicationTable(3)

// 10. Write a ts program to count number of digits in a number.
 function countDigit(num:any){
     var i=num.toString().length
    console.log("the length of Number :"+ i)
 }

//  countDigit(1848969.89326486);


// 11. Write a ts program to find first and last digit of a number.

function firstLastNumber(){
    var arr:number[]=[1,4,5,6,6,7,8,8,9,8,9];
    console.log("First number   :"+arr[0])
    console.log("last number    :"+arr[arr.length-1])
}
// firstLastNumber();

// 12. Write a ts program to find sum of first and last digit of a number.
function sumofFirstLast(n){
    function firstDigit(n){
        while (n >= 10) 
            n =n/ 10;
        return Math.floor(n);
    }
    function lastDigit(n){
        return Math.floor(n % 10);
    }

        var sum= firstDigit(n)+lastDigit(n)
        console.log("sum od first and digit  : "+ sum);
}

// sumofFirstLast(112387378)


// 13. Write a ts program to swap first and last digits of a number.
function swapFirstLast(n){
    function firstDigit(n){
        while (n >= 10) 
            n =n/ 10;
        return Math.floor(n);
    }
    function lastDigit(n){
        return Math.floor(n % 10);
    }
    var a=firstDigit(n)
    var b=lastDigit(n)
    console.log(a,b)
      var temp;
      temp=a;
      a=b;
      b=temp;
    console.log(a,b)
       
}

// swapFirstLast(112387378)

// 14. Write a ts program to calculate sum of digits of a number.

function sumOfDigits(value){

   var sum = 0;

while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
}

console.log(sum);
}


// sumOfDigits(346)

// 15. Write a ts program to calculate product of digits of a number.
function productOfDigits(value){

    var sum = 1;
 
 while (value) {
     sum *= value % 10;
     value = Math.floor(value / 10);
 }
 
 console.log(sum);
 }
 
 
//  productOfDigits(3497)

//  16. Write a ts program to enter a number and print its reverse.

let reverseDigits=(num:number)=> {
    let rev_num = 0;
    while(num > 0)
    {
        rev_num = rev_num * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    console.log(rev_num);
}
// reverseDigits(480893);


// 17. Write a ts program to check whether a number is palindrome or not.
let reverseDigits1=(num:number)=> {
    let rev_num = 0;
    while(num > 0)
    {
        rev_num = rev_num * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    // console.log(num);
    console.log(rev_num);
   
}
let palindrome=(n)=>{
    let rev_n=reverseDigits1(n)
    console.log(n)
    if(rev_n==n){
        console.log('number is palindrome ')
    }else{
        console.log('number is not palindrome ')
    }
}

// palindrome(1221)


// 18. Write a ts program to find frequency of each digit in a given integer.

let frequencyDigit=(n:number)=>{
    let d=7;
    var c = 0;
    while (n > 0){
        if (n % 10 == d){
            c++;
        n = n / 10;
        }
    }
  
    console.log(c + "is fre")

}
// frequencyDigit(1777)


// 19. Write a ts program to enter a number and print it in words.
let convertToWord=(num:any)=>{

    let l = num.length
 
    if (l == 0){
        console.log("empty string")
        return
    }
  
    if (l > 4){
    console.log("Length more than 4 is not supported")
        return
    }
    let single_digits = ["zero", "one", "two", "three",
                     "four", "five", "six", "seven",
                     "eight", "nine"]
    let two_digits = ["", "ten", "eleven", "twelve",
                  "thirteen", "fourteen", "fifteen",
                  "sixteen", "seventeen", "eighteen",
                  "nineteen"]
    let tens_multiple = ["", "", "twenty", "thirty", "forty",
                     "fifty", "sixty", "seventy", "eighty",
                     "ninety"]
  
    let tens_power = ["hundred", "thousand"]
  
    // Used for debugging purpose only
    console.log(num, ":"," ")
  
    // For single digit number
    if (l == 1){
        console.log(single_digits[num.charCodeAt(0) - 48])
        return
    }
  
    // Iterate while num is not '\0'
    let x = 0
    while (x < num.length){
  
        // Code path for first 2 digits
        if (l >= 3){
            if (num.charCodeAt(x) - 48 != 0){
                console.log(single_digits[num.charCodeAt(x) - 48]," ")
                console.log(tens_power[l - 3]," ")
                // here len can be 3 or 4
            }
  
            l -= 1
        }
  
        // Code path for last 2 digits
        else{
  
            // Need to explicitly handle
            // 10-19. Sum of the two digits
            // is used as index of "two_digits"
            // array of strings
            if (num.charCodeAt(x) - 48 == 1){
                let sum = (num.charCodeAt(x) - 48 + num.charCodeAt(x+1) - 48)
                console.log(two_digits[sum])
                return
            }
  
            // Need to explicitly handle 20
            else if (num.charCodeAt(x) - 48 == 2 &&
                  num.charCodeAt(x + 1) - 48 == 0){
                    console.log("twenty")
                return
            }
  
            // Rest of the two digit
            // numbers i.e., 21 to 99
            else{
              let  i = num.charCodeAt(x) - 48
                if(i > 0)
                console.log(tens_multiple[i])
                else
                console.log("")
                x += 1
                if(num.charCodeAt(x) - 48 != 0)
                console.log(single_digits[num.charCodeAt(x) - 48])
            }
        }
        x += 1
    }
  
}
// convertToWord("5455")


// 20. Write a ts program to print all ASCII character with their values.

let convertASCII=(c:string)=>{
 let result=c.charCodeAt(0);
 console.log("ASCII character : " + result)
}

// convertASCII("h")


// 21. Write a ts program to find power of a number using for loop.

let powerofnumber=(b,e)=>{
      
    var b, e, r = 1, i = 1;
    
    // b = base
    // e = exponent
    // r = result
    // i = looping incremental
    
    // b = 5;
    // e = 4;

    // finding power of base value by equiping exponent value    
    while(i <= e)
    {
        r *= b;
        i++;
    }
    
    console.log("Result:: " + b + "^" + e + " = " + r ) 
}

// powerofnumber(4,5)

// 22. Write a ts program to find all factors of a number.

let factors=(num:number)=>{

    for(let i=0; i<=num; i++){
        if(num%i==0){
            console.log("the factor of :"+num +" is : "+i)
        }
    }
}

// factors(12)

// 23. Write a ts program to calculate factorial of a number.

let factorial=(num:number)=>{

    if(num<0){
        console.log("Factorial of negative is not possible")
    }else if(num==0){
        console.log("Factorial of 0 is 1")
    }else{
        let fact=1;
        for(let i=1; i<num; i++){
            fact +=i;

        }
        console.log(`The factorial of ${num} is ${fact}.`);
    }


}
// factorial(-12)

// 24. Write a ts program to find HCF (GCD) of two numbers.

let hcf=(number1:number,number2:number)=>{
    let hcf;
  
// looping from 1 to number1 and number2
for (let i = 1; i <= number1 && i <= number2; i++) {

    // check if is factor of both integers
    if( number1 % i == 0 && number2 % i == 0) {
        hcf = i;
    }
}

// display the hcf
console.log(`HCF of ${number1} and ${number2} is ${hcf}.`);
}

// hcf(60,72)

// 25. Write a ts program to find LCM of two numbers.
let lcm=(num1:number,num2:number)=>{
    let min = (num1 > num2) ? num1 : num2;

    // while loop
    while (true) {
        if (min % num1 == 0 && min % num2 == 0) {
            console.log(`The LCM of ${num1} and ${num2} is ${min}`);
            break;
        }
        min++;
    }
   
    }
    


// lcm(60,72)

// 26. Write a ts program to check whether a number is Prime number or not.
let prime=(number:number)=>{
    let isPrime = true;

    if (number === 1) {
        console.log("1 is neither prime nor composite number.");
    } else if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    
        if (isPrime) {
            console.log(`${number} is a prime number`);
        } else {
            console.log(`${number} is a not prime number`);
        }
    }
    
    // check if number is less than 1
    else {
        console.log("The number is not a prime number.");
    }
}
//  prime(13)

// 27. Write a ts program to print all Prime numbers between 1 to n.
// function isPrime( n){
//       if(n == 1 || n == 0) return false;
//       for(var i = 2; i < n; i++){
//         if(n % i == 0) return false;
//       }
//       return true;
// }
// var N = 100;
//   for(var i = 1; i <= N; i++){
//       if(isPrime(i)) {
//         console.log( i );
//       }
// }

// isPrime(55)

// 28. Write a ts program to find sum of all prime numbers between 1 to n.

function checkPrime(val){
    for(var i=2; i < val; i++){
      if(val % i === 0){
        return false;
      }
    }
    return true;
  }

  function sumPrimes(num) {
    var answer = 0;
    for(var i=2; i <= num; i++){
      if(checkPrime(i)){
        answer += i;
      }
    }
    console.log(answer);
  }
  
//   sumPrimes(7)

// 29. Write a ts program to find all prime factors of a number.





// 30. Write a ts program to check whether a number is Armstrong number or not.
let Armstrong=(number:number)=>{
    let sum=0;
    let temp=number;
    while(temp>0){
        let rem=temp%10;
        sum +=rem*rem*rem;
        temp=parseInt(temp/10);
    }
    if (sum == number) {
        console.log(`${number} is an Armstrong number`);
    }
    else {
        console.log(`${number} is not an Armstrong number.`);
    }
}

// Armstrong(153)

// 31. Write a ts program to print all Armstrong numbers between 1 to n.
let printArmstrong=(lowerNumber:number,highnumber)=>{

    for(let i=lowerNumber; i<highnumber; i++){
     let numOfDigit=i.toString().length;
    let sum=0;
    let temp=i;

    while(temp>0){
        let rem=temp%10;
        sum +=rem**numOfDigit;
        temp=parseInt(temp/10);
    }
    if(sum==i){
        console.log("Armstrong Number : "+ i)
    }
}
}

// printArmstrong(1,1643)

// 32. Write a ts program to check whether a number is Perfect number or not.

let perfect=(number:number)=>{
    let sum=0;
    for(let i=1; i<number; i++){
        if(number%i==0){
            sum+=i;
        }
    }
    if(sum==number){
        console.log(`${number} is perfect number.`);
    }else{
        console.log(`${number} is not an perfect number.`);
    }
}

// perfect(7)

// 33. Write a ts program to print all Perfect numbers between 1 to n.

let printPerfect=(lowerNum:number,highNum:number)=>{
    for(let i=lowerNum; i<highNum; i++){
        let sum=0;
        let temp=i;
    
        for(let j=1; j<temp; j++){
            if(temp%j==0){
                sum+=j;
            }
        }
        if(sum==i){
            console.log("perfect Number : " + i)
        }
    }
}
// printPerfect(1,10)

// 34. Write a ts program to check whether a number is Strong number or not.

let isStrong=(num:number)=>{

    let sum=0;
    let r=0;
    let temp=num;
    while(num){
        let i=1;
        let fact=1;

        r=num%10;
        while(i<=r){
         fact=fact*i;
         i++
        }
        sum=sum+fact;
        num=Math.floor(num/10)
    }
    if(temp==sum){
        console.log(`${temp} : is a strong Number`)
    }else{
        console.log(`${temp} : is a not strong Number`)
    }
}

// isStrong(145)

// 35. Write a ts program to print all Strong numbers between 1 to n.
let printStrong=(lowerNum:number,highNum:number)=>{
 for(let j=lowerNum; j<highNum; j++){
    let sum=0;
    let r=0;
    let temp=j;
    while(j){
        let i=1;
        let fact=1;

        r=j%10;
        while(i<=r){
         fact=fact*i;
         i++
        }
        sum=sum+fact;
        j=Math.floor(j/10)
    }
    if(temp==sum){
        console.log(`${temp} : is a strong Number`)
    }
}
}
// printStrong(1,200)

// 36. Write a ts program to print Fibonacci series up to n terms.

let Fibonacci=(Number:number)=>{
    let n1=0;
    let n2=1;
    let nextterm;
    for(let i=0; i<Number; i++){
        console.log(n1);
        nextterm=n1+n2;
        n1=n2;
        n2=nextterm
    }
}
// Fibonacci(10)

// 37. Write a ts program to find one's complement of a binary number.

let complementOfBinary=(number)=>{
    number=number.toString();
var reverse = number.split('').map(x => x === "0" ? "1" : "0").join('');    
console.log("Number: " + reverse);
}
// complementOfBinary(101010011)

// 39. Write a ts program to convert Binary to Octal number system.

function flip (c) {return (c == '0')? '1': '0';}
function printOneAndTwosComplement(bin){
    var n = bin.length;
    var i;
 
    var ones, twos;
    ones = twos = "";
    for (i = 0; i < n; i++)
        ones += flip(bin[i]);
    twos = ones;
    twos = twos.split('')
    for (i = n - 1; i >= 0; i--)
    {
        if (ones[i] == '1')
            twos[i] = '0';
        else
        {
            twos[i] = '1';
            break;
        }
    }
    twos = twos.join('')
    if (i == -1)
        twos = '1' + twos;
 
 
     console.log( "1's complement: " + ones );
    console.log( "2's complement: " + twos );
}

// printOneAndTwosComplement(11011);

// 40. Write a ts program to convert Binary to Decimal number system.
let binaryToDecimal=(binary:any)=>{

var digit = parseInt(binary, 2);
console.log(digit);
}

// binaryToDecimal(1010100)

// 41. Write a ts program to convert Binary to Hexadecimal number system.

let binaryToHexa=(binary:any)=>{
var digit=parseInt(binary,2).toString(16).toUpperCase()
console.log(digit)
}

// binaryToHexa(1010)


// 42. Write a ts program to convert Octal to Binary number system.

let octTobin=(oct:any)=>{
    var digit=parseInt(oct,8).toString(2);
    console.log(digit)
    }
// octTobin(540)

// 43. Write a ts program to convert Octal to Decimal number system.

let octTODecimal=(oct:any)=>{
    var digit=parseInt(oct,8);
    console.log(digit)
}

// octTODecimal(140)

// 44. Write a ts program to convert Octal to Hexadecimal number system.
let octToHexa=(oct:any)=>{
    var digit=parseInt(oct,8).toString(16).toUpperCase();
    console.log(digit)
}
// octToHexa(5130)

// 45. Write a ts program to convert Decimal to Binary number system.

let decToBin=(decimal:any)=>{
    let digit=parseInt(decimal,10).toString(2)
    console.log(digit)
}
// decToBin(2233)

// 46. Write a ts program to convert Decimal to Octal number system.
let decToOct=(decimal:any)=>{
    let digit=parseInt(decimal,10).toString(8)
    console.log(digit)
}
// decToOct(2233)

// 47. Write a ts program to convert Decimal to Hexadecimal number system.
let decToHexa=(decimal:any)=>{
    let digit=parseInt(decimal,10).toString(16).toUpperCase()
    console.log(digit)
}
// decToHexa(828)

// 48. Write a ts program to convert Hexadecimal to Binary number system.
let hexaToBin=(hexa)=>{
    let digit=parseInt(hexa, 16).toString(2)
    console.log(digit)
}

// hexaToBin('aa64')

// 49. Write a ts program to convert Hexadecimal to Octal number system.
let hexaToOct=(hexa)=>{
    let digit=parseInt(hexa, 16).toString(8)
    console.log(digit)
}

// hexaToOct('aa64')

// 50. Write a ts program to convert Hexadecimal to Decimal number system.
let hexaToDec=(hexa)=>{
    let digit=parseInt(hexa, 16)
    console.log(digit)
}

// hexaToDec('aa64')

// 51. Write a ts program to print Pascal triangle upto n rows.
function generatePascal(n:number){
    //2D array
    var arr = [];
    var tmp;
    for(var i=0;i<n;i++){
        //Each element in array is in turn an array
        // The index is the row number and the array values are the row values
        arr[i]=[];
        for(var j=0; j<=i; j++){
            //If index is last element the value is always 1
            if(j==i){
                arr[i].push(1);
            }else{
                //The following line adds up the two numbers directly above this element.
                tmp = (!!arr[i-1][j-1]?arr[i-1][j-1]:0)+(!!arr[i-1][j]?arr[i-1][j]:0);
                arr[i].push(tmp);
            }
        }
    }
    console.log(arr);
}
generatePascal(1)