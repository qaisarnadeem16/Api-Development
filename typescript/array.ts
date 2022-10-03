// let arr:number=[3,1,2,3,4,5]
// let alph:string=['A','s','f']

// let alpharr=arr.concat(alph);

// console.log(alpharr);


function myReplace(text:string, replaceTo:String , replaceWith:string):string{
    
  console.log("Old Text    :   " + text)
  let splitStr=text.split(replaceTo);
  let  finalResult=splitStr.join(replaceWith)
  console.log("After Replacement    :  " +finalResult)
  return finalResult

// var finalResult=text.replace(replaceTo,replaceWith)
// console.log(finalResult);



}
// myReplace("I love Pakistan","love","like")
// myReplace("I love Punjab","love","like")

var ages:number[]=[12,3,12,3,22,11,21]
ages.forEach(function(a,index){
  console.log(a);
  
})
// let isBig=(e)=>{
//   return e>10;
// }
// var a=ages.filter(isBig)
// console.log(a);

//   let b=ages.some(checkage)
//   console.log(b);
  
// function checkage(e){
//  return e<18;

// }