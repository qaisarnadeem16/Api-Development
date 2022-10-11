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
cyl.vol();
// let cylinder=(height:number,diameter:number)=>{
//     this.height=height;
//     this.diameter=diameter;
// }
// cylinder.prototype.volume=function(){
//     var r:number=this.diameter/2 
//     var h:number=this.height
//      let result= h * Math.PI *(r*r);
//      console.log(result);
//      return result
// }
// let cyl=new cylinder(7,4)
// console.log(cyl.volume().toFixed(4));
