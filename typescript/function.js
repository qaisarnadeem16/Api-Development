// to find max and minimum b/w two number;
function checkNum(num1, num2, num3, num4) {
    if (num4 != undefined) {
        if (num1 > num2 && num1 > num3 && num1 > num4) {
            console.log(num1 + " : Num1 is maximum number");
        }
        else if (num2 > num1 && num2 > num3 && num2 > num4) {
            console.log(num2 + " : Num2 is maximum number");
        }
        else if (num3 > num1 && num3 > num2 && num3 > num4) {
            console.log(num3 + " : Num3 is maximum number");
        }
        else {
            console.log(num4 + " : Num3 is maximum number");
        }
    }
}
// checkNum(12,33,1)
var addnum = function () {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 1; i < num.length; i++) {
        sum = sum + num[i];
    }
    console.log(sum);
};
// addnum(1,2)
var factorial = function (number) {
    if (number < 0) {
        return 1;
    }
    else {
        return (number * factorial(number - 1));
    }
};
console.log(factorial(9));
// to find even and odd
function checkEvenOdd(number) {
    if (number % 2 == 0) {
        console.log(number + " :: Number is Even");
    }
    else {
        console.log(number + " : Number is odd");
    }
}
// checkEvenOdd(32)
function disp_details(id, name, mail_id) {
    console.log("ID:", id);
    console.log("Name", name);
    if (mail_id != undefined)
        console.log("Email Id", mail_id);
}
// disp_details(123,"John");
// disp_details(111,"mary","mary@xyz.com");
