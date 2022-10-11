// 1. Write a TypeScript program to list the properties of a TypeScript object
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name,sclass,rollno

let listProp=()=>{
   var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 }; 

let text:string|number=""
for(let i in student){
    text=text+student[i]+" "
}
 console.log(text);
 
}
// listProp()

// 2. Write a TypeScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

let delRollNo=()=>{
    var student = {
 name : "David Rayy",
 sclass : "VI",
 rollno : 12 }; 
 
 let text:string|number=""
 for(let i in student){
     text=text+student[i]+" "
 }
  console.log(`Before delete :       ${text}`);
 delete student.rollno;

let text1:string|number=""
for(let i in student){
    text1=text1+student[i]+" "
}
console.log(`After delete :        ${text1}`);
 }
//  delRollNo()
// 3. Write a TypeScript program to get the length of a TypeScript object.   
// Sample object :
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
let lengthObj=()=>{
   var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 }; 

let length=Object.keys(student).length
console.log(length);

}
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

let display=()=>{
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
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }]; 
   for(let i=0; i<library.length; i++){
    // console.log(library[i]);
    let book= `  ${library[i].title} Written By : ${library[i].author}`
    
    library[i].readingStatus==true? console.log(`Already read  ${book}`) : console.log(`Still Not read  ${book}` )

   }
}
// display()

// 5. Write a TypeScript program to get the volume of a Cylinder with four decimal places using object classes.   
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.
interface c{
    height:number,
    diameter:number
}

class cylinder{
   height:number;
   diameter:number;
   constructor(height:number,diameter:number){
       this.height=height
       this.diameter=diameter
   }
   vol():void{
     let r=this.diameter/2
     let result=this.height*Math.PI*r*r
     console.log(result);   
   }
}
var cyl=new cylinder(7,4)
cyl.vol()


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
