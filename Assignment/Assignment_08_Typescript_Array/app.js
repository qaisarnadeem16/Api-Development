// 1. Write a ts program to read and print elements of array.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var printArr = function () {
    var arr = [1, 2, 3, 4, 5, 6, 78, 8, 99, 4];
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};
// printArr()
// 2. Write a ts program to print all negative elements in an array.
var printNegative = function () {
    var arr = [1, -2, 3, -4, 5, -6, -78, 8, 99, 4];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            console.log(arr[i]);
        }
    }
};
// printNegative()
// 3. Write a ts program to find sum of all array elements. 
var arrSum = function () {
    var arr = [1, 2, 3, 4, 5, 6, 78, 8, 99, 4];
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
};
// arrSum()
// 4. Write a ts program to find maximum and minimum element in an array.
var minMax = function () {
    var arr = [1, 2, 3, 4, 5, 6, 78, 8, 99, 4];
    var min = Math.min.apply(Math, arr);
    var max = Math.max.apply(Math, arr);
    console.log("Minimum number is ".concat(min));
    console.log("Maximum number is ".concat(max));
};
// minMax()
// 5. Write a ts program to find second largest element in an array.
var secondLargest = function () {
    var arr = [1, 2, 3, 4, 5, 6, 78, 8, 99, 4];
    var max = Math.max.apply(Math, arr);
    arr.splice(arr.indexOf(max), 1);
    var secondMax = Math.max.apply(Math, arr);
    console.log("Second largest element in array is ".concat(secondMax));
};
// secondLargest()
// 6. Write a ts program to count total number of even and odd elements in an array.
var countEvenOdd = function () {
    var arr = [1, 2, 3, 4, 5, 6, 78, 8, 99, 4];
    var even = 0;
    var odd = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            even += 1;
        }
        else {
            odd += 1;
        }
    }
    console.log("Total Even in Array is ".concat(even));
    console.log("Total Even in Array is ".concat(odd));
};
// countEvenOdd()
// 7. Write a ts program to count total number of negative elements in an array.
var totalNegative = function () {
    var arr = [1, -2, 3, -4, 5, -6, -78, 8, 99, 4];
    var neg = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            neg += 1;
        }
    }
    console.log("Total number of negative elements in an array ".concat(neg, " "));
};
// totalNegative()
// 8. Write a ts program to copy all elements from an array to another array.
var copyArr = function () {
    var arr = [1, -2, 3, -4, 5, -6, -78, 8, 99, 4];
    var arr2 = __spreadArray([], arr, true);
    console.log(arr2);
};
// copyArr()
// 9. Write a ts program to insert an element in an array.
var insertElement = function () {
    var arr = ['A', 'B', 'E'];
    arr[2] = 'C';
    console.log(arr);
};
// insertElement()
// 10. Write a ts program to delete an element from an array at specified position.
var deleteElement = function () {
    var arr = [1, -2, 3, -4, 5, -6, -78, 8, 99, 4];
    var a = arr.splice(3, 1, 44);
    console.log(arr);
};
// deleteElement()
// 11. Write a ts program to count frequency of each element in an array.
var countFreq = function () {
    var arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
    var counts = {};
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    console.log(counts[5], counts[2], counts[9], counts[4]);
};
// countFreq()
// 12. Write a ts program to print all unique elements in the array.
var printUnique = function () {
    var arr = [5, 5, 5, 2, 2, 2, 2, 2, -2, 3, -4, 5, -6, -78, 8, 99, 9, 4];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 9 && arr[i] > 2) {
            console.log(arr[i]);
        }
    }
};
printUnique();
