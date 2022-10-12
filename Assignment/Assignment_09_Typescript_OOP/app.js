// 1. Write a TypeScript program to list the properties of a TypeScript object
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name,sclass,rollno
var listProp = function () {
    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
    var text = "";
    for (var i in student) {
        text = text + student[i] + " ";
    }
    console.log(text);
};
// listProp()
// 2. Write a TypeScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
var delRollNo = function () {
    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
    var text = "";
    for (var i in student) {
        text = text + student[i] + " ";
    }
    console.log("Before delete :       ".concat(text));
    delete student.rollno;
    var text1 = "";
    for (var i in student) {
        text1 = text1 + student[i] + " ";
    }
    console.log("After delete :        ".concat(text1));
};
//  delRollNo()
// 3. Write a TypeScript program to get the length of a TypeScript object.   
// Sample object :
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
var lengthObj = function () {
    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
    var length = Object.keys(student).length;
    console.log(length);
};
// lengthObj()
// 4. Write a TypeScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.   
// var library = [ 
//    {
//        author: 'Bill Gates',
//        title: 'The Road Ahead',
//        readingStatus: true
//    },
//    {
//        author: 'Steve Jobs',
//        title: 'Walter Isaacson',
//        readingStatus: true
//    },
//    {
//        author: 'Suzanne Collins',
//        title:  'Mockingjay: The Final Book of The Hunger Games', 
//        readingStatus: false
//    }];
var display = function () {
    var library = [
        {
            author: 'Bill Gates',
            title: 'The Road Ahead',
            readingStatus: true
        },
        {
            author: 'Steve Jobs',
            title: 'Walter Isaacson',
            readingStatus: true
        },
        {
            author: 'Suzanne Collins',
            title: 'Mockingjay: The Final Book of The Hunger Games',
            readingStatus: false
        }
    ];
    for (var i = 0; i < library.length; i++) {
        // console.log(library[i]);
        var book = "  ".concat(library[i].title, " Written By : ").concat(library[i].author);
        library[i].readingStatus == true ? console.log("Already read  ".concat(book)) : console.log("Still Not read  ".concat(book));
    }
};
var cylinder = /** @class */ (function () {
    function cylinder(height, diameter) {
        this.height = height;
        this.diameter = diameter;
    }
    cylinder.prototype.vol = function () {
        var r = this.diameter / 2;
        var result = this.height * Math.PI * r * r;
        console.log(result);
    };
    return cylinder;
}());
var cyl = new cylinder(7, 4);
// cyl.vol()
// 6. Write a Bubble Sort algorithm in TypeScript.   
// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
// Sample Data: [6,4,0, 3,-2,1]
// Expected Output : [-2, 0, 1, 3, 4, 6]
var bubbleSort = function () {
    var Data = [6, 4, 0, 3, -2, 1];
    for (var i = 0; i < Data.length; i++) {
        for (var j = 0; j < (Data.length - i - 1); j++) {
            // console.log(Data[j]);
            if (Data[j] > Data[j + 1]) {
                var temp = Data[j];
                Data[j] = Data[j + 1];
                Data[j + 1] = temp;
                console.log(Data);
            }
        }
    }
    console.log(Data);
};
bubbleSort();
// Write a TypeScript program which returns a subset of a string.
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]
var subSet = function () {
    var str = "Dog";
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        for (var j = i + 1; j < str.length + 1; j++) {
            var a = str.slice(i, j);
            // console.log(a);
            arr.splice(0, 0, a);
        }
    }
    console.log(arr);
};
// subSet()
// 8. Write a TypeScript program to create a Clock.   
// Note: The output will come every second.
// Expected Console Output :
// "14:37:42"
// "14:37:43"
// "14:37:44"
// "14:37:45"
// "14:37:46"
// "14:37:47"
function Clock() {
    var time = new Date();
    var hours = time.getHours().toString();
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();
    if (hours.length < 2) {
        hours = '0' + hours;
    }
    if (minutes.length < 2) {
        minutes = '0' + minutes;
    }
    if (seconds.length < 2) {
        seconds = '0' + seconds;
    }
    var clockStr = hours + ' : ' + minutes + ' : ' + seconds;
    // clock.textContent = clockStr;
    console.log(clockStr);
}
//   Clock();
//   setInterval(Clock, 1000);
// 9. Write a TypeScript program to calculate the area and perimeter of a circle.   
// Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.
var circle = /** @class */ (function () {
    function circle(radius) {
        this.radius = radius;
    }
    circle.prototype.area = function () {
        var area = 2 * Math.PI * this.radius * this.radius;
        console.log(area);
    };
    circle.prototype.perimeter = function () {
        var perimeter = 2 * Math.PI * this.radius;
        console.log(perimeter);
    };
    return circle;
}());
var cir = new circle(6);
cir.area();
cir.perimeter();
