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
// bubbleSort()
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
// let cir=new circle(6)
// cir.area()
// cir.perimeter()
// 10. Write a TypeScript program to sort an array of TypeScript objects.   
// Sample Object :
// var library = [ 
//    {
//        title:  'The Road Ahead',
//        author: 'Bill Gates',
//        libraryID: 1254
//    },
//    {
//        title: 'Walter Isaacson',
//        author: 'Steve Jobs',
//        libraryID: 4264
//    },
//    {
//        title: 'Mockingjay: The Final Book of The Hunger Games',
//        author: 'Suzanne Collins',
//        libraryID: 3245
//    }];
// Expected Output:
// [[object Object] {
//   author: "Walter Isaacson",
//   libraryID: 4264,
//   title: "Steve Jobs"
// }, [object Object] {
//   author: "Suzanne Collins",
//   libraryID: 3245,
//   title: "Mockingjay: The Final Book of The Hunger Games"
// }, [object Object] {
//   author: "The Road Ahead",
//   libraryID: 1254,
//   title: "Bill Gates"
// }]
var books = /** @class */ (function () {
    function books() {
    }
    return books;
}());
var library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }
];
var sortedBooks = library.sort(function (a, b) { return (a.libraryID < b.libraryID) ? 1 : -1; });
// console.log(sortedBooks);
// 11. Write a TypeScript function to print all the methods in an TypeScript object.   
// Test Data :
// console.log(all_properties(Array));
// ["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]
var allMethods = function (obj) {
    return Object.getOwnPropertyNames(obj).filter(function (pro) { return typeof obj[pro] == "function"; });
};
// console.log(allMethods(Array));
var all_properties = function (obj) {
    return Object.getOwnPropertyNames(obj);
};
// console.log(all_properties(Array));
// 12. Write a TypeScript function to parse an URL. 
var parseUrl = function () {
    var url = new URL("http://test.example.com/dir/subdir/file.html#hash");
    console.log((url));
};
// parseUrl()
// 13. Write a TypeScript function to retrieve all the names of object's own and inherited properties.
var retrieve = function () {
    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
    var a = [];
    for (var x in student) {
        a = a + student[x] + " ";
    }
    console.log(a);
    console.log(Object.getOwnPropertyNames(student));
};
// retrieve();
// 14. Write a TypeScript function to retrieve all the values of an object's properties.
var retrieveValue = function () {
    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
    var a = [];
    for (var x in student) {
        a = a + student[x] + " ";
    }
    console.log(a);
};
// retrieveValue()
// 15. Write a TypeScript function to convert an object into a list of `[key, value]` pairs.
var list = function () {
    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
    var result = Object.keys(student).map(function (key) { return [key, student[key]]; });
    console.log(result);
    return result;
};
// list()
// 16. Write a TypeScript function to get a copy of the object where the keys have become the values and the values the keys.
function invert_key_value(obj) {
    var result = {};
    var keys = _keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
        result[obj[keys[i]]] = keys[i];
    }
    return result;
}
function _keys(obj) {
    if (!isObject(obj))
        return [];
    if (Object.keys)
        return Object.keys(obj);
    var keys = [];
    for (var key in obj)
        if (_.has(obj, key))
            keys.push(key);
    return keys;
}
function isObject(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
}
// console.log(invert_key_value({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));
// 17. Write a TypeScript function to check whether an object contains given property
var checkProperity = function () {
    var developer = {
        name: "Jessica Wilkins",
        country: "United States",
        isEmployed: true
    };
    console.log(developer.hasOwnProperty("name"));
};
// checkProperity()
