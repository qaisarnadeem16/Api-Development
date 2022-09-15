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
    console.log("the lenght of Number :"+ i)
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
 
 
 productOfDigits(3497)

//  16. Write a ts program to enter a number and print its reverse.

