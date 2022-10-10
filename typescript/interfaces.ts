interface p{
    name:string,
    age:number,
    fname:string,
    sayHi: ()=>string
}
var person:p={name:'ali',age:22,fname:'ahmad',sayHi:()=>{return 'hello'};
}
    

console.warn(person);
// console.warn(person.sayHi());
interface RunOptions
{
program:string;
commandLine:string[]|string|(()=>string);
}



class Car
{ //field
engine:string;
//constructor
constructor(engine:string)
{
this.engine=engine
}
//function
disp():void
{
console.log("Function displays Engine is : "+this.engine)
}
}
//create an object
var obj= new Car("XXSY1")
//access the field
// console.log("Reading attribute value Engine as : "+obj.engine)
//access the function
obj.disp()
