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
// printUnique()
// 13. Write a ts program to count total number of duplicate elements in an array.
var duplicateCount = function () {
    var arr = [5, 5, 5, 2, 2, 2, 2, 2, -2, 3, -4, 5, -6, -78, 8, 99, 9, 4];
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++;
                break;
            }
        }
    }
    console.log(count);
};
// duplicateCount()
// 14. Write a ts program to delete all duplicate elements from an array.
var duplicateDel = function () {
    var arr = [5, 5, 5, 2, 2, 2, 2, 2, -2, 3, -4, 5, -6, -78, 8, 99, 9, 4];
    var arr2 = [];
    arr.forEach(function (el) {
        if (!arr2.includes(el)) {
            arr2.push(el);
        }
    });
    console.log(arr2);
};
// duplicateDel()
// 15. Write a ts program to merge two array to third array.
var mergeArr = function () {
    var arr = [5, 5, 5, 2, 2, 2, 2, 2, -2, 3, -4];
    var arr2 = [5 - 2, 3, -4, 5, -6, -78, 8, 99, 9, 4];
    var arr3 = arr.concat(arr2);
    console.log(arr3);
};
// mergeArr()
// 16. Write a ts program to find reverse of an array.
var reverseArr = function () {
    var arr = [5, 5, 5, 2, 2, 2, 2, 2, -2, 3, -4];
    arr.reverse();
    console.log(arr);
};
// reverseArr()
// 17. Write a ts program to put even and odd elements of array in two separate array.
var sepEvenOdd = function () {
    var arr = [5, 5, 5, 2, 2, 2, 2, 2, -2, 3, -4];
    var even = [];
    var odd = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            even.push(arr[i]);
        }
        else {
            odd.push(arr[i]);
        }
    }
    console.log("Even array ".concat(even));
    console.log("Odd array ".concat(odd));
};
// sepEvenOdd()
// 18. Write a ts program to search an element in an array.
var searchElement = function (element) {
    var arr = [5, 5, 5, 2, 2, 2, 2, 2, -2, 3, -4];
    var e = arr.indexOf(element);
    if (e > 0) {
        console.log("Element is found");
    }
    else {
        {
            console.log("Element is Not found");
        }
    }
};
// searchElement(2)
// 19. Write a ts program to sort array elements in ascending or descending order.
var sortArr = function () {
    var arr = [5, 5, 5, 1, 2, 0, 2, 2, -2, 3, -4, 5, -6, -78, 8, 99, 9, 4];
    arr.sort();
    console.log("Ascending Order of array ".concat(arr));
    arr.reverse();
    console.log("escending Order of array ".concat(arr));
};
// sortArr()
// 20. Write a ts program to sort even and odd elements of array separately.
var SepEvenOdd = function () {
    var arr = [5, 5, 5, 2, 2, 2, 2, 2, -2, 3, -4];
    var even = [];
    var odd = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            even.push(arr[i]);
        }
        else {
            odd.push(arr[i]);
        }
    }
    console.log("Even array ".concat(even));
    console.log("Odd array ".concat(odd));
};
// SepEvenOdd()
// 21. Write a ts program to left rotate an array.
function rotLeft(rotation) {
    var arr = [1, 2, 3, 4, 5];
    var rotateArr = arr.concat();
    for (var i = 0; i < rotation; i++) {
        var front = rotateArr.shift();
        rotateArr.push(front);
    }
    console.log("Array before Rotation ".concat(arr));
    console.log("Array After Rotation ".concat(rotateArr));
}
//   rotLeft(4)
// 22. Write a ts program to right rotate an array.
function rotRight(rotation) {
    var arr = [1, 2, 3, 4, 5];
    var rotateArr = arr.concat();
    for (var i = 0; i < rotation; i++) {
        var front = rotateArr.pop();
        rotateArr.unshift(front);
    }
    console.log("Array before Rotation ".concat(arr));
    console.log("Array After Rotation ".concat(rotateArr));
}
rotRight(1);
