// 1. Write a ts program to print all natural numbers from 1 to n. - using while loop
function naturalNumber(n) {
    var i = 1;
    while (i <= n) {
        console.log("Natural Number : " + i);
        i++;
    }
}
// naturalNumber(100);
// 2. Write a ts program to print all natural numbers in reverse (from n to 1). - using while loop
function naturalNumberReverse() {
    var i = 10;
    var n = 1;
    while (i >= n) {
        console.log("Natural Number : " + i);
        i--;
    }
}
// naturalNumberReverse();
// 3. Write a ts program to print all alphabets from a to z. - using while loop
function alphabets() {
    var first = "a", last = "z";
    var i = first.charCodeAt(0);
    while (i < last.charCodeAt(0)) {
        console.log(eval("String.fromCharCode(" + i + ")") + " ");
        i++;
    }
}
// alphabets();
// 4. Write a ts program to print all even numbers between 1 to 100. - using while loop
function evenNumber() {
    var i = 1;
    while (i < 100) {
        if (i % 2 == 0) {
            console.log("Even Number :" + i);
        }
        i++;
    }
}
// evenNumber();
// 5. Write a ts program to print all odd number between 1 to 100.
function oddNumber() {
    var i = 1;
    while (i < 100) {
        if (i % 2 != 0) {
            console.log("Even Number :" + i);
        }
        i++;
    }
}
// oddNumber();
// 6. Write a ts program to find sum of all natural numbers between 1 to n
function sumNatural(n) {
    var i = 1;
    var sum = 0;
    while (i < n) {
        sum = sum + i;
        i++;
    }
    console.log("Sum of natural number :" + sum);
}
// sumNatural(10);
// 7. Write a ts program to find sum of all even numbers between 1 to n.
function sumEven(n) {
    var i = 1;
    var sum = 0;
    while (i < n) {
        if (i % 2 == 0) {
            sum = sum + i;
        }
        i++;
    }
    console.log("Sum of natural number :" + sum);
}
// sumEven(10);
// 8. Write a ts program to find sum of all odd numbers between 1 to n.
function sumOdd(n) {
    var i = 1;
    var sum = 0;
    while (i < n) {
        if (i % 2 != 0) {
            sum = sum + i;
        }
        i++;
    }
    console.log("Sum of natural number :" + sum);
}
// sumOdd(10);
// 9. Write a ts program to print multiplication table of any number.
function multiplicationTable(n) {
    console.log("Table of :" + n);
    for (var i = 0; i <= 10; i++) {
        console.log(n + "    " + i + "    " + n * i);
    }
}
// multiplicationTable(3)
// 10. Write a ts program to count number of digits in a number.
function countDigit(num) {
    var i = num.toString().length;
    console.log("the length of Number :" + i);
}
//  countDigit(1848969.89326486);
// 11. Write a ts program to find first and last digit of a number.
function firstLastNumber() {
    var arr = [1, 4, 5, 6, 6, 7, 8, 8, 9, 8, 9];
    console.log("First number   :" + arr[0]);
    console.log("last number    :" + arr[arr.length - 1]);
}
// firstLastNumber();
// 12. Write a ts program to find sum of first and last digit of a number.
function sumofFirstLast(n) {
    function firstDigit(n) {
        while (n >= 10)
            n = n / 10;
        return Math.floor(n);
    }
    function lastDigit(n) {
        return Math.floor(n % 10);
    }
    var sum = firstDigit(n) + lastDigit(n);
    console.log("sum od first and digit  : " + sum);
}
// sumofFirstLast(112387378)
// 13. Write a ts program to swap first and last digits of a number.
function swapFirstLast(n) {
    function firstDigit(n) {
        while (n >= 10)
            n = n / 10;
        return Math.floor(n);
    }
    function lastDigit(n) {
        return Math.floor(n % 10);
    }
    var a = firstDigit(n);
    var b = lastDigit(n);
    console.log(a, b);
    var temp;
    temp = a;
    a = b;
    b = temp;
    console.log(a, b);
}
// swapFirstLast(112387378)
// 14. Write a ts program to calculate sum of digits of a number.
function sumOfDigits(value) {
    var sum = 0;
    while (value) {
        sum += value % 10;
        value = Math.floor(value / 10);
    }
    console.log(sum);
}
// sumOfDigits(346)
// 15. Write a ts program to calculate product of digits of a number.
function productOfDigits(value) {
    var sum = 1;
    while (value) {
        sum *= value % 10;
        value = Math.floor(value / 10);
    }
    console.log(sum);
}
//  productOfDigits(3497)
//  16. Write a ts program to enter a number and print its reverse.
var reverseDigits = function (num) {
    var rev_num = 0;
    while (num > 0) {
        rev_num = rev_num * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    console.log(rev_num);
};
// reverseDigits(480893);
// 17. Write a ts program to check whether a number is palindrome or not.
var reverseDigits1 = function (num) {
    var rev_num = 0;
    while (num > 0) {
        rev_num = rev_num * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    // console.log(num);
    console.log(rev_num);
};
var palindrome = function (n) {
    var rev_n = reverseDigits1(n);
    console.log(n);
    if (rev_n == n) {
        console.log('number is palindrome ');
    }
    else {
        console.log('number is not palindrome ');
    }
};
// palindrome(1221)
// 18. Write a ts program to find frequency of each digit in a given integer.
var frequencyDigit = function (n) {
    var d = 7;
    var c = 0;
    while (n > 0) {
        if (n % 10 == d) {
            c++;
            n = n / 10;
        }
    }
    console.log(c + "is fre");
};
// frequencyDigit(1777)
// 19. Write a ts program to enter a number and print it in words.
var convertToWord = function (num) {
    var l = num.length;
    if (l == 0) {
        console.log("empty string");
        return;
    }
    if (l > 4) {
        console.log("Length more than 4 is not supported");
        return;
    }
    var single_digits = ["zero", "one", "two", "three",
        "four", "five", "six", "seven",
        "eight", "nine"];
    var two_digits = ["", "ten", "eleven", "twelve",
        "thirteen", "fourteen", "fifteen",
        "sixteen", "seventeen", "eighteen",
        "nineteen"];
    var tens_multiple = ["", "", "twenty", "thirty", "forty",
        "fifty", "sixty", "seventy", "eighty",
        "ninety"];
    var tens_power = ["hundred", "thousand"];
    // Used for debugging purpose only
    console.log(num, ":", " ");
    // For single digit number
    if (l == 1) {
        console.log(single_digits[num.charCodeAt(0) - 48]);
        return;
    }
    // Iterate while num is not '\0'
    var x = 0;
    while (x < num.length) {
        // Code path for first 2 digits
        if (l >= 3) {
            if (num.charCodeAt(x) - 48 != 0) {
                console.log(single_digits[num.charCodeAt(x) - 48], " ");
                console.log(tens_power[l - 3], " ");
                // here len can be 3 or 4
            }
            l -= 1;
        }
        // Code path for last 2 digits
        else {
            // Need to explicitly handle
            // 10-19. Sum of the two digits
            // is used as index of "two_digits"
            // array of strings
            if (num.charCodeAt(x) - 48 == 1) {
                var sum = (num.charCodeAt(x) - 48 + num.charCodeAt(x + 1) - 48);
                console.log(two_digits[sum]);
                return;
            }
            // Need to explicitly handle 20
            else if (num.charCodeAt(x) - 48 == 2 &&
                num.charCodeAt(x + 1) - 48 == 0) {
                console.log("twenty");
                return;
            }
            // Rest of the two digit
            // numbers i.e., 21 to 99
            else {
                var i = num.charCodeAt(x) - 48;
                if (i > 0)
                    console.log(tens_multiple[i]);
                else
                    console.log("");
                x += 1;
                if (num.charCodeAt(x) - 48 != 0)
                    console.log(single_digits[num.charCodeAt(x) - 48]);
            }
        }
        x += 1;
    }
};
// convertToWord("5455")
// 20. Write a ts program to print all ASCII character with their values.
var convertASCII = function (c) {
    var result = c.charCodeAt(0);
    console.log("ASCII character : " + result);
};
// convertASCII("h")
// 21. Write a ts program to find power of a number using for loop.
var powerofnumber = function (b, e) {
    var b, e, r = 1, i = 1;
    // b = base
    // e = exponent
    // r = result
    // i = looping incremental
    // b = 5;
    // e = 4;
    // finding power of base value by equiping exponent value    
    while (i <= e) {
        r *= b;
        i++;
    }
    console.log("Result:: " + b + "^" + e + " = " + r);
};
// powerofnumber(4,5)
// 22. Write a ts program to find all factors of a number.
var factors = function (num) {
    for (var i = 0; i <= num; i++) {
        if (num % i == 0) {
            console.log("the factor of :" + num + " is : " + i);
        }
    }
};
// factors(12)
// 23. Write a ts program to calculate factorial of a number.
var factorial = function (num) {
    if (num < 0) {
        console.log("Factorial of negative is not possible");
    }
    else if (num == 0) {
        console.log("Factorial of 0 is 1");
    }
    else {
        var fact = 1;
        for (var i = 1; i < num; i++) {
            fact += i;
        }
        console.log("The factorial of ".concat(num, " is ").concat(fact, "."));
    }
};
// factorial(-12)
// 24. Write a ts program to find HCF (GCD) of two numbers.
var hcf = function (number1, number2) {
    var hcf;
    // looping from 1 to number1 and number2
    for (var i = 1; i <= number1 && i <= number2; i++) {
        // check if is factor of both integers
        if (number1 % i == 0 && number2 % i == 0) {
            hcf = i;
        }
    }
    // display the hcf
    console.log("HCF of ".concat(number1, " and ").concat(number2, " is ").concat(hcf, "."));
};
// hcf(60,72)
// 25. Write a ts program to find LCM of two numbers.
var lcm = function (num1, num2) {
    var min = (num1 > num2) ? num1 : num2;
    // while loop
    while (true) {
        if (min % num1 == 0 && min % num2 == 0) {
            console.log("The LCM of ".concat(num1, " and ").concat(num2, " is ").concat(min));
            break;
        }
        min++;
    }
};
// lcm(60,72)
// 26. Write a ts program to check whether a number is Prime number or not.
var prime = function (number) {
    var isPrime = true;
    if (number === 1) {
        console.log("1 is neither prime nor composite number.");
    }
    else if (number > 1) {
        for (var i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log("".concat(number, " is a prime number"));
        }
        else {
            console.log("".concat(number, " is a not prime number"));
        }
    }
    // check if number is less than 1
    else {
        console.log("The number is not a prime number.");
    }
};
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
function checkPrime(val) {
    for (var i = 2; i < val; i++) {
        if (val % i === 0) {
            return false;
        }
    }
    return true;
}
function sumPrimes(num) {
    var answer = 0;
    for (var i = 2; i <= num; i++) {
        if (checkPrime(i)) {
            answer += i;
        }
    }
    console.log(answer);
}
//   sumPrimes(7)
// 29. Write a ts program to find all prime factors of a number.
// 30. Write a ts program to check whether a number is Armstrong number or not.
var Armstrong = function (number) {
    var sum = 0;
    var temp = number;
    while (temp > 0) {
        var rem = temp % 10;
        sum += rem * rem * rem;
        temp = parseInt(temp / 10);
    }
    if (sum == number) {
        console.log("".concat(number, " is an Armstrong number"));
    }
    else {
        console.log("".concat(number, " is not an Armstrong number."));
    }
};
// Armstrong(153)
// 31. Write a ts program to print all Armstrong numbers between 1 to n.
var printArmstrong = function (lowerNumber, highnumber) {
    for (var i = lowerNumber; i < highnumber; i++) {
        var numOfDigit = i.toString().length;
        var sum = 0;
        var temp = i;
        while (temp > 0) {
            var rem = temp % 10;
            sum += Math.pow(rem, numOfDigit);
            temp = parseInt(temp / 10);
        }
        if (sum == i) {
            console.log("Armstrong Number : ", i);
        }
    }
};
// printArmstrong(1,1643)
// 32. Write a ts program to check whether a number is Perfect number or not.
var perfect = function (number) {
    var sum = 0;
    for (var i = 1; i < number; i++) {
        if (number % i == 0) {
            sum += i;
        }
    }
    if (sum == number) {
        console.log("".concat(number, " is perfect number."));
    }
    else {
        console.log("".concat(number, " is not an perfect number."));
    }
};
// perfect(7)
// 33. Write a ts program to print all Perfect numbers between 1 to n.
var printPerfect = function (lowerNum, highNum) {
    for (var i = lowerNum; i < highNum; i++) {
        var sum = 0;
        var temp = i;
        for (var j = 1; j < temp; j++) {
            if (temp % j == 0) {
                sum += j;
            }
        }
        if (sum == i) {
            console.log("perfect Number : ", i);
        }
    }
};
printPerfect(1, 10);
